import { join } from 'path' 
import { promises } from 'fs'

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
    
if (user.health >= 100) return conn.sendButton(m.chat, `Darah kamu penuh ❤️️`, wm, imgr + `Darah: ${user.health}`, [
[`🏕️ Adventure`, `${usedPrefix}adventure`], [`Petualangan 🏕️`, `${usedPrefix}adventure`]], fkontak, m)
    
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
    
if (user.potion < count) return conn.sendButton(m.chat,`${htki} Tidak tersedia ${htka}`, 
`Perlu ${count - user.potion} Ramuan 🥤 Untuk menyembuhkan kamu

Darah :  » ${user.health} ❤️
Ramuan :  » ${user.potion} 🥤

Beli Ramuan atau minta seseorang untuk mentransfer Anda.
`.trim(), imgr + 'POCION RENDAH', [
[`Beli ramuan 🥤`, `${usedPrefix}buy potion ${count - user.potion}`],
[`Meminta bantuan☘️`, `${usedPrefix}bantu *Tolong bantu aku dengan ${count - user.potion} ramuan ini* 🥤 
*» MEMBANTU DENGAN CARA MENTRANSFER:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], fkontak, m)
  
    user.potion -= count * 1 //1 potion = count (1) 
    user.health += heal * count
    
conn.sendButton(m.chat, `*━┈━《 ✅ Kesehatan lengkap 》━┈━*`, `Gunakan yang sudah ada ${count} Ramuan 🥤 Ramuan untuk memulihkan kesehatannya\n\nDarah : » ${user.health} ❤️`, imgr + 'KESEHATAN YANG LENGKAP', [
[`Adventure 🏕️`, `${usedPrefix}adventure`]], fkontak, m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i
handler.level = 3
handler.register = true

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
