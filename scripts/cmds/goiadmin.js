module.exports = {
config: {
name: "goiadmin",
author: "𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿",
role: 0,
shortDescription: " ",
longDescription: "",
category: "BOT",
guide: "{pn}"
},

onChat: function({ api, event }) {
if (event.senderID !== "61572240295227") {
var aid = ["61572240295227"];
for (const id of aid) {
if (Object.keys(event.mentions) == id) {
var msg = [
" - বস  𝐍𝐈𝐑𝐎𝐁 এখন 'সিরিয়াস মোড'-এ, মনে হয় উনি গুগলকেও শেখাচ্ছেন।  🐸💔",
" - আমার বস নীরব, কারণ তিনি হয়তো নতুন কোনো আইডিয়া নিয়ে চিন্তা করতাছে । পরে mention দিও  🤧",
"🤣 প্রেম করার শখ জাগলে ইনবক্সে যা, মেনশন মেনশন করিস না",
" -বস এখন নিজেকে 'professor' ভাবছে, নীরব গবেষণা চলছে। পরে আবিষ্কার দেখতে পারো! ",
" - আমার বস 'busy' অনুগ্রহ করে আবার mention করুন 😥"
];
return api.sendMessage(
{ body: msg[Math.floor(Math.random() * msg.length)] },
event.threadID,
event.messageID
);
}
}
}
},

onStart: async function({}) {}
};

