let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `${usuario} Anda telah mengubah nama grup menjadi:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak }) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `${usuario} Anda telah mengubah foto grup`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `${usuario} Deskripsi grup ini telah di perbarui :\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒 Sekarang *${m.messageStubParameters[0] == 'on' ? 'Hanya untuk admin' : 'Semua'}* Anda dapat mengedit informasi grup`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `Grup *${m.messageStubParameters[0] == 'on' ? 'Sudah Ditutup 🔒' : 'Dibuka 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'Hanya admin yang dapat mengirim pesan' : 'kamu sudah bisa mengirim pesan'} dalam grup ini`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} Anda sekarang menjadi admin di grup ini\n😼🫵Dilakuka oleh: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak })
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} Berhenti menjadi admin di grup ini\n\n😼🫵Dilakukan oleh: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak })
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} Saya mengubah durasi pesan sementara menjadi *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *Disable* Pesan sementara.`, mentions: [m.sender] }, { quoted: fkontak })
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
