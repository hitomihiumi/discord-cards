# GoodbyeCard

The class of the server user's goodbye card.

Extends [Base](./base.md)

<table>
    <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Data type</th>
        <th>Notes</th>
    </tr>
    <tr>
        <td>setGuild()</td>
        <td>To set the guild name and avatar information</td>
        <td>string, string</td>
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
import { GoodbyeCard, fonts } from "@hitomihiumi/discord-cards";
import * as fs from 'fs';

const card = new GoodbyeCard()
    .setGuild("Test Guild Name")
    .setName("Hitomi")
    .setAvatar('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
    .setBackground('https://get.wallhere.com/photo/swd3e2-anime-girls-Granblue-Fantasy-Djeeta-Granblue-Fantasy-simple-background-black-background-short-hair-blond-hair-hair-ornament-bangs-gray-eyes-armpits-dress-weapon-sword-cleavage-1479535.jpg')
    .setStyle('base')
    .setFont(fonts.opensansBold)

async function main() {
    let canvas = await card.render();
    console.log(canvas);

    fs.writeFileSync('test.png', canvas);
}

main();
```

![](https://i.imgur.com/aM7v3Fq.png)