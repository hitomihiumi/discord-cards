import { ProfileCard, fonts } from "../src";
import * as fs from 'fs'

const card = new ProfileCard()
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
    .setBackground('https://i.pinimg.com/564x/3d/45/32/3d453283cac1c901dc1cbe6e5fc7171b.jpg')
    .setLevel(1)
    .setCurrentXp(100)
    .setNeededXp(200)
    .setProgressColor('#7289da')
    .setTextColor('#ffffff')
    .setStyle('base')
    .setName('Hitomi')
    .setFont(fonts.opensansBold)
    .setPosition('1')
    .setBiography('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.');

async function main() {
    let canvas = await card.render();
    console.log(canvas);

    fs.writeFileSync('test.png', canvas);
}

main();