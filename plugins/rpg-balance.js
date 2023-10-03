let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
┌───⊷ 𝑩𝒂𝒍𝒂𝒏𝒄𝒆 ⊶
▢ *Nama:* ${name}
▢ *Diamond:* ${global.db.data.users[who].limit}💎
└──────────────
*Catatan:* 
*Kamu dapat membeli Diamond 💎 Dengan mengetik*
❏ *${usedPrefix}buy <jumlah>*
❏ *${usedPrefix}buyall*`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['dm', 'diamantes', 'diamond', 'balance'] 
handler.register = true
export default handler
