let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://file.io/OFAkOMg60Xj6', m, { packname: "RyanAditya", author: "@Bot WhatsApp" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler

