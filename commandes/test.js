"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "💯", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *𝗔1 𝗣𝗛𝗢𝗧𝗢𝗚𝗥𝗔𝗣𝗛𝗘𝗥 📸* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *𝗣𝗛𝗢𝗧𝗢𝗚𝗥𝗔𝗣𝗛𝗘𝗥 𝗧𝗘𝗔𝗠*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/d2415a53e3ac2c31a728d.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *𝗔1 𝗣𝗛𝗢𝗧𝗢𝗚𝗥𝗔𝗣𝗛𝗘𝗥 📸* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *𝗣𝗛𝗢𝗧𝗢𝗚𝗥𝗔𝗣𝗛𝗘𝗥 𝗧𝗘𝗔𝗠*'
      let varmess=z+d
      var img='https://telegra.ph/file/d2415a53e3ac2c31a728d.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
