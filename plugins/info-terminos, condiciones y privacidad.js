import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

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
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let TerminoA = `
*_Semua informasi yang disebutkan di sini tidak mengecualikan Pemilik Bot, dan Pemilik Terakreditasi untuk menggunakan MajestyBot._*
*_Kami tidak bertanggung jawab atas ketidaktahuan Anda akan informasi ini._*`.trim()

let terminoB = `    
*KETENTUAN PRIVASI*
_- Kami menyadari penggunaan Bot yang mungkin Anda lakukan secara terus menerus, dan juga menjamin bahwa informasi (gambar, video, tautan, lokasi, Audio, Stiker, Gif, Kontak, dll.) yang Anda berikan di sekitar Nomor Resmi tidak dan tidak akan dibagikan kepada siapa pun, dan juga tidak akan digunakan di luar lingkungan BOT.._

_- Apa yang saya lakukan dengan BOT tetap ada pada Anda, karena di Nomor Resmi Obrolan akan dihapus setiap 24 Jam, sesuai dengan waktu Pesan Sementara WhatsApp.._

_- Ada kemungkinan bahwa pada Nomor Resmi, Bot tidak Diaktifkan 24 Jam sehari, 7 hari seminggu, itu tidak berarti bahwa itu tidak atau bahwa Pemilik TIDAK RESMI dapat melakukannya.._

_- Obrolan anonim dari perintah #start, demi redundansi, tidak akan menampilkan data Pengguna apa pun dari pihak LoliBot. Ini tidak menyiratkan bahwa orang yang menggunakan fungsi ini dapat mengungkapkan detail mereka. dalam Nomor Resmi._

_- Kami TIDAK bertanggung jawab jika ada perubahan pada Bot ini yang bukan Nomor Resmi dan menggunakan repositori GitHub yang tidak resmi, atau mengimplementasikan integrasi Pengguna Pihak Ketiga yang membahayakan Pengguna dengan menggunakan versi yang tidak resmi._


*KETENTUAN PENGGUNAAN* 
_- Informasi dalam Bot ini dan pengguna yang menggunakannya mengasumsikan pengetahuan tentang Syarat dan Ketentuan sehingga tidak akan ada ketidaknyamanan dalam menggunakan fungsi Bot tertentu.._

_- Bot berisi Materi yang hanya dapat dilihat oleh mereka yang berusia di atas 18 tahun, kami TIDAK bertanggung jawab jika Anda tidak memenuhi usia minimum untuk menggunakan Materi Dewasa._

_- Gambar, Video, dan Audio yang dimiliki Bot ini adalah untuk penggunaan publik, tetapi akan dianggap tidak sopan jika melakukan pengeditan terhadap materi yang sudah ada yang membawa nama Bot atau informasi yang relevan._

_- Ketika menggunakan aplikasi untuk keanggotaan grup dengan Akun Resmi, disarankan agar grup tersebut tidak mengandung ujaran kebencian, virus, konten yang tidak pantas, tema diskriminatif, atau kampanye yang tidak berdasar._

_- Jika Anda telah menerima Komunike Resmi saat menjadi Nomor Resmi, Pertahankan rasa hormat dengan cara yang sama jika Anda menerima Pesan tanpa menggunakan Perintah Pertahankan rasa hormat karena Anda mungkin dalam kasus terakhir adalah Orang Sejati._


*KETENTUAN PENGGUNAAN*
_- JANGAN melakukan atau mencoba melakukan Panggilan atau Panggilan Video ke Bot sebagai Nomor Resmi karena hal ini akan menghalangi pengoperasian BOT.._

_- TIDAK menggunakan Bot sebagai Nomor Resmi untuk melakukan tindakan permusuhan yang dapat membahayakan pengoperasian BOT.._

_- JANGAN gunakan perintah SPAM berulang kali, karena akan menyebabkan BOT tidak berfungsi, atau mengirim pesan ke BOT yang dapat membahayakan pengoperasian BOT._

_- Penggunaan perintah tertentu yang dimaksudkan untuk merusak ketidaknyamanan, ketidaknyamanan, gangguan, atau istilah kasar lainnya akan diberikan sanksi atau peringatan yang sesuai untuk menjaga integritas Pengguna dan pengoperasian MajestyBot._


*GRUP INFO UPDATE DAN TERBARU TENTANG BOT*
*Cari tahu tentang pembaruan dan berita bot baru di sini*
${nna}


*~ Terima kasih telah meluangkan waktu untuk memberi tahu diri Anda tentang MajestyBot.*
`.trim()
conn.sendButton(m.chat, TerminoA, terminoB, pp, [
['ɢʀᴜᴘᴏs', `#grupos`]], m)
}

handler.customPrefix = /S&K|Syarat & Ketentuan|syarat & ketentuan|syarat|ketentuan|s&k/i
handler.command = new RegExp
//handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
