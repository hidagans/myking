let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Obrolan ini tidak terdaftar dalam database.!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Obrolan ini tidak diblokir!!*')
  chat.isBanned = false
  m.reply(`*BOT ONLINE 🚀*`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true

export default handler
