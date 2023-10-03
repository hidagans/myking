let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `Mengapa Anda tidak langsung masuk ke nomor Bot?`, m)
else {
await conn.reply(m.chat, `Anda telah menutup sesi`, m)
conn.ws.close()
}}
handler.command = /^(berhenti|stop|detener)$/i
  
export default handler
