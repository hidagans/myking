const comandos = /batu|kertas|gunting|negara|verif|creator|bottemporal|grups|installbot|terminate|bots|deletebot|eliminatesesion|serbot|verify|register|deletesesion|jadibot/i
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, usedPrefix, command }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
if (user.counterPrivate === 0) {
mensaje = `Hai *@${m.sender.split`@`[0]}*, Dilarang menggunakan bot di private\n\n✴️jika Anda ingin menjadikannya bot, kirimkan perintah .serbot\n\n🚫JANGAN GUNAKAN PERINTAH BOT UNTUK MELAKUKAN PV🚫\n\nUntuk menggunakan bot, bergabunglah dengan grup official bot.\n${nn}\n\n⚠️ \`\`\`Peringatan 1/3\`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] })  
  
} else if (user.counterPrivate === 1) {
let grupos = [ nn, nnn, nnnt, nnntt, nnnttt ].getRandom()
mensaje = `*Sekali lagi 🤨 saya katakan jangan gunakan di private 🤨.*\n\n*Untuk menggunakan bot, bergabunglah dengan grup resmi di sini 👇*\n${grupos}\n\n*JIKA ANDA MENGULANGI LAGI, ANDA AKAN DIBLOKIR(A)* ‼️\n⚠️ \`\`\`PERINGATAN 2/3\`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
} else if (user.counterPrivate === 2) {
mensaje = `*@${m.sender.split`@`[0]} 🤨, TIDAK MENGERTI BAHWA ANDA MENGULANGI 3 KALI MENGGUNAKAN BOT DI PRIBADI, SEKARANG ANDA AKAN DIBLOKIR.*\n\n⚠️ \`\`\`PERINGATAN 3/3 \`\`\` ⚠️`
await conn.reply(m.chat, mensaje, m, { mentions: [m.sender] }) 
  
user.counterPrivate = -1
await this.updateBlockStatus(m.sender, 'block')
}
user.counterPrivate++
}
return !1
}

