import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `masukkan nomor seri, jika Anda tidak tahu apa itu, gunakan perintah *#myns*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `${fg} untuk memverifikasi bahwa itu adalah yang benar, gunakan perintah *#myns* untuk mendapatkan nomor serinya`
global.db.data.users[m.sender].money -= 400
global.db.data.users[m.sender].limit -= 4
global.db.data.users[m.sender].exp -= 150
global.db.data.users[m.sender].joincount -= 2
user.registered = false
m.reply(`${eg} Anda tidak lagi terdaftar di database saya 😢`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <nomor series>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
