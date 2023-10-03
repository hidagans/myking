let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*Ketik laporan*\n\n*Contoh:*\n*${usedPrefix + command} perintah ${usedPrefix}sticker tidak berfungsi.*`
if (text.length < 8) throw `${fg} ✨ *Minimal 10 karakter untuk melakukan laporan*`
if (text.length > 1000) throw `${fg} 😼 *Maksimal 1000 karakter untuk melakukan laporan.*`
await delay(5 * 5000)
let teks = `*_❒═════[ʀᴇᴘᴏʀᴛᴇ]═════╾❒_*\n*_┬_*\n*├ɴᴜᴍᴇʀᴏ: Wa.me/${m.sender.split`@`[0]}*\n*_┴_*\n*_┬_*\n*├ᴍᴇɴsᴀᴊᴇ: ${text}*\n*_┴_*`
//conn.reply('593968585383@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply('6285870345387@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
await delay(3 * 3000)
  m.reply(`╰⊱💚⊱ *Ketik* ⊱💚⊱╮\n\n*laporan telah dikirim ke owner saya , kamu akan segera mendapatkan jawabannya. Jika salah, laporan akan diabaikan..*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(lapor|report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
