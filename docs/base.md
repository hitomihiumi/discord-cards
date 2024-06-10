# Base

A base class that has common functions for all classes.


<table>
    <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Data type</th>
        <th>Notes</th>
    </tr>
    <tr>
        <td>setAvatar()</td>
        <td>To set a link to a user's avatar</td>
        <td>string</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setName()</td>
        <td>To set the username</td>
        <td>string</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setBackground()</td>
        <td>To set the background</td>
        <td>string</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setFont()</td>
        <td>To install a custom font</td>
        <td>Font*</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setTextColor()</td>
        <td>To set the text color</td>
        <td>string, Gradient* or Pattern*</td>
        <td>-</td>
    </tr>
</table>

*[Font](https://github.com/hitomihiumi/lazy-canvas/blob/main/docs/font.md)
*[Gradient](https://github.com/hitomihiumi/lazy-canvas/blob/main/docs/gradient.md)
*[Pattern](https://github.com/hitomihiumi/lazy-canvas/blob/main/docs/pattern.md)

## Child Classes

- [ProfileCard](./profilecard.md)
- [RankCard](./rankcard.md)