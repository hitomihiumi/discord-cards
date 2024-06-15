module.exports.RankCard = require('./cards/rank.js').RankCard;
module.exports.ProfileCard = require('./cards/profile.js').ProfileCard;
module.exports.WelcomeCard = require('./cards/welcome.js').WelcomeCard;
module.exports.GoodbyeCard = require('./cards/goodbye.js').GoodbyeCard;
module.exports.LevelUpCard = require('./cards/levelup.js').LevelUpCard;

module.exports.loadStyle = require('./utils.js').loadStyle;
module.exports.dataReplace = require('./utils.js').dataReplace;
module.exports.updateStyle = require('./utils.js').updateStyle;

module.exports.fonts = require('./fonts/fonts.js').fonts;