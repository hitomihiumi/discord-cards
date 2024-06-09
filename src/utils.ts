import { exec } from 'child_process';

export function downloadStyles() {
    exec(`git clone https://github.com/hitomihiumi/discord-cards-styles/`, (error, stdout, stderr) => {
        if (error) {
            console.error(error);
            return;
        }

        console.log('[Discord-Cards] Styles successful downloaded.');
    });
}

export async function loadStyle(name: string, type: string) {
    if (!name || !type) throw new Error("Name and type are required");
    if (name.includes(" ") || type.includes(" ")) throw new Error("Name and type cannot contain spaces");
    if (name.includes("/") || type.includes("/")) throw new Error("Name and type cannot contain slashes");

    let data = require('../discord-cards-styles/styleslib/' + type + '/' + name + '.js');

    if (!data) throw new Error(`[Discord-Cards] Style not found \`${name}\` for \`${type}\`!`);

    return data;
}

module.exports.loadStyle = loadStyle;

export function dataReplace(str: string, data: any) {
    str = str.replace(/#{avatar}#/g, data.avatar);
    str = str.replace(/#{name}#/g, data.name);
    str = str.replace(/#{level}#/g, data.level);
    str = str.replace(/#{xp}#/g, data.xp);
    str = str.replace(/#{neededXp}#/g, data.neededXp);
    str = str.replace(/#{nextLevel}#/g, data.nextLevel);
    str = str.replace(/#{totalXp}#/g, data.totalXp);
    str = str.replace(/#{totalLevels}#/g, data.totalLevels);
    str = str.replace(/#{background}#/g, data.background);
    str = str.replace(/#{progressColor}#/g, data.progressColor);
    str = str.replace(/#{textColor}#/g, data.textColor);

    return str;
}