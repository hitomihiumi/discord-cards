import { Font, LazyCanvas } from '@hitomihiumi/lazy-canvas';
//@ts-ignore
import { loadStyle, dataReplace } from '../utils';

export class RankCard {
    data: any;

    constructor(data: any) {
        this.data = { ...data }
    }

    setBackground(color: string) {
        this.data.background = color;
    }

    setLevel(level: number) {
        if (isNaN(level)) throw new Error('Level must be a number');
        this.data.level = level;
    }

    setCurrentXp(xp: number) {
        if (isNaN(xp)) throw new Error('XP must be a number');
        this.data.xp = xp;
    }

    setNeededXp(xp: number) {
        if (isNaN(xp)) throw new Error('Needed XP must be a number');
        this.data.neededXp = xp;
    }

    setAvatar(url: string) {
        this.data.avatar = url;
    }

    setFont(font: Font) {
        this.data.font = font.toJSON();
    }

    setProgressColor(color: string) {
        this.data.progressColor = color;
    }

    setTextColor(color: string) {
        this.data.textColor = color;
    }

    setTotalLevels(levels: number) {
        if (isNaN(levels)) throw new Error('Total levels must be a number');
        this.data.totalLevels = levels;
    }

    setNextLevel(level: number) {
        if (isNaN(level)) throw new Error('Next level must be a number');
        this.data.nextLevel = level;
    }

    setTotalXp(xp: number) {
        if (isNaN(xp)) throw new Error('Total XP must be a number');
        this.data.totalXp = xp;
    }

    setStyle(style: string) {
        this.data.style = style;
    }

    async render() {
        let data = await loadStyle(this.data.style, 'rank');

        data.data.layers.forEach((layer: any) => {
            switch (layer.type) {
                case 'text':
                    if (this.data.font?.font) layer.font = this.data.font.font;
                    if (this.data.font?.weight) layer.weight = this.data.font.weight;
                    if (this.data.textColor) layer.color = this.data.textColor;
                    layer.text = dataReplace(layer.text, this.data);
                    break;
                case 'ellipseimage' || 'image':
                    layer.image = dataReplace(layer.image, this.data);
                    break;
                default:
                    layer.color = dataReplace(layer.color, this.data);
                    break;
            }
        })

        let image = await new LazyCanvas().setData(data.data).renderImage()

        return image;
    }
}