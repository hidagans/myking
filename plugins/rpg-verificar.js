import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `🙌hei kamu sudah terdaftar\n\n✳️Ingin kembali  mendaftar>?\n\ngunakan perintah \n*${usedPrefix}unreg nomor series*\njika tidak ingat nomor seri Anda, gunakan\n${usedPrefix}myns`
  if (!Reg.test(text)) throw `${mg}✳️ Gunakan perintah: *${usedPrefix + command} nama.usia*\n📌Contoh : *${usedPrefix + command}* ${name2}.19`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Nama tidak boleh kosong'
  if (!age) throw '✳️ usia tidak boleh kosong'
  if (name.length >= 30) throw '✳️ pffft, namanya panjang sekali' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 kamu teryata adalah orang tua'
  if (age < 5) throw '🚼  ajari bayi ini agar tau cara menulis ✍️😳 '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 400
global.db.data.users[m.sender].limit += 4
global.db.data.users[m.sender].exp += 150
global.db.data.users[m.sender].joincount += 2
  let sn = createHash('md5').update(m.sender).digest('hex')
await conn.sendMessage(m.chat, { 
text: `┌───⊷ *Nomor:*
┆ ${name}
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *Usia:*
┆ ${age} Tahun
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *Bonus* 
┆ *$4 Diamond* 💎
┆ *$400 MajestyCoins*
┆ *$150 EXP*
┆ *$2 Tokens*
╰──────────────────`, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": gataImg.getRandom(), 
"title": `PENDAFTARAN BEHASIL`, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": nnn, 
"sourceUrl": nnn, 
}
}
}, { quoted: fkontak })  
/* await conn.reply(m.chat, `┌───⊷ *𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎*
┆ *𝐍𝐨𝐦𝐛𝐫𝐞:*
┆ ${name}
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝐄𝐝𝐚𝐝:*
┆ ${age} años
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝐁𝐨𝐧𝐨* 
┆ *$4 𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞* 💎
┆ *$400 𝐋𝐨𝐥𝐢𝐜𝐨𝐢𝐧𝐬*
┆ *$150 𝐗𝐏*
┆ *$2 𝐓𝐨𝐤𝐞𝐧𝐬*
╰──────────────────`, , m)*/
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i

export default handler
