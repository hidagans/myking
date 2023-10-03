
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hai 👋🏻, Selamat datang di grup resmi, saya mengundang Anda untuk bergabung dengan grup resmi untuk bersenang-senang menggunakan Bot atau mengobrol dengan keluarga MajesyBot. 😸*

➤ Groups Official Bot:
1) *${nn}*
 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*⇶⃤꙰𝑬𝒏𝒍𝒂𝒄𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕ꦿ⃟⃢*
*${nnnttt}*`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'MajestyBot', 'status@broadcast')
}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i

export default handler
