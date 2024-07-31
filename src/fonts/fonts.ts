import { Font } from "@hitomihiumi/lazy-canvas";
import { resolve } from "path";
import * as fs from "fs";

// Да это костыль, но он работает
let modulePath = './node_modules/@hitomihiumi/discord-cards'
if (!fs.existsSync(resolve(`./node_modules/@hitomihiumi/discord-cards/`))) modulePath = '.'

let fonts = {
    bellota: new Font().setFamily('Bellota').setPath(resolve(modulePath + '/dist/fonts/Bellota/Bellota-Bold.ttf')).setWeight('bold'),
    interBold: new Font().setFamily('Inter').setPath(resolve(modulePath + '/dist/fonts/Inter/Inter-Bold.ttf')).setWeight('bold'),
    interExtraBold: new Font().setFamily('Inter').setPath(resolve(modulePath + '/dist/fonts/Inter/Inter-ExtraBold.ttf')).setWeight('extra-bold'),
    interSemiBold: new Font().setFamily('Inter').setPath(resolve(modulePath + '/dist/fonts/Inter/Inter-SemiBold.ttf')).setWeight('semi-bold'),
    manropeRegular: new Font().setFamily('Manrope').setPath(resolve(modulePath + '/dist/fonts/Manrope/Manrope-Regular.ttf')).setWeight('regular'),
    manropeBold: new Font().setFamily('Manrope').setPath(resolve(modulePath + '/dist/fonts/Manrope/Manrope-Bold.ttf')).setWeight('bold'),
    manropeExtraBold: new Font().setFamily('Manrope').setPath(resolve(modulePath + '/dist/fonts/Manrope/Manrope-ExtraBold.ttf')).setWeight('extra-bold'),
    manropeSemiBold: new Font().setFamily('Manrope').setPath(resolve(modulePath + '/dist/fonts/Manrope/Manrope-SemiBold.ttf')).setWeight('semi-bold'),
    nunitoBold: new Font().setFamily('Nunito').setPath(resolve(modulePath + '/dist/fonts/Nunito/Nunito-Bold.ttf')).setWeight('bold'),
    nunitoExtraBold: new Font().setFamily('Nunito').setPath(resolve(modulePath + '/dist/fonts/Nunito/Nunito-ExtraBold.ttf')).setWeight('extra-bold'),
    nunitoSemiBold: new Font().setFamily('Nunito').setPath(resolve(modulePath + '/dist/fonts/Nunito/Nunito-SemiBold.ttf')).setWeight('semi-bold'),
    opensansBold: new Font().setFamily('OpenSans').setPath(resolve(modulePath + '/dist/fonts/OpenSans/OpenSans-Bold.ttf')).setWeight('bold'),
    opensansExtraBold: new Font().setFamily('OpenSans').setPath(resolve(modulePath + '/dist/fonts/OpenSans/OpenSans-ExtraBold.ttf')).setWeight('extra-bold'),
    opensansSemiBold: new Font().setFamily('OpenSans').setPath(resolve(modulePath + '/dist/fonts/OpenSans/OpenSans-SemiBold.ttf')).setWeight('semi-bold'),
    ralewayBold: new Font().setFamily('Raleway').setPath(resolve(modulePath + '/dist/fonts/Raleway/Raleway-Bold.ttf')).setWeight('bold'),
    ralewayExtraBold: new Font().setFamily('Raleway').setPath(resolve(modulePath + '/dist/fonts/Raleway/Raleway-ExtraBold.ttf')).setWeight('extra-bold'),
    ralewaySemiBold: new Font().setFamily('Raleway').setPath(resolve(modulePath + '/dist/fonts/Raleway/Raleway-SemiBold.ttf')).setWeight('semi-bold'),
    robotoslabBold: new Font().setFamily('RobotoSlab').setPath(resolve(modulePath + '/dist/fonts/RobotoSlab/RobotoSlab-Bold.ttf')).setWeight('bold'),
    robotoslabExtraBold: new Font().setFamily('RobotoSlab').setPath(resolve(modulePath + '/dist/fonts/RobotoSlab/RobotoSlab-ExtraBold.ttf')).setWeight('extra-bold'),
    robotoslabSemiBold: new Font().setFamily('RobotoSlab').setPath(resolve(modulePath + '/dist/fonts/RobotoSlab/RobotoSlab-SemiBold.ttf')).setWeight('semi-bold'),
    spectralscBold: new Font().setFamily('SpectralSC').setPath(resolve(modulePath + '/dist/fonts/SpectralSC/SpectralSC-Bold.ttf')).setWeight('bold'),
    spectralscExtraBold: new Font().setFamily('SpectralSC').setPath(resolve(modulePath + '/dist/fonts/SpectralSC/SpectralSC-ExtraBold.ttf')).setWeight('extra-bold'),
    spectralscSemiBold: new Font().setFamily('SpectralSC').setPath(resolve(modulePath + '/dist/fonts/SpectralSC/SpectralSC-SemiBold.ttf')).setWeight('semi-bold'),
}

export { fonts };