module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "... - Long LTD",
    description: "War nát cái boxchat",
  usePrefix: true,
  commandCategory: "group",
    usages: "bold war",
    cooldowns: 10,
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
a("Hoi mga gagong palamunin");
setTimeout(() => {a({body: "mag chat kayo dito mga gago" })}, 3000);
setTimeout(() => {a({body: "mgaa supoottttt asan kayoo"})}, 5000);
setTimeout(() => {a({body: "tangina mga muka yan mukang aso" })}, 7000);
setTimeout(() => {a({body: "mga ulol ulol" })}, 9000);
setTimeout(() => {a({body: "ulol mga supot" })}, 12000);
setTimeout(() => {a({body: "bobo kayo" })}, 15000);
setTimeout(() => {a({body: "ulul supot" })}, 17000);
setTimeout(() => {a({body: "mag chat kayo puro kayo seen" })}, 20000);
setTimeout(() => {a({body: "hoi mga tangaaa" })}, 23000);
setTimeout(() => {a({body: "pakyu" })}, 25000);
setTimeout(() => {a({body: "pakyu kayong lahat" })}, 28500);
setTimeout(() => {a({body: "ulolllll bubu ka naman" })}, 31000);
setTimeout(() => {a({body: "minor momints" })}, 36000);
setTimeout(() => {a({body: "aasim nyo" })}, 39000);
setTimeout(() => {a({body: "ano mag chat kayo wait mag cooldown ako" })}, 40000);
setTimeout(() => {a({body: "start na ulet mga bubu" })}, 65000);
setTimeout(() => {a({body: "uloll mga gago" })}, 70000);
setTimeout(() => {a({body: "mga titee babantot" })}, 75000);
setTimeout(() => {a({body: "gago supot 1 inch" })}, 80000);
setTimeout(() => {a({body: "bubuuu" })}, 85000);
setTimeout(() => {a("ulollll")} , 90000);
setTimeout(() => {a({body: "mga ulol" })}, 95000);
setTimeout(() => {a({body: "ano mga batang supott asan na kayo??" })}, 100000);
setTimeout(() => {a({body: "mga putangina kayong lahattt" })}, 105000);
setTimeout(() => {a({body: "Good bye baka ma disable ako"})} , 115000);


  }
