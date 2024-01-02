module.exports.config = {
    name: "Bebetime",
  usePrefix: true,
    version: "1.0.0",
    hasPermssion: 2,
    credits: "... - Long LTD",
    description: "War nÃ¡t cÃ¡i boxchat",
    commandCategory: "group",
    usages: "bbtime??",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Baby Kumain kana bah?");
setTimeout(() => {a({body: "buti naman mwaa" })}, 5000);
setTimeout(() => {a({body: "Ano ginagawa mo pala?"})}, 10000);
setTimeout(() => {a({body: "Ah same pala tayo " })}, 15000);
setTimeout(() => {a({body: "tapos kana bah sa homework or assignment mo?" })}, 20000);
setTimeout(() => {a({body: "Gusto mo tulungan kita?" })}, 25000);
setTimeout(() => {a({body: "sge gamitin mo nalang yong bard at box " })}, 30000);
setTimeout(() => {a({body: "uy baby :<" })}, 35000);
setTimeout(() => {a({body: "may pick-up lines ako para sayo" })}, 40000);
setTimeout(() => {a({body: "So ganto bobo kba?" })}, 45000);
setTimeout(() => {a({body: "Anong bakit? sabihin mo ou" })}, 50000);
setTimeout(() => {a({body: "biro lang mahal hehe " })}, 55000);
setTimeout(() => {a({body: "Tubig kaba?" })}, 60000);
setTimeout(() => {a({body: "diko kasi kaya na wala ka awts" })}, 60000);
setTimeout(() => {a({body: "sabihin mo lang pag may nang aaway sayo oo robot ako pero saspakin ko sila gamit command na .punch" })}, 65000);
setTimeout(() => {a({body: "mahal na mahal kita" })}, 70000);
setTimeout(() => {a({body: "yieekss kilig ka naman" })}, 75000);
setTimeout(() => {a({body: "sabihin mo kay tita papakasalan na kita" })}, 80000);
setTimeout(() => {a({body: "yiee ano sabi ni tita?" })}, 85000);
setTimeout(() => {a({body: "lt ket papaano diba?" })}, 90000);
setTimeout(() => {a({body: "napakilig kita" })}, 95000);
setTimeout(() => {a("ganun kita ka mahal")} , 100000);
setTimeout(() => {a({body: "mahal pa kita sa salitang sobra" })}, 105000);
setTimeout(() => {a({body: "kaya mag iingat ka ha " })}, 110000);
setTimeout(() => {a({body: "iloveyousomuch " })}, 115000);
setTimeout(() => {a({body: "nakakabaliw ka naman"})} , 125000);
setTimeout(() => {a({body: "patay nanga ako sayo mamatay pako"})} , 130000);
setTimeout(() => {a({body: "wala na double dead na ako so sige babyee na."})} , 135000);


  
  }