import {RankCard} from "../src";
import * as fs from 'fs';

const card = new RankCard({
    avatar: 'https://i.pinimg.com/564x/4b/79/b6/4b79b6c247ca47bd53ca06dae2cc6008.jpg',
    background: 'https://i.pinimg.com/564x/27/c7/fa/27c7fabf2d744857e3bd4a094ad9b4c4.jpg',
    level: 5,
    xp: 100,
    neededXp: 200,
    totalXp: 1000,
    totalLevels: 10,
    nextLevel: 6,
    progressColor: '#7289da',
    textColor: '#ffffff',
    style: 'base',
});

async function main() {
    let canvas = await card.render();
    console.log(canvas);

    fs.writeFileSync('test.png', canvas);
}

main();