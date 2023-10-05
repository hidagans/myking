import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
const handler = async (m, { conn, usedPrefix }) => {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './BotSession/';
try {
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
}}
if (filesDeleted === 0) {
await conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoAG']()}tidak ada file yang ditemukan yang menyertakan id obrolan` }, { quoted: m });
} else {
await conn.sendMessage(m.chat,
{ text: `${lenguajeGB['smsAvisoEG']()}telah dihapus ${filesDeleted} BERKAS SESI` },
{ quoted: m }
)}
} catch (err) {
console.error(`${lenguajeGB['smsAvisoFG']()}BERKAS SESI TIDAK DI TEMUKAN`, err);
await conn.sendMessage(m.chat,
{ text: `${lenguajeGB['smsAvisoFG']()}Terjadi kesalahan saat menghapus file sesi.` },
{ quoted: m }
)}
await conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoRG']()}🐈 halo berhasil\njika bot tidak menanggapi perintah Anda, silakan lakukan sedikit spamming\n\n*Contoh:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, { quoted: m })};
handler.help = ['deletebot'];
handler.tags = ['jadibot'];
handler.command = /^(msgespera|ds)$/i;
export default handler;
