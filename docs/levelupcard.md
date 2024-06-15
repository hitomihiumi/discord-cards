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