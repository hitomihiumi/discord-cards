//@ts-ignore
import fetch from "node-fetch";
import * as fs from "fs";
import { resolve } from "path";
import { LazyCanvas } from "@hitomihiumi/lazy-canvas";

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
    str = str.replace(/#{avatar}#/g, data.avatar ? data.avatar : 'https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg' );
    str = str.replace(/#{name}#/g, data.name ? data.name : 'No Name');
    str = str.replace(/#{level}#/g, data.level ? data.level : 1);
    str = str.replace(/#{xp}#/g, data.xp ? data.xp : 0);
    str = str.replace(/#{neededXp}#/g, data.neededXp ? data.neededXp : 100);
    str = str.replace(/#{nextLevel}#/g, data.nextLevel ? data.nextLevel : 2);
    str = str.replace(/#{totalXp}#/g, data.totalXp ? data.totalXp : 0);
    str = str.replace(/#{biography}#/g, data.biography ? data.biography : 'No Biography');
    str = str.replace(/#{position}#/g, data.position ? data.position : 'No Position');
    str = str.replace(/#{totalLevels}#/g, data.totalLevels ? data.totalLevels : 0);
    str = str.replace(/#{background}#/g, data.background ? data.background : 'https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg');
    str = str.replace(/#{guild}#/g, data.guild ? data.guild : 'No Guild');
    str = str.replace(/#{guildAvatar}#/g, data.guild?.avatar ? data.guild?.avatar : 'https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg');
    str = str.replace(/#{guildName}#/g, data.guild?.name ? data.guild?.name : 'No Guild Name');
    str = str.replace(/#{previousLevel}#/g, data.previousLevel ? data.previousLevel : 0);

    if (typeof data.levelFontSize === 'object') {
        let ind = [ "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" ];
        for (let i = 0; i < data.levelFontSize.length; i++) {
            str = str.replace(new RegExp(`#{levelFontSize${ind[i]}}#`, 'g'), data.levelFontSize[i]);
        }
    } else {
        str = str.replace(/#{levelFontSize}#/g, data.levelFontSize ? data.levelFontSize : 33);
    }

    if (typeof data.progressColor === 'object') str = data.progressColor.toJSON();
    else str = str.replace(/#{progressColor}#/g, data.progressColor ? data.progressColor : '#ff8a8a');
    if (typeof data.textColor === 'object') str = data.textColor.toJSON();
    else str = str.replace(/#{textColor}#/g, data.textColor ? data.textColor : '#ffffff');
    if (typeof data.decorationColor === 'object') str = data.decorationColor.toJSON();
    else str = str.replace(/#{decorationColor}#/g, data.decorationColor ? data.decorationColor : '#ffffff');
    if (typeof data.borderColor === 'object') str = data.borderColor.toJSON();
    else str = str.replace(/#{borderColor}#/g, data.borderColor ? data.borderColor : '#ffffff');

    return str;
}

export async function renderCard(data: any, thisData: any) {
    data.data.layers.forEach((layer: any) => {
        switch (layer.type) {
            case 'text':
                if (thisData.font?.family) layer.font = thisData.font.family;
                if (thisData.font?.weight) layer.weight = thisData.font.weight;
                layer.color = dataReplace(layer.color, thisData);
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

    let image: LazyCanvas | NodeJS.ArrayBufferView = new LazyCanvas().setData(data.data)

    if (thisData.font) image.loadFonts(thisData.font)

    image = await image.renderImage()

    return image;
}