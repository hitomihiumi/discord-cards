# ProfileCard

A class that creates a profile card.

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
        <td>-</td>
    </tr>
    <tr>
        <td>setLevelFontSize()</td>
        <td>To set the size of the user level number</td>
        <td>number</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setNextLevel()</td>
        <td>To set the next user level</td>
        <td>number</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setCurrentXp()</td>
        <td>To set the user's current amount of experience</td>
        <td>number</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setNeededXp()</td>
        <td>To set the amount of user experience required to gain the next level</td>
        <td>number</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setTotalXp()</td>
        <td>To set the total amount of experience gained by the user over time</td>
        <td>number</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setProgressColor()</td>
        <td>To set the color of the user progress bar</td>
        <td>string, Gradient* or Pattern*</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setBiography()</td>
        <td>To set the user-defined biography text</td>
        <td>string</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setPosition()</td>
        <td>To set the user's position on the leaderboard </td>
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

*[Gradient](https://github.com/hitomihiumi/lazy-canvas/blob/main/docs/gradient.md)
*[Pattern](https://github.com/hitomihiumi/lazy-canvas/blob/main/docs/pattern.md)

## Example

```ts
import { ProfileCard, fonts, updateStyle } from "@hitomihiumi/discord-cards";
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
```

![](https://i.imgur.com/MGU4n0A.png)