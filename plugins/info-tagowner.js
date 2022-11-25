let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let krizyn = 'https://telegra.ph/file/627ae4d959dc749bea6c1.jpg'
await conn.send3ButtonImg(m.chat, krizyn, "=====『 TAG TERDETEKSI 』=====\n\nAda perlu apa panggil panggil bos saya, kangen yaa 🤪", '📮 Silahkan Pilih Button dibawah ini', 'Group', '.allgc', 'Menu', '.menu', 'Store', '.store', m)
                        
}
handler.customPrefix = /(@+62 822-5228-5143|@+6282252285143|@6282252285143|@082252285143)/i
handler.command = new RegExp

module.exports = handler

//let handler = async (m, { conn }) => {
   //let krizyn = `https://telegra.ph/file/cd37b4f991d633caa6306.jpg`
//let caption = `Ada perlu apa panggil panggil bos saya, kangen yaa 🤪`
 
//conn.send3But( m.chat, krizyn, caption, `📮 Silahkan pilih Button dibawah ini`, `Menu`, `.menu`, `Sewa`, `.sewa`, `Group`, `.allgc`, m)
       //}
//handler.customPrefix = /@krizyn|@krizynofc|krizyn|krizynofc|kri|@kri|@kri aceh/i
//handler.command = new RegExp

//module.exports = handler\\
