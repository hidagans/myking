//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'MajesyBot', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 4000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsEnlaceWat']()}Administrator @${m.sender.split("@")[0]} Anda baru saja mengirim teks yang berisi banyak karakter -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    conn.sendMessage(m.chat, `*[ ! ] Pesan yang mengandung terlalu banyak karakter terdeteksi [ ! ]*\n`, `${isBotAdmin ? '' : 'Saya bukan administrator, saya tidak bisa berbuat apa-apa :/'}`, m)
    //await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ ᴅᴇsᴀᴄᴛɪᴠᴀ ᴀɴᴛɪᴛʀᴀʙᴀ ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `Tandai obrolan sebagai telah dibaca ✓\n${"\n".repeat(400)}\n Nomor : wa.me/${m.sender.split("@")[0]}\n• Alias : ${name}\n‼️Anda baru saja mengirim teks yang berisi banyak karakter yang dapat menyebabkan kegagalan perangkat.`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply(`${lenguajeGB['smsSoloOwner']()}`)
    }
    return !0
} 
