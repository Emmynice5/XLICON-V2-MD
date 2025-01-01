import fs from 'fs';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix: _p }) => {
    let img = "https://avatars.githubusercontent.com/u/120536940?v=4";
    let caption = `*AND BULD*\n\n_Kindly Join our Channel!_\n_*Don't forget to Click here to stay updated:*_\nhttps://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c`;

    let doc = {
        image: { url: img },
        caption: caption,
        contextInfo: {
            externalAdReply: {
                title: "Check out our Channel!",
                body: "Stay updated with the latest.",
                thumbnailUrl: img,
                mediaType: 2,
                mediaUrl: img,
                sourceUrl: "https://www.whatsapp.com/channel/0029VaMGgVL3WHTNkhzHik3c"
            }
        }
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });
};

handler.customPrefix = /^(Arise)$/i;
handler.command = new RegExp();

export default handler;