let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}harus menandai pengguna *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}masukkan jumlah Diamond`
if (isNaN(txt)) throw `${mg}tanpa simbol, cukup masukkan angka`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `${mg}jumlah minimum untuk Diamond adalah *1*`
let users = global.db.data.users
users[who].limit += dmt
m.reply(`*╭[ 💎 Diamond 💎 ]⬣*\n┃\n┃ღ *Untuk:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *Telah ditambahkan*\n┃ღ *${dmt} Diamonds(s)* 💎\n┃\n* ╰━━━━━━━━━━━━━━⬣*`)}
/*conn.sendHydrated(m.chat, `╭[ 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 | 𝘿𝙄𝘼𝙈𝙊𝙉𝘿 💎 ]⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${dmt} Diamante(s)* 💎\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
}*/
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['tfdm', 'adddm', 'tfdiamond'] 
handler.group = true
handler.rowner = true
export default handler
