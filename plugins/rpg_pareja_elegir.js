//import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser = (await import(global.baileys)).default
let toM = a => '@' + a.split('@')[0] 
let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let name = await conn.getName(m.sender)
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
    
if (command == 'futurarelacion') {    
let caption = `💗 mitra masa depan 💗\n${toM(a)} 💞 ${toM(b)}\n\n💌 pesan cinta\n*_${await ktnmbk.getRandom()}_*`
await conn.reply(m.chat, caption, fkontak, m)
/*await conn.sendButton(m.chat, caption, `*_Si quiere tener una pareja use el comando ${usedPrefix}pareja etiquetando a tu futura Pareja._*\n\n` + wm, null, [
['🤭 𝙌𝙐𝙀 𝙎𝙀 𝘿𝙀𝘾𝙇𝘼𝙍𝙀𝙉', `amor`],
['🧐 𝙊𝙏𝙍𝘼 𝙋𝘼𝙍𝙀𝙅𝘼', `${usedPrefix}futurarelacion`],
['😆 𝙀𝙎 𝙐𝙉𝘼 𝙋𝘼𝙍𝙀𝙅𝘼 𝙍𝘼𝙉𝘿𝙊𝙈', `😂`]], m, { mentions: conn.parseMention(caption) })*/
}}
	
if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return await conn.reply(m.chat, `${mg}menandai atau membalas pesan orang yang Anda inginkan untuk menjadi pasangan Anda`, fkontak,  m)
/*await conn.sendButton(m.chat, `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝙊 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝙌𝙐𝙀 𝙎𝙀𝘼 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
	
if(!users) return await conn.reply(m.chat, `${fg}pengguna tidak ditemukan, pengguna harus di grup ini`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼, 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝘼𝙎 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿, 𝙏𝙃𝙀𝙔 𝙈𝙐𝙎𝙏 𝘽𝙀 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
if(user === m.sender) return await conn.reply(m.chat, `${fg}Kamu tidak bisa menjadikan dirimu pasangan`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙐𝙎𝙏𝙀𝘿 𝙈𝙄𝙎𝙈𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀 𝙎𝙀𝙍 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙔𝙊𝙐 𝙔𝙊𝙐𝙍𝙎𝙀𝙇𝙁 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
if(user === conn.user.jid) return await conn.reply(m.chat, `${fg}Saya tidak bisa menjadi pasangan dia 😹`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙔𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙎𝙀𝙍 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼 😹\n\n𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/

if (typeof global.db.data.users[user] == "undefined") return await conn.reply(m.chat, `${fg}orang yang kamu tandai tidak ada di database saya`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙊 𝙉𝙊 𝙀𝙎𝙏𝘼 𝙀𝙉 𝙈𝙄 𝘽𝘼𝙎𝙀 𝘿𝙀 𝘿𝘼𝙏𝙊𝙎\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙄 𝙏𝘼𝙂 𝙄𝙎 𝙉𝙊𝙏 𝙄𝙉 𝙈𝙔 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
let pacar = global.db.data.users[user].pasangan
let spac = global.db.data.users[m.sender].pasangan
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
await conn.reply(m.chat, `Kamu tidak setia 🙀😠 tetapi jika Anda sudah menjalin hubungan dengan *${await conn.getName(spac)}*\n\n Anda ingin mengakhiri hubungan? 🤔\njika ya, masukkan *${usedPrefix}putuskan @tag* sehingga dapat memiliki hubungan dengan *${await conn.getName(user)}*`, fkontak, m, 
/*await conn.sendButton(m.chat, `𝙀𝙍𝙀𝙎 𝙄𝙉𝙁𝙄𝙀𝙇 🙀😠 𝙋𝙀𝙍𝙊 𝙎𝙄 𝙔𝘼 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(spac)}*\n\n𝘼𝘾𝘼𝙎𝙊 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍 𝙇𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉? 🤔\n𝘿𝙀 𝙎𝙀𝙍 𝘼𝙎𝙄, 𝙀𝙎𝘾𝙍𝙄𝘽𝘼 *${usedPrefix}terminar @tag* 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 𝙋𝙐𝙀𝘿𝘼 𝙏𝙀𝙉𝙀𝙍 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(user)}*`, wm, null, [
['❤️ 𝙈𝘼𝙉𝙏𝙀𝙉𝙀𝙍 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉', '.mipareja'],
['💔 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉', '/terminar']]*/ { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}})
}else if(global.db.data.users[user].pasangan != ""){
	
if (pacar){
if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `ya estas saliendo ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
conn.reply(m.chat, `Anda tidak dapat melakukannya karena *${await conn.getName(user)}* 𝙔 ${await conn.getName(pacar)}berada dalam suatu hubungan\nsilahkab cari orang lain yang ingin menjadi pasangan Anda`, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}})
}else{
	
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nAcabas de invitar @${user.split('@')[0]}\n\n¡Mohon tunggu balasannya!`, m , { contextInfo: { mentionedJid: [user]}})
}	
	
}else if (global.db.data.users[user].pasangan == m.sender){
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `Selamat, Anda secara resmi sudah bisa keluar @${user.split('@')[0]}\n\nSemoga langgeng dan selalu bahagia 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [user]}})
}else {
	
global.db.data.users[m.sender].pasangan = user
await conn.reply(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*@${toUser}* sedang dinyatakan!!! 😳\nsilakan *@${who.split`@`[0]}* menanggapi deklarasi tersebut 🙀\n\n❤️ *_Jika Anda menginginkan Hubungan, tulislah:_*\n*➠ ${usedPrefix}terima @${toUser}*\n\n💔 *_Jika Anda tidak menginginkan hubungan, tulis:_*\n*➠ ${usedPrefix}tolak @${toUser}*\n\n${wm}`, fkontak, { mentions: [aa,] })
/*await conn.sendButton(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*${await conn.getName(m.sender)}* 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝙉𝘿𝙊!!! 😳\n𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 *${await conn.getName(who)}* 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙇𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝘾𝙄𝙊𝙉 🙀`, `❤️ *_Si quieres una Relacion escriba:_*\n*➠ ${usedPrefix}aceptar @${conn.getName(m.sender)}*\n\n💔 *_De no querer una Relacion escriba:_*\n*➠ ${usedPrefix}rechazar @${conn.getName(m.sender)}*\n\n` + wm, null, [
['🥳 𝙑𝘼𝙈𝙊𝙎 𝘼𝘾𝙀𝙋𝙏𝘼', `Amor`]],*/ 
}}}

handler.command = /^(pacar|tembak|couple|pilih)$/i
handler.group = true

export default handler

let ktnmbk = [
"Ada kalanya saya tidak suka sendirian. Tapi aku juga tidak ingin semua orang bersamaku, aku hanya ingin kamu",
"Aku baru menyadari bahwa kamu sudah kaya selama ini! Seperti apa yang aku cari selama ini, apakah kamu mau menjadi pacarku?",
"Aku berterima kasih pada mataku, karena mata ini menuntunku untuk menemukanmu",
"Bolehkah saya mengirimkan CV atau tidak? Karena aku ingin melamar menjadi pacarmu",
"Aku memang bukan yang terhebat, tapi aku yakin jika aku bisa membahagiakanmu dengan cinta dan kasih sayang, kamu pasti mencintaiku kan?",
"Aku hanya orang biasa yang memiliki banyak kekurangan dan mungkin tidak pantas mendapatkan cintamu, tapi jika kamu bersedia menerimaku sebagai kekasih, aku berjanji akan melakukan yang terbaik untukmu, maukah kamu menerima cintaku?",
"Aku ingin mengatakan sesuatu. Aku sudah menyukaimu sejak lama, tapi aku tidak berani mengatakannya. Jadi, saya memutuskan hanya WA. Aku ingin kamu menjadi pacarku."
"Aku ingin mengatakan sesuatu yang tidak bisa kutahan lagi. Aku mencintaimu, maukah kamu menjadi pacarku?",
"Aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari, maukah kamu menjadi pacarku?", "Aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari, maukah kamu menjadi pacarku?",
"Aku ingin berbicara serius denganmu. Selama ini aku memendam perasaan padamu dan aku selalu memperhatikanmu. Jika kamu tidak keberatan, maukah kamu menjadi pacarku?",
"Aku melihatmu dan aku melihat sisa hidupku di depan mataku",
"Aku tidak memiliki segalanya, tapi setidaknya aku memiliki cukup cinta untukmu",
"Aku menyukaimu sejak awal. Kamu sangat sederhana, tetapi kesederhanaan itu sangat istimewa di mataku. Akan menjadi sempurna jika kamu istimewa di hatiku",
"Aku benar-benar jatuh cinta padamu, maukah kamu menjadi milikku?",
"Aku tidak mengatakan tidak karena aku tidak punya kuota atau pulsa, tapi aku menikmati kerinduanku padamu. Anda mungkin akan terkejut mendengarnya. Aku selalu menyukaimu,
"Aku tidak ingin kamu menjadi matahari dalam hidupku, karena meskipun panas, kamu jauh. Aku juga tidak ingin kamu menjadi udara, karena meskipun aku membutuhkanmu dan kamu sangat dekat, tapi semua orang bisa menghirupmu juga. Saya hanya ingin kamu menjadi darah yang bisa sangat dekat dengan saya",
"Saya tidak tahu sampai kapan usia saya akan berakhir. Yang saya tahu adalah bahwa cinta saya selamanya hanya untuk Anda",
"Saya sangat menikmati waktu yang kita habiskan bersama hari ini. Kita juga sudah saling mengenal satu sama lain untuk waktu yang lama. Di hari yang cerah ini, saya ingin mengungkapkan kepada Anda bahwa saya mencintaimu",
"Saya selalu membayangkan betapa indahnya jika suatu hari nanti kita dapat membangun bahtera rumah tangga dan hidup bersama hingga akhir hayat. Namun, semua itu tidak akan terjadi jika kita berdua tidak bersama hingga saat ini, maukah kamu menjadi kekasihku?",
"Saya mempersiapkan diri secara mental untuk hari ini. Kamu harus menjadi kekasihku untuk menghadapi cinta yang tak terkendali ini",
"Aku tahu kita tidak seumuran, tapi bisakah aku hidup bersamamu seumur hidupku?",
"Aku tahu kita sudah berteman sejak lama, tapi bukankah salah jika aku menyukaimu? Apapun jawabanmu, aku menerimanya. Yang paling penting adalah jujur dari lubuk hatiku yang paling dalam",
"Aku tidak bisa memulainya lebih dulu, tapi aku akan memberimu kode bahwa aku menyukaimu. Jika kamu mengerti kode ini, kita akan bersama,
"Aku terlalu bodoh atau kamu terlalu egois untuk membuatku jatuh cinta padamu."
"Apapun tentangmu, aku tidak pernah menemukan kebosanan di dalamnya. Karena berada di sisimu, adalah anugerah terindah bagiku. Jadilah kekasihku, hei kamu",
"Dengan izin Allah dan restu ayah dan ibu, kamu mau jadi pacarku atau tidak?",
"Bagaimana jika kita menjadi geng pencuri? Aku mencuri hatimu dan kamu mencuri hatiku",
"Bahagianya kamu dan aku telah menjadi kita."
"Besok, jika tidak berhasil, aku bisa mendaftar menjadi pacarmu. Biarlah aku punya pekerjaan untuk selalu memikirkanmu",
"Biarkan aku membuatmu bahagia selamanya. Kamu hanya perlu melakukan satu hal: Jatuh cinta padaku",
"Biarlah semua kegembiraanku menjadi milikmu, semua kesedihanmu menjadi milikku, biarlah seluruh dunia menjadi milikmu, hanya kamu yang menjadi milikku!",
"Biarlah masa lalu menjadi masa laluku, tapi untuk saat ini, maukah kamu menjadi masa depanku",
"Dapatkah kamu memberiku alamat hatimu? Aku seperti tersesat di matamu",
"Bukan tahta atau harta yang kucari, tapi kembalinya cintaku yang kuharapkan darimu. Jawabannya adalah ya,
"Caramu membuatku tertawa bahkan di hari tergelap sekalipun membuatku merasa lebih ringan dari apa pun. Aku ingin kamu menjadi milikku."
"Cintaku padamu tidak perlu dipertanyakan lagi karena cinta ini tulus dari lubuk hatiku", "Cintaku padamu tidak perlu dipertanyakan lagi karena cinta ini tulus dari lubuk hatiku",
"Cintaku padamu seperti angka dari 5 sampai 10. Tidak ada yang kedua. Saya ingin Anda menjadi satu-satunya wanita di hati saya",
"Pria mana yang berani menyakitimu. Di sini saya akan mentraktir kamu, selama kamu mau menjadi pacar saya",
"Hei, apa yang kamu lakukan? Keluarlah dari rumah dan lihatlah bulan malam ini. Cahayanya indah dan cantik, tapi akan lebih indah lagi jika aku ada di sisimu, bagaimana jika kita bersama?"
]
