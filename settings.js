//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['79586848937']
global.premium = ['79586848937']
global.ownernomer = '79586848937'
global.ownername = 'Alex Bot〽️'
global.botname = 'Alex BOT'
global.footer = 'Alex Bot'
global.cap = '*Alex Bot*'
global.ig = 'https://youtube.com/channel/UCeGgOY9B-5fYrYD5ELPgMkQ'
global.region = 'Sri Lanka, Sabaragamuwa, Embilipitiya'
global.sc = 'https://youtube.com/channel/UCeGgOY9B-5fYrYD5ELPgMkQ'
global.myweb = 'https://wa.me/+79586848937'
global.packname = 'Alex Sticker Bot'
global.author = 'Alex Bot〽️'
global.autobio = 'true'
global.sessionName = 'session'
global.prefa = ['','!','.'💗'😙','😩','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Alex Bot✓',
    admin: 'هذه الميزة للمشرف فقط!',
    botAdmin: 'يجب أن يكون البوت مسؤولاً أولاً!',
    owner: 'هذه الميزة مخصصة فقط للمالك !!',
    group: 'الميزة المستخدمة فقط للمجموعات!',
    private: 'الميزات المستخدمة فقط للدردشة الخاصة!',
    bot: 'هذه الميزة مخصصة فقط للبوت',
    wait:'رجاء انتظر...',
    error: ''خطأ!!! ربما انتهت صلاحية مفتاح Api 🤔!',
    endLimit: 'انتهت صلاحية حدنا اليومي. سيتم إعادة تعيين الحد كل 12 ساعة',
}
    global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
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
