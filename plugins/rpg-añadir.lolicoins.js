let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}harus menandai pengguna *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}masukkan jumlah MajestyCoins`
if (isNaN(txt)) throw `${mg}tanpa simbol, cukup masukkan angka`
let gatacoins = parseInt(txt)
let money = gatacoins
let pjk = Math.ceil(gatacoins * pajak)
money += pjk
if (money < 1) throw `${mg}jumlah minimum untuk MajestyCoins adalah *1*`
let users = global.db.data.users
//let users = global.db.data.users[who]
users[who].money += gatacoins
m.reply(`╭━━━[ MajestyCoins 🐈 ]━━━⬣\n┃\n┃ღ *Untuk:*\n┃ღ ${text}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *Telah ditambahkan*\n┃ღ *${gatacoins} MajestyCoin(s)* 🐈\n┃\n╰━━━━━━━━━━━━━━⬣\n\n${wm}`)}
/*conn.sendHydrated(m.chat, `╭━━━[ 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎 🐈 ]━━━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${gatacoins} GataCoin(s)* 🐈\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
}*/ 
handler.help = ['addcoins <@user>']
handler.tags = ['gatacoins']
handler.command = ['tfcoins', 'addcoins', 'tambahcoins'] 
handler.group = true
handler.rowner = true
export default handler
