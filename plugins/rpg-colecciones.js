let handler = async (m, { command, usedPrefix, DevMode, args, conn }) => {
const valoracion = { valorar1: 'Sangat Tinggi 80% - 100%', valorar2: 'Tinggi 60% - 79%', valorar3: 'Media 40% - 59%', valorar4: 'Rendah 20% - 39%', valorar5: 'Sangat Rendah 0% - 19%' }

const categorias = {
exp: {
categoria: 'Category 1',
descripcion: 'Pengalaman',
ataque: '',
defensa: '',
utilidad: valoracion.valorar1,
abundancia: valoracion[0]
},
stamina: {
categoria: 'Categori 2',
descripcion: 'Energi',
ataque: '',
defensa: '',
utilidad: 'Sedang tinggi',
abundancia: 'Cukup sedikit' 
}
}
m.reply(categorias.exp.utilidad)
}
handler.command = /^(collect|coleccion|inforpg|set|collection)$/i
handler.register = true

export default handler
