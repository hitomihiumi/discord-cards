//@ts-ignore
import fetch from "node-fetch";
import * as fs from "fs";
import { resolve } from "path";
import {LazyCanvas} from "@hitomihiumi/lazy-canvas";

export async function updateStyle(name: string, type: string) {
    await fetch(`https://raw.githubusercontent.com/hitomihiumi/discord-cards-styles/master/styleslib/${type}/${name}.js`).then(async (res: { text: () => any; }) => {
        let style = await res.text();

        if (!fs.existsSync(resolve(`./stylelib/${type}`))) fs.mkdirSync(resolve(`./stylelib/${type}`), {recursive: true});

        if (!fs.existsSync(resolve(`./stylelib/${type}/${name}.js`))) {
            fs.appendFileSync(resolve(`./stylelib/${type}/${name}.js`), style, {encoding: 'utf8'})
            console.log('[Discord-Cards] Style ' + name + ' successful downloaded.');
        } else {
            if (fs.readFileSync(resolve(`./stylelib/${type}/${name}.js`), {encoding: 'utf8'}) !== style) {
                fs.writeFileSync(resolve(`./stylelib/${type}/${name}.js`), style, {encoding: 'utf8'})
                console.log('[Discord-Cards] Style ' + name + ' successful updated.');
            }
        }
    }).catch((e: any) => {
        console.log(e);
    });
}

export async function loadStyle(name: string, type: string) {
    if (!name || !type) throw new Error("Name and type are required");
    if (name.includes(" ") || type.includes(" ")) throw new Error("Name and type cannot contain spaces");
    if (name.includes("/") || type.includes("/")) throw new Error("Name and type cannot contain slashes");

    let data;

    await updateStyle(name, type)

    data = require(resolve('./stylelib/' + type + '/' + name + '.js'));

    if (!data) throw new Error('[Discord-Cards] Style ' + name + ' not found for ' + type + '!');
    // @ts-ignore
    if (data.data.length === 0) throw new Error('[Discord-Cards] Style ' + name + ' is empty for ' + type + '!');

    return data;
}

module.exports.loadStyle = loadStyle;

export function dataReplace(str: string, data: any) {
    if (typeof str !== 'string') str = String(str);
    switch (str) {
        case '#{avatar}#':
            str = str.replace(/#{avatar}#/g, data.avatar ? data.avatar : 'https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg' );
            return str;
        case '#{name}#':
            str = str.replace(/#{name}#/g, data.name ? data.name : 'No Name');
            return str;
        case '#{level}#':
            str = str.replace(/#{level}#/g, data.level ? data.level : 1);
            return str;
        case '#{nextLevel}#':
            str = str.replace(/#{nextLevel}#/g, data.nextLevel ? data.nextLevel : 2);
            return str;
        case '#{totalXp}#':
            str = str.replace(/#{totalXp}#/g, data.totalXp ? data.totalXp : 0);
            return str;
        case '#{biography}#':
            str = str.replace(/#{biography}#/g, data.biography ? data.biography : 'No Biography');
            return str;
        case '#{position}#':
            str = str.replace(/#{position}#/g, data.position ?  data.position : 'No Position');
            return str;
        case '#{levelFontSize}#':
            str = str.replace(/#{levelFontSize}#/g, data.levelFontSize ? data.levelFontSize : 33);
            return str;
        case '#{totalLevels}#':
            str = str.replace(/#{totalLevels}#/g, data.totalLevels ? data.totalLevels : 0);
            return str;
        case '#{background}#':
            str = str.replace(/#{background}#/g, data.background ? data.background : 'https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg');
            return str;
        case '#{progressColor}#':
            if (typeof data.progressColor === 'string') str = str.replace(/#{progressColor}#/g, data.progressColor);
            else if (data.progressColor) str = data.progressColor.toJSON();
            return str;
        case '#{textColor}#':
            if (typeof data.textColor === 'string') str = str.replace(/#{textColor}#/g, data.textColor);
            else if (data.textColor) str = data.textColor.toJSON();
            return str;
        case '#{decorationColor}#':
            if (typeof data.decorationColor === 'string') str = str.replace(/#{decorationColor}#/g, data.decorationColor);
            else if (data.decorationColor) str = data.decorationColor.toJSON();
            return str;
        case '#{borderColor}#':
            if (typeof data.borderColor === 'string') str = str.replace(/#{borderColor}#/g, data.borderColor);
            else if (data.borderColor) str = data.borderColor.toJSON();
            return str;
        default:
            if (typeof data.levelFontSize === 'object' && str.includes('levelFontSize')) {
                let ind = [ "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" ];
                for (let i = 0; i < data.levelFontSize.length; i++) {
                    str = str.replace(new RegExp(`#{levelFontSize${ind[i]}}#`, 'g'), data.levelFontSize[i]);
                }
                return str;
            } else if (str.includes('#{xp}#') || str.includes('#{neededXp}#')) {
                str = str.replace(/#{xp}#/g, data.xp ? data.xp : 0);
                str = str.replace(/#{neededXp}#/g, data.neededXp ? data.neededXp : 0);
                return str;
            } else return str;
    }
}

export async function renderCard(data: any, thisData: any) {
    data.data.layers.forEach((layer: any) => {
        switch (layer.type) {
            case 'text':
                if (thisData.font?.family) layer.font = thisData.font.family;
                if (thisData.font?.weight) layer.weight = thisData.font.weight;
                if (thisData.textColor) layer.color = thisData.textColor;
                layer.size = dataReplace(layer.size, thisData);
                layer.text = dataReplace(layer.text, thisData);
                break;
            case 'ellipseimage' || 'image':
                layer.image = dataReplace(layer.image, thisData);
                break;
            default:
                layer.color = dataReplace(layer.color, thisData);
                layer.width = eval(dataReplace(layer.width, thisData));
                break;
        }
    })

    let image = await new LazyCanvas().setData(data.data).loadFonts(thisData.font).renderImage()

    return image;
}