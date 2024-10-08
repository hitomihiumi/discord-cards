<a href="https://www.npmjs.com/package/@hitomihiumi/discord-cards"><img src="https://img.shields.io/npm/v/@hitomihiumi/discord-cards.svg?maxAge=3600" alt="npm version" /></a>
<a href="https://www.npmjs.com/package/@hitomihiumi/discord-cards"><img src="https://img.shields.io/npm/dt/@hitomihiumi/discord-cards.svg?maxAge=3600" alt="npm downloads" /></a>
# Introduction
A simple module with out-of-the-box solutions for rank, profile and user greeting cards.

## Get Started

1. Install the module by using `npm i @hitomihiumi/discord-cards@latest`
2. Enjoy!

## Documentation

You can find the documentation [here](https://docs.hitomihiumi.xyz/)

## Example

```ts
import { RankCard, fonts } from "@hitomihiumi/discord-cards";
import * as fs from 'fs';

const card = new RankCard()
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
    .setBackground('https://www.sumadhwaseva.com/wp-content/uploads/2013/10/Grey-Background-Website-Wallpapers-600x200.jpg')
    .setLevel(5)
    .setCurrentXp(100)
    .setNeededXp(200)
    .setProgressColor('#7289da')
    .setTextColor('#ffffff')
    .setStyle('base')
    .setName('Hitomi')
    .setFont(fonts.opensansBold);

async function main() {
    let canvas = await card.render();
    fs.writeFileSync('test.png', canvas);
}

main();
```

![](https://i.imgur.com/3Um8Ncc.png)

## Styles

Styles storage location [`discord-cards-styles`](https://github.com/hitomihiumi/discord-cards-styles/tree/master) repository. To load your own styles, create a pull-request.
