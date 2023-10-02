const dataSpamPengguna = {}
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, isPrems}) {
  const obrolan = global.db.data.chats[m.chat]
  if (!m.isGroup) return
  if (obrolan.modoadmin) return  
  if (isOwner || isROwner || isAdmin || !isBotAdmin || isPrems) return
  
  let pengguna = global.db.data.users[m.sender]
  const pengirim = m.sender
  const waktuSekarang = new Date().getTime()
  const batasWaktu = 5000 // batas waktu 
  const batasPesan = 8 // jumlah pesan dalam waktu tersebut

  let waktu, waktu2, waktu3, pesan
  waktu = 60000 // 1 menit
  waktu2 = 120000 // 2 menit
  waktu3 = 360000 // 4 menit

  if (!(pengirim in dataSpamPengguna)) {
    dataSpamPengguna[pengirim] = {
      waktuPesanTerakhir: waktuSekarang,
      jumlahPesan: 1,
      antiBan: 0, 
      pesan: 0,
      pesan2: 0,
      pesan3: 0,
    }
  } else {
    const dataPengguna = dataSpamPengguna[pengirim]
    const selisihWaktu = waktuSekarang - dataPengguna.waktuPesanTerakhir

    if (dataPengguna.antiBan === 1) {
      if (dataPengguna.pesan < 1) {
        dataPengguna.pesan++  
        pesan = `*HEY @${m.sender.split`@`[0]} BERHENTI SPAM 🤨*\n*TIDAK BOLEH MENGGUNAKAN PERINTAH SELAMA 1 MENIT*\n\n*ALASAN: SPAM PESAN RINGAN*\n\n⚠️ \`\`\`PERINGATAN 1/3\`\`\` ⚠️`
        await conn.reply(m.chat, pesan, m, { mentions: [m.sender] })  
      }
    } else if (dataPengguna.antiBan === 2) {
      if (dataPengguna.pesan2 < 1) {
        dataPengguna.pesan2++  
        pesan = `*HEY @${m.sender.split`@`[0]} LAGI 🤨BERHENTI SPAM*\n*TIDAK BOLEH MENGGUNAKAN PERINTAH SELAMA 2 MENIT*\n*ALASAN: SPAM*\n\n*JIKA MELAKUKAN SPAM LAGI AKAN DIKELUARKAN DARI GRUP*\n\n⚠️ \`\`\`PERINGATAN 2/3\`\`\` ⚠️`
        await conn.reply(m.chat, pesan, m, { mentions: [m.sender] })  
      }
    } else if (dataPengguna.antiBan === 3) {
      if (dataPengguna.pesan3 < 1) {
        dataPengguna.pesan3++  
        pesan = `*Ufff @${m.sender.split`@`[0]} 🤨 TIDAK MENYADARI? JANGAN SPAM 3 KALI*\nSEKARANG AKAN DIKELUARKAN DARI GRUP....`
        await conn.reply(m.chat, pesan, m, { mentions: [m.sender] })  
        await conn.groupParticipantsUpdate(m.chat, [pengirim], 'remove')
      }
    }

    if (selisihWaktu <= batasWaktu) {
      dataPengguna.jumlahPesan += 1

      if (dataPengguna.jumlahPesan >= batasPesan) {
        const mention = `@${pengirim.split("@")[0]}`
        const pesanPeringatan = `*${mention} 🤨 DILARANG SPAM PESAN!!*`
        if (dataPengguna.antiBan > 2) return
        await conn.reply(m.chat, pesanPeringatan, m, { mentions: [m.sender] })  
        pengguna.diblokir = true
        dataPengguna.antiBan++
        dataPengguna.jumlahPesan = 1
                
        if (dataPengguna.antiBan === 1) {
          setTimeout(() => {
            if (dataPengguna.antiBan === 1) {
              dataPengguna.antiBan = 0
              dataPengguna.pesan = 0
              dataPengguna.pesan2 = 0
              dataPengguna.pesan3 = 0
              pengguna.diblokir = false
            }
          }, waktu) 
        } else if (dataPengguna.antiBan === 2) {
          setTimeout(() => {
            if (dataPengguna.antiBan === 2) {
              dataPengguna.antiBan = 0
              dataPengguna.pesan = 0
              dataPengguna.pesan2 = 0
              dataPengguna.pesan3 = 0
              pengguna.diblokir = false
            }
          }, waktu2) 
        } else if (dataPengguna.antiBan === 3) {
          setTimeout(() => {
            if (dataPengguna.antiBan === 3) {
              dataPengguna.antiBan = 0
              dataPengguna.pesan = 0
              dataPengguna.pesan2 = 0
              dataPengguna.pesan3 = 0
              pengguna.diblokir = false
            }
          }, waktu3)
        }
      }
    } else {
      if (selisihWaktu >= 2000) {
        dataPengguna.jumlahPesan = 1
      }
    }
    dataPengguna.waktuPesanTerakhir = waktuSekarang
  }
}}

export default handler
          
