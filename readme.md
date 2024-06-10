# Introduction
A simple module with out-of-the-box solutions for rank, profile and user greeting cards.

## Get Started

1. Install the module by using `npm i @hitomihiumi/discord-cards`
2. Enjoy!

## Example

```ts
import { RankCard, fonts } from "@hitomihiumi/discord-cards";
import * as fs from 'fs';

const card = new RankCard()
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
    .setBackground('https://i.pinimg.com/564x/27/c7/fa/27c7fabf2d744857e3bd4a094ad9b4c4.jpg')
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

## Documentation

Class documentation can be found below by clicking on the appropriate class names.

- [Base](./docs/base.md)
- [ProfileCard](./docs/profilecard.md)
- [RankCard](./docs/rankcard.md)

