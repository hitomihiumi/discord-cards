import { exec } from 'child_process';
//@ts-ignore
import fetch from "node-fetch";
import * as fs from "fs";
import {resolve} from "path";

export async function loadStyle(name: string, type: string) {
    if (!name || !type) throw new Error("Name and type are required");
    if (name.includes(" ") || type.includes(" ")) throw new Error("Name and type cannot contain spaces");
    if (name.includes("/") || type.includes("/")) throw new Error("Name and type cannot contain slashes");

    let data;

    try {
        data = require(resolve('./stylelib/' + type + '/' + name + '.js'));
    } catch (e) {
        await fetch(`https://raw.githubusercontent.com/hitomihiumi/discord-cards-styles/master/styleslib/${type}/${name}.js`).then(async (res: {
            text: () => any;
        }) => {
            let style = await res.text();

            if (!fs.existsSync(resolve(`./stylelib/${type}`))) fs.mkdirSync(resolve(`./stylelib/${type}`), {recursive: true});

            fs.appendFileSync(resolve(`./stylelib/${type}/${name}.js`), style, {encoding: 'utf8'})

            console.log('[Discord-Cards] Style successful downloaded.');

            data = require(resolve('./stylelib/' + type + '/' + name + '.js'));
        }).catch((e: any) => {
            console.log(e);
        });
    }

    if (!data) throw new Error('[Discord-Cards] Style ' + name + ' not found for ' + type + '!');
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
    str = str.replace(/#{levelFontSize}#/g, data.levelFontSize ? data.levelFontSize : 33);

    if (typeof data.background === 'string') str = str.replace(/#{background}#/g, data.background);
    else str = data.background.toJSON();
    if (typeof data.progressColor === 'string') str = str.replace(/#{progressColor}#/g, data.progressColor);
    else str = data.progressColor.toJSON();
    if (typeof data.textColor === 'string') str = str.replace(/#{textColor}#/g, data.textColor);
    else str = data.textColor.toJSON();

    return str;
}