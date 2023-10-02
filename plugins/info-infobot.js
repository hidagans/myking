import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
let MessageType =  (await import(global.baileys)).default
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)
let old = performance.now()
  //await m.reply('_Realizando test_')
  let neww = performance.now()
  let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let speed = neww - old

let info = `╭─────[ *INFO BOT* ]────✧
├ 🤴🏻 *CREATOR:* Putra Yeari
├ #️⃣ *KONTAK:* *wa.me/6285870345387*
├ ✅ *VERSION:* ${vs}
├ 🎳 *PREFIX:* *${usedPrefix}*
├ 🔐 *CHATS PRIVATE:* *${chats.length - groups.length}*
├ 🦜 *CHATS GROUP:* *${groups.length}* 
├ 💡 *CHATS TOTAL:* *${chats.length}* 
├ 🚀 *ACTIVE:* *${uptime}*
├ 🎩 *USERS:* *${totalreg}*
├ 🐢 *SPEED:* *${speed}*   
├ 🌎 *MODE:* ${global.db.data.settings[conn.user.jid].self ? '*Privado*' : '*Público*'}
├ 💬 *ANTI PRIVASI:* ${global.db.data.settings[conn.user.jid].antiprivado ? '*Enable ✔*' : '*Disable ✘*'}
├ 📵 *ANTI CALL:* ${global.db.data.settings[conn.user.jid].antiCall ? '*Enable ✔*' : '*Disable ✘*'}
├ 🤖 *BOTEMPORAL:* *${global.db.data.settings[conn.user.jid].temporal ? 'Enable ✔' : 'Disable ✘'}*
├ ☑️ *AUTOREAD:*  ${autoread ? '*Enable ✔*' : '*Disable ✘*'}   
├ 🤖 *SUB BOT:* *${totaljadibot.length}*
├ ⛔ *RESTRICT:* ${restrict ? '*Enable ✔*' : '*Disable ✘*'} 
╰────────────···`
await conn.sendMessage(m.chat, {text: info}, {quoted: fkontak});
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot|infogata|informacióngata|informaciongata)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
