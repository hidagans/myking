async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '*🤖 Berikut adalah daftar beberapa sub bot (jadibot/serbot) 🤖️*\n\n*👉🏻 Anda dapat menghubungi mereka untuk mengetahui apakah mereka akan bergabung dengan grup Anda.*\n\n*Kami meminta Anda untuk membantu:*\n*1.- Bersikaplah baik. ✅*\n*2.- Jangan bersikeras atau berdebat ✅*\n\n*✳ ️Jika Anda mendapatkan teks kosong berikut ini, tidak ada sub bot yang tersedia saat ini, coba lagi nanti.*\n\n*_⚠ NOTA: ️MEREKA ADALAH ORANG-ORANG YANG TIDAK KITA KENAL... JADI TIM MAJESTYBOT TIDAK BERTANGGUNG JAWAB ATAS APA YANG BISA TERJADI DI SANA..._*')
await m.reply(users.map(v => '👉🏻 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado (${v.name})`).join('\n'))}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler

