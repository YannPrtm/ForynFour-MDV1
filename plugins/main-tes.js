let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let krizyn = `BOT SUDAH AKTIF ?? ?дк`

conn.sendBut( m.chat, krizyn, wm, `Menu`, `.menu`.trim(), m)
let mentionedJid = [m.sender]
}
handler.customPrefix = /^(tst|tes|tes bot|tc|tess)$/i // ketik bot (tanpa prefix)
handler.command = new RegExp

handler.fail = null
module.exports = handler
