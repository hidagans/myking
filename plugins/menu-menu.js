import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(global.img)).buffer(), sourceUrl: redesMenu.getRandom() }}}


let menu = `⌜ *${wm}* ⌟  

*Hai ${taguser}*

□ *Runtime :* *${uptime}*
□ *Users:* *${Object.keys(global.db.data.users).length}*
□ *Terdaftar: ${rtotalreg} de ${totalreg}* ${(conn.user.jid == global.conn.user.jid ? '' : `\n□ *Saya adalah sub bot dari:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}

◉ _*INFO USERS*_
□ *🙌 Register:* ${user.registered === true ? '✅' : '❌ _#verificar_'}
□ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : '❌ _#pase premium_'}
□ *🎖️ Level:* ${level}
□ *💎 Diamond:* ${limit}
□ *👾 MajestyCoins:* ${money}
□ *🪙 Tokens:* ${joincount}
□ *🧰 EXP:* ${exp}
□ *⚓ Rank:* ${role}
${readMore}
┌───⊷ *INFO BOT*
┊□ _${usedPrefix}infobot_
┊□ _${usedPrefix}grupos_
┊□ _${usedPrefix}instalarbot_
┊□️ _${usedPrefix}menu2_
┊□ _${usedPrefix}estado_
┊□ _${usedPrefix}ping_
┊□ _Bot_
┊□ _¿Apa yang dimaksud dengan Bot?_
┊□ _Syarat dan Ketentuan_
└─────────────

┌───⊷ *MASUKAN BOT KE GRUP*
┆ 🤖 _${usedPrefix}join *link grup*_ 
┆ 🤖 _${usedPrefix}botemporal *link grup*_
└─────────────

┌───⊷ *SERBOT & JADIBOT*
┆ 🤖 _${usedPrefix}serbot_
┆ 🤖 _${usedPrefix}stop_
┆ 🤖 _${usedPrefix}bots_
└─────────────

┌───⊷ *PERMAINAN*
┆ *Perintah untuk hiburan di grup*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🕹 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┆🕹️ _${usedPrefix}ppt *<kertas /gunting /batu>*_
┆🕹️ _${usedPrefix}love *<nomor / @tag>*_
┆🕹 _${usedPrefix}pertanyaan *<text>*_
┆🕹️ _${usedPrefix}suitpvp *<@tag>*_
┆🕹️ _${usedPrefix}slot *<taruhan>*_
┆🕹️ _${usedPrefix}ttt *<nama room>*_
┆🕹️ _${usedPrefix}delttt_
┆🕹️ _${usedPrefix}simi *<text>*_
┆🕹️ _${usedPrefix}top *<text>*_
┆🕹️ _${usedPrefix}infopasangan_
┆🕹️ _${usedPrefix}lagu_
┆🕹️ _${usedPrefix}pista_
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 💞 Pasangan
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *Membuat pernyataan kepada seseorang*
┆ *untuk menjadi Pasangan!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆❤️➺ _${usedPrefix}listpasangan_
┆❤️➺ _${usedPrefix}pasanganku_
┆❤️➺ _${usedPrefix}tembak *@tag*_
┆❤️➺ _${usedPrefix}terima *@tag*_
┆❤️➺ _${usedPrefix}tolak *@tag*_
┆❤️➺ _${usedPrefix}putus *@tag*_
└─────────────

┌───⊷ *NOMOR OWNER*
┆🤖 _${usedPrefix}owner_
└─────────────

┌───⊷ *MENGAKTIFKAN ATAU MENONAKTIFKAN*
┆ *Konfigurasikan jika Anda adalah Pemilik y/n*
┆ *Admin!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆☑️ _${usedPrefix}enable_
└─────────────

┌───⊷ *MELAPORKAN PERINTAH DENGAN KESALAHAN*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *Laporkan setiap perintah yang gagal agar dapat diperbaiki.*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🚫 _${usedPrefix}lapor *<text>*_
└─────────────

┌───⊷ *JADI PREMIUM*
┆ *Berubah menjadi (a)*
┆ *Pengguna(a) premium!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🎟️ _${usedPrefix}listapremium_
┆🎟️ _${usedPrefix}pase premium_
┆🎟️ _${usedPrefix}pass premium_
└─────────────

┌───⊷ *DOWNLOADER*
┆📥 _${usedPrefix}play *<text>*_
┆📥 _${usedPrefix}play.1 *<text>*_
┆📥 _${usedPrefix}play.2 *<text>*_
┆📥 _${usedPrefix}playdoc *<text>*_
┆📥 _${usedPrefix}playlist *<text>*_
┆📥 _${usedPrefix}playlist2 *<text>*_
┆📥 _${usedPrefix}spotify *<text>*_
┆📥 _${usedPrefix}tiktok *<link / url>*_
┆📥 _${usedPrefix}instagram *<link / url>*_
┆📥 _${usedPrefix}mediafire *<link / url>*_
┆📥 _${usedPrefix}instagram *<link / url>*_
┆📥 _${usedPrefix}gitclone *<link / url>*_
┆📥 _${usedPrefix}gdrive *<link / url>*_
┆📥 _${usedPrefix}xnxxdl *<link / url>*_
┆📥 _${usedPrefix}xvideosdl *<link / url>*_
┆📥 _${usedPrefix}twitter *<link / url>*_
┆📥 _${usedPrefix}fb *<link / url>*_
┆📥 _${usedPrefix}fb2 *<link / url>*_
┆📥 _${usedPrefix}fb3 *<link / url>*_
┆📥 _${usedPrefix}fb4 *<link / url>*_
┆📥 _${usedPrefix}fb5 *<link / url>*_
┆📥 _${usedPrefix}ytmp3 *<link / url>*_
┆📥 _${usedPrefix}ytmp4 *<link / url>*_
┆📥 _${usedPrefix}ytmp3doc *<link / url>*_
┆📥 _${usedPrefix}ytmp4doc *<link / url>*_
┆📥 _${usedPrefix}stickerpack *<link / url>*_
┆📥 _${usedPrefix}stickerly *<text>*_
┆📥 _${usedPrefix}ringtone *<text>*_
┆📥 _${usedPrefix}soundcloud *<text>*_
┆📥 _${usedPrefix}image *<text>*_
┆📥 _${usedPrefix}pinteret *<text>*_
┆📥 _${usedPrefix}wallpaper *<text>*_
┆📥 _${usedPrefix}wallpaper2 *<text>*_
┆📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┆📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┆📥 _${usedPrefix}igstory *<nombre de usuario>*_
┆📥 _${usedPrefix}tiktokstalk *<username>*_
└─────────────

┌───⊷ *GROUPS*
┆ *Tingkatkan Grup Anda dengan MajestyBot*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆💎 _${usedPrefix}add *<nomor>*_
┆💎 _${usedPrefix}kick *<@tag>*_
┆💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┆💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┆💎 _${usedPrefix}promote *<@tag>*_
┆💎 _${usedPrefix}demote *<@tag>*_
┆💎 _admins *<text>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┆💎 _${usedPrefix}demote *<@tag>*_
┆💎 _${usedPrefix}infogroup_
┆💎 _${usedPrefix}resetlink_
┆💎 _${usedPrefix}link_
┆💎 _${usedPrefix}setname *<text>*_
┆💎 _${usedPrefix}setdesc *<text>*_
┆💎 _${usedPrefix}invocar *<text>*_
┆💎 _${usedPrefix}setwelcome *<text>*_
┆💎 _${usedPrefix}setbye *<text>*_
┆💎 _${usedPrefix}hidetag *<text>*_
┆💎 _${usedPrefix}warn *<@tag>*_
┆💎 _${usedPrefix}unwarn *<@tag>*_
┆💎 _${usedPrefix}listwarn_
┆💎 _${usedPrefix}fantasmas_
┆💎 _${usedPrefix}destraba_
┆💎 _${usedPrefix}setpp *<image>*_
└─────────────

┌───⊷ *COVERTER*
┆ *Convierte sticker en image!!*
┆ *Crea enlace de archivos!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🧧 _${usedPrefix}togifaud *<video>*_
┆🧧 _${usedPrefix}robar *text*
┆🧧 _${usedPrefix}wm *text*
┆🧧 _${usedPrefix}toimg *<sticker>*_
┆🧧 _${usedPrefix}tomp3 *<video>*_
┆🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┆🧧 _${usedPrefix}toptt *<video / audio>*_
┆🧧 _${usedPrefix}tovideo *<sticker>*_
┆🧧 _${usedPrefix}tourl *<video / image / audio>*_
┆🧧 _${usedPrefix}tts es *<text>*_
└─────────────


┌───⊷ *MENU +18*
┆ *Gunakan dengan risiko Anda sendiri*
┆ *Catatan: jangan menjadi orang yang brengsek*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🔞 _${usedPrefix}hornymenu_
└─────────────

┌───⊷ *ANONYMOUS CHAT*
┆ *¡Escribe con Alguien* 
┆ *de forma Anónima!* 
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆📳 _${usedPrefix}start_
┆📳 _${usedPrefix}next_
┆📳 _${usedPrefix}leave_
└─────────────

┌───⊷ *PENCARIAN*
┆ *Cari apa yang Anda inginkan dengan Bot!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🔍 _${usedPrefix}stickersearch *<text>*_
┆🔍 _${usedPrefix}stickersearch2 *<text>*_
┆🔍 _${usedPrefix}xnxxsearch *<text>*_
┆🔍 _${usedPrefix}animeinfo *<text>*_
┆🔍 _${usedPrefix}google *<text>*_
┆🔍 _${usedPrefix}letra *<text>*_
┆🔍 _${usedPrefix}wikipedia *<text>*_
┆🔍 _${usedPrefix}ytsearch *<text>*_
┆🔍 _${usedPrefix}apkdone *<text>*_
┆🔍 _${usedPrefix}apkgoogle *<text>*_
┆🔍 _${usedPrefix}apkmody *<text>*
┆🔍 _${usedPrefix}uapkpro *<text>*_
┆🔍 _${usedPrefix}playstore *<text>*_
└─────────────

┌───⊷ *TOOLS*
┆🛠️ _${usedPrefix}spamwa *<nomor|text|jumlah>*_
┆🛠️ _${usedPrefix}tamaño *<jumlah> <image / video>*_
┆🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┆🛠️ _${usedPrefix}encuesta *<text1|text2...>*_
┆🛠️ _${usedPrefix}afk *<motivo>*_
┆🛠️ _${usedPrefix}ocr *<reply image>*_
┆🛠️ _${usedPrefix}acortar *<link / url>*_
┆🛠️ _${usedPrefix}calc *<operacion math>*_
┆🛠️ _${usedPrefix}del *<pesan>*_
┆🛠️ _${usedPrefix}whatmusic *<audio>*_
┆🛠️ _${usedPrefix}readqr *<image (QR)>*_
┆🛠️ _${usedPrefix}qrcode *<text>*_
┆🛠️ _${usedPrefix}readmore *<text1| text2>*_
┆🛠️ _${usedPrefix}styletext *<text>*_
┆🛠️ _${usedPrefix}traducir *<text>*_
┆🛠️ _${usedPrefix}zoom *<text>*_
┆🛠️ _${usedPrefix}nowa *<nomor>*_
┆🛠️ _${usedPrefix}horario_
└─────────────

┌───⊷ *RPG*
┆ *Beli, Dapatkan Sumber Daya*
┆ *Tingkatkan Level dan Peringkat Anda!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆💵 _${usedPrefix}verify_
┆💵 _${usedPrefix}unreg *<nomor sn>*_
┆💵 _${usedPrefix}claim_
┆💵 _${usedPrefix}lb_
┆💵 _${usedPrefix}levelup_
┆💵 _${usedPrefix}perfil_
┆💵 _${usedPrefix}minar_
┆💵 _${usedPrefix}buy_
┆💵 _${usedPrefix}balance_
┆💵 _${usedPrefix}myns_
┆💵 _${usedPrefix}work_
┆💵 _${usedPrefix}buyall_
┆💵 _${usedPrefix}transfer *<tipe> <jumlah> <@tag>*_
└─────────────

┌───⊷ *TOP MAJESYBOT*
┆ *Cari tahu di Leaderboard mana Anda berada!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🏆➺ _${usedPrefix}top | lb | leaderboard_
└─────────────

┌───⊷ *STICKERS*
┆ *Buat stiker*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆👽 _${usedPrefix}sticker *<reply image atau video>*_
┆👽 _${usedPrefix}sticker *<link / url>*_
┆👽 _${usedPrefix}s *<reply image atau video>*_
┆👽 _${usedPrefix}s *<link / url>*_
┆👽 _${usedPrefix}sfull *<image atau video>*_
┆👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┆👽 _${usedPrefix}scircle *<image>*_
┆👽 _${usedPrefix}sremovebg *<image>*_
┆👽 _${usedPrefix}semoji *<tipe> <emoji>*_
┆👽 _${usedPrefix}attp *<text>*_
┆👽 _${usedPrefix}attp2 *<text>*_
┆👽 _${usedPrefix}attp3 *<text>*_
┆👽 _${usedPrefix}ttp *<text>*_
┆👽 _${usedPrefix}ttp2 *<text>*_
┆👽 _${usedPrefix}ttp3 *<text>*_
┆👽 _${usedPrefix}ttp4 *<text>*_
┆👽 _${usedPrefix}ttp5 *<text>*_
┆👽 _${usedPrefix}pat *<@tag>*_
┆👽 _${usedPrefix}slap *<@tag>*_
┆👽 _${usedPrefix}kiss *<@tag>*_
┆👽 _${usedPrefix}dado_
┆👽 _${usedPrefix}wm *<packname> <author>*_
┆👽 _${usedPrefix}stickermarker *<efek> <image>*_
┆👽 _${usedPrefix}stickerfilter *<efek> <image>*_
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *STICKERS DINÁMICOS*
┆ *Realiza acciones con Stickers*
┆ *Etiquetando a alguien!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆⛱️ _${usedPrefix}palmaditas | pat *@tag*_
┆⛱️ _${usedPrefix}bofetada | slap *@tag*_
┆⛱️ _${usedPrefix}golpear *@tag*_
┆⛱️ _${usedPrefix}besar | kiss *@tag*_
┆⛱️ _${usedPrefix}alimentar | food *@tag*
└─────────────

┌───⊷ *PROPIETARIO DEL BOT*
┆ *Comando exclusivo para Propietario/owner del bot*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆👑 > *<funcion>*
┆👑 => *<funcion>*
┆👑 $ *<funcion>*
┆👑 _${usedPrefix}setprefix *<prefijo>*_
┆👑 _${usedPrefix}resetprefix_
┆👑 _${usedPrefix}autoadmin_
┆👑 _${usedPrefix}leavegc_
┆👑 _${usedPrefix}cajafuerte_
┆👑 _${usedPrefix}blocklist_
┆👑 _${usedPrefix}block *<@tag / nomor>*_
┆👑 _${usedPrefix}unblock *<@tag / nomor>*_
┆👑 _${usedPrefix}enable *restrict*_
┆👑 _${usedPrefix}disable *restrict*_
┆👑 _${usedPrefix}enable *autoread*_
┆👑 _${usedPrefix}disable *autoread*_
┆👑 _${usedPrefix}enable *public*_
┆👑 _${usedPrefix}disable *public*_
┆👑 _${usedPrefix}enable *pconly*_
┆👑 _${usedPrefix}disable *pconly*_
┆👑 _${usedPrefix}enable *gconly*_
┆👑 _${usedPrefix}disable *gconly*_
┆👑 _${usedPrefix}enable *anticall*_
┆👑 _${usedPrefix}disable *anticall*_
┆👑 _${usedPrefix}enable *antiprivado*_
┆👑 _${usedPrefix}disable *antiprivado*_
┆👑 _${usedPrefix}msg *<text>*_
┆👑 _${usedPrefix}banchat_
┆👑 _${usedPrefix}unbanchat_
┆👑 _${usedPrefix}banuser *<@tag>*_
┆👑 _${usedPrefix}unbanuser *<@tag>*_
┆👑 _${usedPrefix}dardiamantes *<@tag>*_
┆👑 _${usedPrefix}añadirxp *<@tag>*_
┆👑 _${usedPrefix}banuser *<@tag>*_
┆👑 _${usedPrefix}bc *<text>*_
┆👑 _${usedPrefix}bcchats *<text>*_
┆👑 _${usedPrefix}bcgc *<text>*_
┆👑 _${usedPrefix}bcbot *<text>*_
┆👑 _${usedPrefix}cleartpm_
┆👑 _${usedPrefix}restart_
┆👑 _${usedPrefix}update_
┆👑 _${usedPrefix}banlist_
┆👑 _${usedPrefix}addprem *<@tag>*_
┆👑 _${usedPrefix}delprem *<@tag>*_
┆👑 _${usedPrefix}listprem_
┆👑 _${usedPrefix}listcmd_
┆👑 _${usedPrefix}setppbot *<replyr a image>*_
┆👑 _${usedPrefix}addcmd *<text> <replyr a sticker/image>*_
┆ 👑 _${usedPrefix}delcmd *<replyr a sticker/image con comando o text asignado>*_
└───────────────────`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
