let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
• @${nomorown.split`@`[0]} •
------- ${nameown} -------

🍀 *Pemberitahuan*
• 𝗢𝘄𝗻𝗲𝗿 𝗧𝗶𝗱𝗮𝗸 𝗺𝗲𝗻𝗲𝗿𝗶𝗺𝗮 𝘀𝗮𝘃𝗲 𝗰𝗼𝗻𝘁𝗮𝗰𝘁
• 𝗢𝘄𝗻𝗲𝗿 𝗯𝗲𝗿𝗵𝗮𝗸 𝗯𝗹𝗼𝗰𝗸𝗶𝗿 𝘁𝗮𝗻𝗽𝗮 𝗮𝗹𝗮𝘀𝗮𝗻
• 𝗕𝗲𝗿𝗯𝗶𝗰𝗮𝗿𝗮𝗹𝗮𝗵 𝘆𝗮𝗻𝗴 𝘀𝗼𝗽𝗮𝗻 & 𝘁𝗶𝗱𝗮𝗸 𝘀𝗽𝗮𝗺
• 𝗢𝘄𝗻𝗲𝗿 𝗛𝗮𝗻𝘆𝗮 𝗺𝗲𝗿𝗲𝘀𝗽𝗼𝗻 𝘆𝗮𝗻𝗴 𝗯𝗲𝗿𝗸𝗮𝗶𝘁𝗮𝗻 𝗱𝗲𝗻𝗴𝗮𝗻 𝗕𝗢𝗧
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
*ɴᴀᴍᴇ:* 𝚊𝚌𝚒𝚕
*ᴀɢᴇ:* 18ᵗʰ
*ᴄᴇᴡᴇᴋ:* 𝚟𝚒𝚝𝚊

*ʙɪʀᴛʜᴅᴀʏ:* 18
*ᴀᴅᴅʀᴇss:* Indonesia, Jawa Tengah

*- - sᴋɪʟʟs: - -* 
> JavaScript [77.7%]
Nga Bisa JeEs
> Python [20.4%]
Nga Bisa Piton
> CSS [88.1%]
Nga Bisa Layouting
> Html [100%]
P Adu EsCe

📷 *Instagram:* ${sig}
🐈 *Github:* ${sgh}
🥏 *Whatsapp* wa.me/${nomorown}
🙍 *Portofolio:* http://yaemiko.ezyro.com/?i=1

`
  let teks = ' '
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor", rowId: ".owner nomor"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
