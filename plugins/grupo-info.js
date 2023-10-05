let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, temporal, reaction, antiTelegram, antiFacebook, antiTiktok, antiYoutube, modohorny, antiTwitter, antiInstagram, stickers, autolevelup, autosticker, antitoxic, antifake, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 INFO GRUP 」*\n
*ID GRUP:* 
${groupMetadata.id}

*NAMA:* 
${groupMetadata.subject}

*DESKRIPSI:* 
${groupMetadata.desc?.toString() || 'Tidak ada deskripsi'}

*TOTAL MEMBERS:*
${participants.length} Participants

*Pembuat grup:* 
@${owner.split('@')[0]}

*Admins:*
${listAdmin}

*OPSI OTOMATIS:*
・ Welcome: ${welcome ? '✅' : '❌'}
・ Antilink: ${antiLink ? '✅' : '❌'} 
・ Antilink *2:* ${antiLink2 ? '✅' : '❌'} 
・ Antitraba: ${antiTraba ? '✅' : '❌'} 
・ autosticker: ${autosticker ? '✅' : '❌'} 
・ detect: ${detect ? '✅' : '❌'} 
・ autolevelup: ${global.db.data.users[m.sender].autolevelup ? '✅' : '❌'}
・ Fungsi tambah dan hapus: ${global.db.data.settings[conn.user.jid].restrict ? '✅' : '❌'}
・ stickers: ${stickers ? '✅' : '❌'}
・ reaction: ${reaction ? '✅' : '❌'}
・ audio: ${audios ? '✅' : '❌'} 
・ mode horny (+18): ${modohorny ? '✅' : '❌'} 
・ antitoxic: ${antitoxic ? '✅' : '❌'} 
・ antifake: ${antifake ? '✅' : '❌'} 
・ antiviewonce: ${antiviewonce ? '✅' : '❌'}
・ antidelete: ${global.db.data.chats[m.chat].delete ? '✅' : '❌'}
・ antitiktok: ${antiTiktok ? '✅' : '❌'}
・ antiyoutube: ${antiYoutube ? '✅' : '❌'}
・ antitelegram: ${antiTelegram ? '✅' : '❌'}
・ antifacebook: ${antiFacebook ? '✅' : '❌'}
・ antiinstagram: ${antiInstagram ? '✅' : '❌'}
・ antitwitter: ${antiTwitter ? '✅' : '❌'}
・ modeadmin: ${modoadmin ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
