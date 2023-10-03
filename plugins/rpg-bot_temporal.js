let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, users, user, usedPrefix, command, isPrems, isOwner, isROwner}) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'The-LoliBot-MD ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]  

let texto0 = `${ag}Ownerku(𝘼) telah membatasi fungsi ini untuk sementara masuk ke bot ke grup kembali lagi nanti atau gunakan fungsi *${usedPrefix}jadibot*`
let texto1 = `${mg}gunakan perintah seperti contoh berikut\n*${usedPrefix + command} tautan grup dan jumlah token(s)*\n*${usedPrefix + command} ${grupos.getRandom()} 3*`
let texto2 = `${ag}¡Anda tidak lagi memiliki token! 🪙\n\nbeli token untuk dapat bergabung dengan MajestyBot ke grup Anda dengan perintah:\n*${usedPrefix}buy joincount 3*`
let texto3 = `${fg}tautan tidak valid. harus tautan grup whatsapp\n*${usedPrefix + command} ${grupos.getRandom()} 3*`
let texto4 = `${mg}masukkan nomor token(𝙎)\n*3* TOKEN 🪙 = *30* Minutes`
let texto5 = `${fg}Minimal *3* Token(𝙎) untuk bergabung dengan MajestyBot`
let texto6 = `${fg}Maximal *3* Token(𝙎) Untuk bergabung dengan MajestyBot`
let texto7 = `${eg}😛 𝙎𝙚 𝙝𝙖 𝙪𝙣𝙞𝙙𝙤 𝙇𝙤𝙡𝙞𝘽𝙤𝙩 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤!!`

let img1 = 'https://img.freepik.com/vector-premium/animacion-monedas-pixeles-imagenes-animacion-moneda-oro-ilustracion-vectorial_350225-3.jpg?w=2000'
let img2 ='https://img.freepik.com/premium-vector/set-8bit-pixel-graphics-icons-game-art-coins-gold-animation_534389-12.jpg?w=2000'

if (!global.db.data.settings[conn.user.jid].temporal) return await conn.reply(m.chat, texto0, fkontak, m)  
//conn.sendButton( m.chat, wm, texto0, null, [[`🙌 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝙍 𝘾𝙊𝙈𝘼𝙉𝘿𝙊`, `.reporte *Quiero unir a The-LoliBot-MD en mí Grupo. Por favor Active la función #botemporal*`], [`🍀 𝙈 𝙀 𝙉 𝙐`, `.menu`]], fkontak, m) 

if (!args[0]) return await conn.reply(m.chat, texto1, fkontak, m)  
let [_, code] = args[0].match(linkRegex) || []

if (!linkRegex.test(args[0])) return await conn.reply(m.chat, texto3, fkontak, m) 
//conn.sendButton( m.chat, wm, texto3, null, [[`🍀 𝙈 𝙀 𝙉 𝙐`, `.menu`]], fkontak, m)
let user = m.sender.split('@')[0] 

if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Número de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN 🪙 = 30 MINUTOS*`
//if (!linkRegex.test(args[0])) throw `${fg}𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊.` //Aquí 
if (user.joincount <= 1) return conn.sendButton( m.chat, wm, texto2, img1, [[`🏪 Beli : Buy 3 ${rpgshopp.emoticon('joincount')}`, `.buy joincount 3`]], fkontak, m)
if (isNaN(args[1])) return conn.sendButton( m.chat, wm, texto4, img1, [[`🍀 MENU`, `.menu`]], fkontak, m)
if (args[1] < 3) return conn.sendButton( m.chat, wm, texto5, img2, [[`🍀 MENU`, `.menu`]], fkontak, m)
if (args[1] > 3) return conn.sendButton( m.chat, wm, texto6, img2, [[`🍀 MENU`, `.menu`]], fkontak, m) //Solo ingresará si tiene 3 Token(s)
 
await delay(3 * 3000)
let res = await conn.groupAcceptInvite(code)
await conn.reply(m.chat, texto7, fkontak, m) 
//await conn.sendButton( m.chat, texto7, `${await conn.getName(res)} | ` + wm, null, [[`🍀 𝙈 𝙀 𝙉 𝙐`, `.menu`]], fkontak, m).then(async() => { 
user.joincount -= args[1] 
var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
var now = new Date() * 1
 
if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.reply(res, `✅ ${wm} berhasil join ke grup!!\n${await conn.getName(res)}\n\n*ingatlah bahwa itu adalah ⏳sementara, gunakan perintah ${usedPrefix}menu untuk menu*\n\n🚪 saya melakukan secara otomatis id:\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} Masih ada ${user.joincount} token(S) 🪙\n\n❕Anda juga dapat menggunakan perintah ini sebagai grup saat saya berada di dalam grup\n\n❕jika Anda ingin lebih lama, tingkatkan jumlah token saat Anda menggunakan perintah\n*${usedPrefix + command}*\n\n❗jika seorang admin menghapus saya dari grup dan ingin saya kembali, aku tidak bisa melakukannya.`, fkontak, m)    
await delay(5 * 5000) 
await conn.sendMessage(res, { text: lenguajeGB.smsJoin(user), mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, [user], { quoted: fkontak })
//for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//let data = (await conn.onWhatsApp(jid))[0] || {}
  //if (data.exists) 
    //conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 

} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.joincount === 0 ) throw `${ag}*¡ANDA TIDAK LAGI MEMILIKI TOKEN! 🪙*\n\n*BELI TOKEN UNTUK DAPAT MENGUNDANG MAJESTYBOT KE GRUP ANDA DENGAN PERINTAH *${usedPrefix}buy joincount 3 atau ${usedPrefix}buy Untuk melihat Toko*`
 if (!args[1]) throw `${mg}*GUNAKAN PERINTAH SEPERTI CONTOH INI*\n*${usedPrefix + command} link dan jumlah Token(s)*\n\n*Contoh*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN 🪙 = 30 Minutes*`
if (!linkRegex.test(args[0])) throw `${fg}Tautan tidak valid.` //Aquí 

await delay(3 * 3000)
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `${eg}😛 MajestyBot bergabung dengan grup dengan benar!!`, m).then(async() => { //Si el Owner se une al Grupo no habrá temporizador
let img = 'https://i.imgur.com/8fK4h6F.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(res, `✅ ${wm} berhasil bergabung ke grup!!\n${await conn.getName(res)}\n\n*ingatlah bahwa itu adalah ⏳sementara, gunakan perintah ${usedPrefix}menu untuk menu*\n\n🚪 saya melakukan secara otomatis id:\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} Masih ada ${user.joincount} tokens(S) 🪙\n\n❕Anda juga dapat menggunakan perintah ini sebagai grup saat saya berada di dalam grup\n\n❕jika Anda ingin lebih lama, tingkatkan jumlah token saat Anda menggunakan perintah\n*${usedPrefix + command}*\n\n❗jika seorang admin menghapus saya dari grup dan ingin saya kembali, aku tidak bisa melakukannya.`, fkontak, m)  
await delay(5 * 5000)
await conn.sendMessage(res, { text: lenguajeGB.smsJoin(user), mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, [user], { quoted: fkontak })

for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} tambahan ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, bot akan mati tepat waktu: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['Creadora', `/creadora`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m, res) })}
} catch (e) {
await conn.reply(m.chat, `${fg}\`\`\`KEMUNGKINAN PENYEBABNYA
- Tautan salah atau kedaluwarsa.

- Saya tidak dapat bergabung jika saya pernah dikeluarkan dari Grup..

- Grup sudah penuh, jadi saya tidak bisa bergabung..
\`\`\``, m)
console.log(e)}
}
handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd']
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function msToDate(ms) {
let temp = ms
let days = Math.floor(ms / (24 * 60 * 60 * 1000));
let daysms = ms % (24 * 60 * 60 * 1000);
let hours = Math.floor((daysms) / (60 * 60 * 1000));
let hoursms = ms % (60 * 60 * 1000);
let minutes = Math.floor((hoursms) / (60 * 1000));
let minutesms = ms % (60 * 1000);
let sec = Math.floor((minutesms) / (1000));
return days + " *Día(s)* ☀️\n" + hours + " *Hora(s)* ⏳\n" + minutes + " *Minuto(s)* ⏰\n" + sec + " *Segundo(s)* 🕐\n";
}
