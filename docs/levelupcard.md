# LevelUpCard

A class for creating a card with a notification about level increase.

Extends [Base](./base.md)

<table>
    <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Data type</th>
        <th>Notes</th>
    </tr>
    <tr>
        <td>setLevel()</td>
        <td>To set the current user level</td>
        <td>number</td>
        <td>The previous level does not need to be specified as it is calculated automatically</td>
    </tr>
    <tr>
        <td>setLevelFontSizes()</td>
        <td>To set the font sizes of the user levels numbers</td>
        <td>number</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setPosition()</td>
        <td>To set the user's position on the leaderboard</td>
        <td>string, number</td>
        <td>-</td>
    </tr>
    <tr>
        <td>render()</td>
        <td>Method intended for obtaining image data</td>
        <td>-</td>
        <td>Returns NodeJS.ArrayBufferView</td>
    </tr>
</table>

## Example

```ts
import { LevelUpCard, fonts } from "@hitomihiumi/discord-cards";
import * as fs from 'fs';

const card = new LevelUpCard()
    .setName("Hitomi")
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
    .setBackground('https://cs12.pikabu.ru/post_img/big/2021/09/16/10/1631813426193895567.png')
    .setStyle('base')
    .setFont(fonts.opensansBold)
    .setCurrentLevel(2)
    .setPreviousLevel(1)
    .setLevelFontSizes(50, 50)

async function main() {
    let canvas = await card.render();
    console.log(canvas);

    fs.writeFileSync('test.png', canvas);
}

main();
```

![](https://i.imgur.com/P1eLwUn.png)