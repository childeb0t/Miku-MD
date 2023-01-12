const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['201146593819']  // -- Add multiple numbers like  ['918101967835','919357940276','917896587453']
global.OwnerNumber = ['201146593819']  // -- Add multiple numbers like  ['918101967835','919357940276','917896587453']
global.ownertag = ['201146593819']  // -- Add multiple numbers like  ['918101967835','919357940276','917896587453']
global.BotName = "𝙏𝘼𝙍𝙏𝘼𝙂𝙇𝙄𝘼 𝘽𝙊𝙏✩"
global.packname = "𝙏𝘼𝙍𝙏𝘼𝙂𝙇𝙄𝘼 𝘽𝙊𝙏✩"
global.author = "By: ₐⱼₐₓ"
global.OwnerName = "ℳ𝒜ℒ𝒜𝒦"
global.BotSourceCode = "https://github.com/FantoX001/Miku-MD" // -- Please don't change -- //
global.SupportGroupLink = "https://chat.whatsapp.com/JcBzjRIxM5UHfuJbt0KrWt"  // -- Please don't change -- //
global.sessionName = "session"  // -- Don't change otherwise bot will not work -- //



global.prefa = ['!'] // Prefix ---  change it to anythong you want except '@' //


global.location = "West Bengal, India"
global.reactmoji = "🫂🌀"
global.themeemoji = "🌊"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://github.com/FantoX001"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: '𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴 𝙶𝙸𝚁𝙻𝚈✓',
    useradmin: 'Sorry,هذا الامر فقط للرجاله المشرفين,استرجل وجرب مره اخرى!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *تشايلدي* can use this command,!',
    grouponly: 'This command is only made for *Groups*!',
    privateonly: 'This command is only made for *Private Chat*!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Chotto Matte,استنىِ اوني تشان🥺...',
    nolink: 'Please provide me *link*,!',
    error: 'ＥＲＲＯＲ بوظتوا البوت 😭!',
    banned: 'You are *Banned* fron using commands!',
    bangc: 'This Group is *Banned* from using Commands!(ₐⱼₐₓ:احسن وربنا منا مصلحه)',
    nonsfw: 'Dont be a pervert! This is not a NSFW enabled group!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
