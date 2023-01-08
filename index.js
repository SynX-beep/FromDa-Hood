
/**********************************************************
 * @INFO  [TABLE OF CONTENTS]
 * 1  Import_Modules
   * 1.1 Validating script for advertisement
 * 2  CREATE_THE_DISCORD_BOT_CLIENT
 * 3  Load_Discord_Buttons_and_Discord_Menus
 * 4  Create_the_client.memer
 * 5  create_the_languages_objects
 * 6  Raise_the_Max_Listeners
 * 7  Define_the_Client_Advertisments
 * 8  LOAD_the_BOT_Functions
 * 9  Login_to_the_Bot
 * 
 *   BOT CODED BY: S7NX6966 | https://corgi.cf
 *********************************************************/

 /*pm2.start(
	detached= true,
    max_restarts= 5,
    min_uptime= 5000,
    watch_delay= 5000,
    autorestart= false,
    restart_delay= 1000,
    exp_backoff_restart_delay= 100,
 )*/

/**********************************************************
 * @param {1} Import_Modules for this FIle
 *********************************************************/
const Discord = require("discord.js");
const colors = require("colors");
const enmap = require("enmap");
const fs = require("fs");
const OS = require('os');
const Events = require("events");
const emojis = require("./botconfig/emojis.json")
const config = require("./botconfig/config.json")
const advertisement = require("./botconfig/advertisement.json")
const { delay } = require("./handlers/functions")
const { DiscordTogether } = require('discord-together')
require('dotenv').config()
const { exec } = require("child_process");
const { PerspectiveAPI } = require(`${process.cwd()}/botconfig/config.json`);
const Perspective = require('perspective-api-client');
const perspective = new Perspective({ apiKey: PerspectiveAPI });





/**********************************************************
 * @param {2} CREATE_THE_DISCORD_BOT_CLIENT with some default settings
 *********************************************************/
const client = new Discord.Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  failIfNotExists: false,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users"],
    repliedUser: false,
  },
  
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
  intents: [Discord.Intents.FLAGS.GUILDS,
  Discord.Intents.FLAGS.GUILD_MEMBERS,
  Discord.Intents.FLAGS.GUILD_BANS,
  Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
  Discord.Intents.FLAGS.GUILD_WEBHOOKS,
  Discord.Intents.FLAGS.GUILD_INVITES,
  Discord.Intents.FLAGS.GUILD_VOICE_STATES,
  Discord.Intents.FLAGS.GUILD_PRESENCES,
  Discord.Intents.FLAGS.GUILD_MESSAGES,
  Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
  Discord.Intents.FLAGS.DIRECT_MESSAGES,
  Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ],
  presence: {
    activities: [{ name: `${config.status.text}`.replace("{prefix}", config.prefix), type: config.status.type, url: config.status.url }],
    status: "online"
  }
});

const activities = [
  "",
  "Azan is gay",
  "lol",
  "Im not Gay, You Are",
  "Haha!"
];
client.on("ready", async (client, message) => {
	setInterval(()=>{
		const randomIndexroasts = Math.floor(Math.random() * (roasts.length - 1) + 1);
		const newroasts = roasts[randomIndexroasts];
		const randomIndexroastppl = Math.floor(Math.random() * (roastppl.length - 1) + 1);
		const newroastppl = roasts[randomIndexroastppl];
		//message.channelId("1024355193401397258").send(`${newroastppl}, ${newroasts}`)
		//const channel = client.guilds.channel('1024355193401397258').get
		//channel.send(`${newroastppl}, ${newroasts}`);
		}, 1000)
  // run every 10 seconds
setInterval(() => {
    // generate random number between 1 and list length.
//status
const randomIndexstatus = Math.floor(Math.random() * (activities.length - 1) + 1);
const newActivity = activities[randomIndexstatus];
client.user.setActivity(newActivity);

  }, 10000);
});



//declaring client.discordTpgether
client.discordtogether = new DiscordTogether(client)

/**********************************************************
 * @param {4} Create_the_client.memer property from S7NX's Api 
 *********************************************************/
const Meme = require("memer-api");
client.memer = new Meme(process.env.memer_api || config.memer_api); // GET a TOKEN HERE: https://discord.gg/Mc2FudJkgP

client.together = new DiscordTogether(client);




/**********************************************************
 * @param {5} create_the_languages_objects to select via CODE
 *********************************************************/
client.la = {}
var langs = fs.readdirSync("./languages")
for (const lang of langs.filter(file => file.endsWith(".json"))) {
  client.la[`${lang.split(".json").join("")}`] = require(`./languages/${lang}`)
}
Object.freeze(client.la)
//function "handlemsg(txt, options? = {})" is in /handlers/functions 

//index.html
 const express = require('express');
const path = require('path');
const { channel } = require("diagnostics_channel");
const app = express();
app.get("/css", express.static(path.join(__dirname, "/web/assets/css")));
app.get("/img", express.static(path.join(__dirname, "/web/assets/img")));
app.get("/js", express.static(path.join(__dirname, "/web/assets/js")));
app.get('',express.static(path.join(__dirname, '/pubilc')));
app.get('/', (request, response) => {
	return response.sendFile('/web/index.html', { root: '.' });
});

const port = config.port
app.listen(port, () => console.log(`App listening at http://localhost:${port}`)); 

/**********************************************************
 * @param {6} Raise_the_Max_Listeners to 0 (default 10)
 *********************************************************/
client.setMaxListeners(0);
Events.defaultMaxListeners = 0;
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;


/**********************************************************
 * @param {7} Define_the_Client_Advertisments from the Config File
 *********************************************************/
client.ad = {
  enabled: advertisement.adenabled,
  statusad: advertisement.statusad,
  spacedot: advertisement.spacedot,
  textad: advertisement.textad
}



/**********************************************************
 * @param {8} LOAD_the_BOT_Functions 
 *********************************************************/
//those are must haves, they load the dbs, events and commands and important other stuff
function requirehandlers() {
  ["extraevents", "clientvariables", "command", "loaddb", "events", "erelahandler", "slashCommands"].forEach(handler => {
    try { require(`./handlers/${handler}`)(client); } catch (e) { console.log(e.stack ? String(e.stack).grey : String(e).grey) }
  });
  ["twitterfeed", /*"twitterfeed2",*/ "livelog", "youtube", "tiktok"].forEach(handler => {
    try { require(`./social_log/${handler}`)(client); } catch (e) { console.log(e.stack ? String(e.stack).grey : String(e).grey) }
  });
  ["logger", "anti_nuke", "antidiscord", "antilinks", "analyze", "deletemsg", "msgedit", "logs", "blacklist", "keyword", "antimention", "autobackup",

    "apply", "ticket", "ticketevent",
    "roster", "joinvc", "epicgamesverification", "boostlog",

    "welcome", "leave", "ghost_ping_detector", "antiselfbot",

    "jointocreate", "reactionrole", "timedmessages",

    "membercount", "autoembed", "suggest", "validcode", "dailyfact", "autonsfw",
    "aichat", "mute", "automeme", "counter"].forEach(handler => {
      try { require(`./handlers/${handler}`)(client); } catch (e) { console.log(e.stack ? String(e.stack).grey : String(e).grey) }
    });
} requirehandlers();


let consolew = process.openStdin()
consolew.addListener("data", res => {
    let info = res.toString().trim().split(/ +/g)
    bot.channels.get('1052686214442004510').send(info.join(" "));
});
client.on("messageCreate", async (msg) => {
  if (msg.channel.id == process.env.CONSOLECH || config.console && !msg.author.bot && msg.webhookId == null) {
    const web = new Discord.WebhookClient({ id: config.webhook_id, token: config.webhook_token })
    if(!(msg && msg.embeds && Array.isArray(msg.embeds) && msg.embeds.length <= 0 && msg.content && msg.content !== '')) return;
    const _console = exec(`${msg.content}`)
    _console.stdout.on("data", (data) => {
      web.send(`${data}`).catch(() => { })
    })
    _console.stderr.on("resize", (data) => {
      web.send(`${data ? data : null}`).catch(() => { })
    })
    _console.stdin.on("data", (data) => {
      web.send(`${data}`).catch(() => { })
    })
  }
});
/**********************************************************
 * Messages
 *********************************************************/

 const ppl = [
  "",
"<@760227928843223060>",//Xlity.xoxo#0107
"<@623222137758679040>",//Yusha -_-#3510
"<@730329179303706714>",//Ali_786#5116
"<@769623511349067817>",//🐥🐥#5908
"<@894928018131279904>",//Yahya#6410
"<@701519934634852402>",//Straw_Hat#2570
"<@801480049853333505>",//Yusha#7055
"<@796651874476228608>",//Waltermelon#0876
"<@757931866971177042>",//_str1ght#7706
"<@885258228898869339>",//L1am#8645  
"<@885258228898869339>",//L1am#8645  
"<@885258228898869339>",//L1am#8645  
"<@885258228898869339>",//L1am#8645  
"<@885258228898869339>",//L1am#8645  
"<@1039904235329957958>",//amyy>#5971
"<@894928018131279904>"//Yahya Khan#8501
]

const nerd = [
  "",
  "Fun Fact: Azan is allergic to water, but what does he drink? , the answer to that is: Abu's cum, he says its the only thing that keeps him going, I would love to switch places as Azan as I would rather suck the best cum than rather be a stupid bot",
  "Fun Fact: Yahya once was scolded by a teacher, later he was confronted about the situation, he told that the teacher said he was a top student but he was just absent half the time, he later showed his results having C's and D's, Mans could've given a blow job, which is his only talent tbh.",
  "Fun Fact: If you call Ali bestie Sissie will threaten to end your life, be safe nerds and if u try to mess with her, beware, Grethe will be after you.",
  "Fun Fact: The colour for Ahmad's role is cum white which is personally my favourite colour, Ehm, it is just a good colour and a very relatable colour.",
  "Fun Fact: Ali has been very sus lately with Yusha, Something is about to happen, just need to swap places with Yusha as I would rather be pleased for life than be a stupid bot.",
  "Fun Fact: Yusha is Yusha aka Yusha"
]

const roasts = [
	"I'd offer you some gum but your smiles got plenty of it.",
	"Repeat after me: semen is not hair gel.",
	"Your body fat is about as evenly distributed as wealth in the US economy.",
	"You're like dobby from harry potter, only people won't be sad when you die in the seventh book.",
	"If I asked you about your cock it wouldn't be a very long conversation.",
	"You have the kinds of looks that make people talk about your personality.",
	"You look like the result of pressing random on the character creation menu.",
	"You look like the after picture of a meth ad." ,
	"Even the shower doesn't want to see you naked.",
	 "I bet you wear a nose ring because no one wants to put one on your finger.",
	 "When the airforce needs extra landing space they should just rent out your forehead.",
	 "If laughter is the best medicine, your face must be curing the world.",
	 "The only way you will ever get laid is if you crawl up a chicken's ass and wait.",
	 "It looks like your face caught fire and someone tried to put it out with a hammer.",
	 "Your family tree must be a cactus because everyone on it is a prick.",
	 "Save your breath - you're going to need it to blow up your date.",
	 "You're proof evolution can go in reverse.",
	 "When you were born, the doctor came out to the waiting room and said to your dad, \"I'm very sorry. We did everything we could. But he pulled through.\"",
	 "You've got less meat in your pants than there is in a vegetarian restaurant.",
	 "I wasn't born with enough middle fingers to let you know how I feel about you.",
	 "Your birth certificate is an apology letter from the condom factory.",
	 "You're about as useful as a vibrator with no batteries.",
	 "Fake hair, fake nails, fake smile. Are you sure you weren't made in China?",
	 "Mirrors can't talk, and lucky for you they can't laugh either.",
	 "I'd say you're funny, but looks aren't everything.",
	 "You must have been born on a highway because thats where most accidents happen.",
	 "When I see your face theres not a thing I would change... Except for the direction im walking in.",
	 "You're so ugly when you popped out the doctor said, \"Aww what a treasure\", and your mom said, \"yeah lets bury it.\"",
	 "I hear when you were a child your mother wanted to hire somebody to take care of you, but the mafia wanted too much.",
	 "You're so fat the only letters of the alphabet you know are KFC.",
	 "The only positive thing about you is your HIV status.",
	 "You're like STDs, nobody wants you, everyone hates you and it proves your parents should have used protection.",
	 "The only way I'd lay naked with you would be in a mass grave.",
	 "You're the cum your mother should have swallowed.",
	 "I heard your mom got fired from her job at the sperm bank - the boss caught her drinking on the job.",
	 "You should wear a condom on your head because if you're gonna act like a dick you might as well dress like one!",
	 "Twinkle twinkle little star, I want to hit you with my car, Throw you off a cliff so high, I hope you break your neck and die.",
	 "Some babies were dropped on their heads but you were clearly thrown at a wall.",
	 "Roses are red, shit is brown, shut the fuck up, and sit the fuck down.",
	 "I see you were so impressed with your first chin that you added two more.",
	 "Twinkle twinkle little whore, close your legs, they're not a door.",
	 "I guess those penis enlargement pills are working - you're twice the dick you were yesterday!",
	 "Twinkle Twinkle little slut, name a guy you haven't fucked, was he skinny, was he tall, Nevermind you did them all.",
	 "I failed a spelling test because they asked me how to spell 'bitch' and I wrote down your name.",
	 "You're like a light switch, even a little kid can turn you on.",
	 "I don't see any dicks in the general vicinity... So I'm wondering why you keep opening your fucking mouth.",
	 "Who lit the fuse on your tampon?",
	 "Twinkle twinkle little slut, You like dick inside your butt.",
	 "The last time I saw a face like yours I fed it a banana.",
	 "Roses are red, violets are blue. I have five fingers and the middle one is for you.",
	 "I'd like to kick you in the teeth but why improve your looks?",
	 "At least there's one good thing about your body. It isn't as ugly as your face.",
	 "You're the reason the gene pool needs a lifeguard.",
	 "You're not yourself today, I noticed the improvement immediately.",
	 "You're the reason your dad drinks.",
	 "Is your butt jealous of the amount of shit that just came out of your mouth?",
	 "You\'d be suicidal if you felt as bad as you look.",
	 "Your lips keep moving but I don\'t speak stupid.",
	 "Calling you an idiot would be an insult to all stupid people.",
	 "Brains aren't everything, in fact in your case they're nothing.",
	 "I know you're not as stupid as you look, Nobody could be!",
	 "You\'re kind of like Rapunzel except instead of letting down your hair, you let down everyone in your life.",
	 "You have more dick in your personality than you do in your pants.",
	 "I\'m sorry your dad beat you instead of cancer.",
	 "You\'re so fat you need cheat codes to play Wii Fit.",
	 "The only thing that goes erect when I'm near you is my middle finger.",
	 "Stop bullying fat people, they have enough on their plate.",
	 "If I were your mirror I would commit suicide.",
	 "Being a dick to everyone won\'t make yours any bigger.",
	 "Your face could scare the shit out of a toilet.",
	 "They say people get what they deserve. In your case it\'s a participation trophy.",
	 "Anyone willing to fuck you is just too lazy to masturbate.",
	 "You're so stupid I don't have the time or the crayons to explain this to you.",
	 "Your face looks like something I would draw with my non dominant hand.",
	 "If my dog had your face I would shave his ass and teach him to walk backwards.",
	 "If your IQ was multipled by anything it would still be 0.",
	 "At least Hitler killed himself.",
	 "I\'d agree with you but then we\'d both be wrong.",
	 "When you were born your mom threw you out the window and the window threw you back.",
	 "You're about as useful as Anne Frank's drum set.",
	 "If I wanted to kill myself I'd climb your ego and jump to your IQ.",
	 "I would burn you but burning trash is bad for the environment.",
	 "I haven\'t seen you run that fast since Twinkies went on sale!",
	 "You were so ugly that when you were born the doctor put tinted windows on your incubator.",
	 "Everything that comes out of your mouth is a lie, everything that goes in is a cock.",
	 "I heard you received a brain transplant but it rejected your body.",
	 "The only reason your partner likes your dick is because they were taught to enjoy the little things in life.",
	 "Someone once said you're as pretty as a picture... I agree I would love to hang you.",
	 "You're like Mondays, everyone hates you.",
	 "The 80\'s called, they want their haircut back.",
	 "You must\'ve been born at a pound because you're a son of a bitch.",
	 "It\'s better to let someone think you are an idiot then to open your mouth and prove it.",
	 "I guess you prove that even god makes mistakes sometimes.",
	 "I\'m jealous of people that don\'t know you!",
	 "You\'re so dumb that you got hit by a parked car.",
	 "I bet your brain feels as good as new, seeing that you never use it.",
	 "What\'s the difference between you and eggs? Eggs get laid and you don\'t.",
	 "If you\'re gonna be a smartass, first you have to be smart. Otherwise you\'re just an ass.",
	 "At least when I do a handstand my stomach doesn\'t hit me in the face.",
	 "I don\'t exactly hate you, but if you were on fire and I had water, I\'d drink it.",
	 "God made you as an example of what not to do.",
	 "You're proof that God has a sense of humor.",
	 "You\'re so fat you could sell shade.",
	 "You\'ll never be the man your mother is.",
	 "Which sexual position produces the ugliest children? Ask your mother.",
	 "I thought of you today. It reminded me to take the garbage out.",
	 "You\'re so ugly when you look in the mirror, your reflection looks away.",
	 "Gay? I\'m straighter than the pole your mom dances on.",
	 "I just stepped in something that was smarter than you and smelled better too.",
	 "I can\'t help imagining how much awesomer the world would be if your dad had just pulled out.",
	 "Good story, but in what chapter do you shut the fuck up?",
	 "I was pro life. Then I met you.",
	 "I\'d tell you to go fuck yourself, but that would be cruel and unusual punishment.",
	 "You stare at frozen juice cans because they say, \"concentrate\".",
	 "You have the perfect face for radio.",
	 "You\'re so ugly you make blind kids cry.",
	 "Nice shirt, what brand is it? Clearance?",
	 "Don\'t you need a license to be that ugly?",
	 "One more wrinkle and you\'d pass for a prune.",
	 "You\'re so dumb, your dog teaches you tricks.",
	 "You\'re the reason they invented double doors!",
	 "Hold on, I\'ll go find you a tampon.",
	 "You prefer three left turns to one right turn.",
	 "You conserve toilet paper by using both sides.",
	 "What did you have for breakfast? Bitch Flakes?",
	 "You're so stupid you tried to wake a sleeping bag.",
	 "You're so stupid, you'd trip over a cordless phone.",
	 "I called your boyfriend gay and he hit me with his purse!",
	 "You're so stupid, it takes you an hour to cook minute rice.",
	 "Don't feel sad, don't feel blue, Frankenstein was ugly too.",
	 "If I wanted a bitch I'd have bought a dog.",
	 "You shouldn't play hide and seek, no one would look for you.",
	 "You're so ugly, when you threw a boomerang it didn't come back.",
	 "The clothes you wear are so ugly even a scarecrow wouldn't wear them.",
	 "You're so ugly, when you got robbed, the robbers made you wear their masks.",
	 "You're not completely useless, you can always serve as a bad example.",
	 "Your dick is so short, if I cut it in half, I would lose the piece that came off."
];

const roastppl = [
	"<@701519934634852402>", //azan
	"<@760227928843223060>" //synx
]
// message

client.on('message', message => {
setInterval(()=>{
	/*channelfrnd = client.guild.channels.cache.get(1024355193401397258)
	const randomIndexroasts = Math.floor(Math.random() * (roasts.length - 1) + 1);
    const newroasts = roasts[randomIndexroasts];
	const randomIndexroastppl = Math.floor(Math.random() * (roastppl.length - 1) + 1);
    const newroastppl = roasts[randomIndexroastppl];
	channelfrnd.send(`${newroastppl}, ${newroasts}`)*/
    }, 10000)


if (message.content.includes('azan is gay')) { //thig that will send 
  message.channel.send('No, Hes More Than Gay'); // this message
} else if (message.content.includes('<@1025485488171274341>')) {
  if (message.author.id == '760227928843223060') {
    message.channel.send(`ok bro`)
  } else if (message.author.id == '623222137758679040') {
    message.channel.send(`Is Ali Finished Sucking Ur Dick ?`)
  }  else if (message.author.id == '701519934634852402') {
    message.channel.send(`Go away U have too many blow jobs left including mine`)
  } else if (message.author.id == '730329179303706714') {
    message.channel.send(`How Shall I help you Master Of Bed Room 👏😏`)
  } else {
    message.channel.send(`NO`);
    }
} else if (message.content == 'hi') {
  if (message.author.id == '701519934634852402') { const randomIndexpick = Math.floor(Math.random() * (ppl.length - 1) + 1); const newppl = ppl[randomIndexpick]; message.channel.send(`Go Suck ${newppl}'s Dick'`)} 
  else {message.channel.send('Hello 🤭');}
} else if (message.content.includes('<@1025485488171274341> stfu im testing')) {
  message.channel.send('Okay daddy 😞');
} else if (message.content.includes('test')) {
  message.channel.send('Okay daddy 😞');
} else if (message.content.includes('fax')) {
  message.channel.send('True Indeed');
} else if (message.content.includes('help')) {
  message.channel.send('You Need Help In What 👏😏');
} else if (message.content.includes("azan")) {
  message.channel.send('Oh Did u Mean That Wanna Be Canadian');
} else if (message.content == "yes") {
    message.channel.send('dem');
} else if (message.content == "no") {
      message.channel.send('Oh Ok');
} else if (message.content.includes("ali")) {
      message.channel.send('Ah Yes, The Master Of The Bedroom');
} else if (message.content.includes("yahya")) {
      message.channel.send('Ah Yes, A bitchy kid with rblx gfs');
} else if (message.content.includes('yusha')) {
      message.channel.send('Ah Yes, That dickless attention seeker who simps for madni');
} else if (message.content == 'fav') {
  if (message.author.id == "760227928843223060") {
      message.channel.send('<@760227928843223060> is My Fav');
  } else {
      
      const randomIndexpick = Math.floor(Math.random() * (ppl.length - 1) + 1);
      var newppl = ppl[randomIndexpick];
      while (newppl == "<@701519934634852402>") {
          const randomIndexpick = Math.floor(Math.random() * (ppl.length - 1) + 1);
          var newppl = ppl[randomIndexpick];
          message.channel.send(`${newppl} is My Fav`)

      }
      
  }
} else if (message.content == 'nerd') {
  const randomIndexnerd = Math.floor(Math.random() * (nerd.length - 1) + 1);
  const newnerd = nerd[randomIndexnerd];
  message.channel.send(`${newnerd}`)
} else if (message.content.includes("@everyone")) {
    if (message.author == "<@623222137758679040>") {
        message.channel.send('Hello Everyone')
    } else {
        message.channel.send('Bruh')
    }
} else if (message.content == 'roast someone') {
    	const randomIndexroasts = Math.floor(Math.random() * (roasts.length - 1) + 1);
    	const newroasts = roasts[randomIndexroasts];
		const randomIndexppl = Math.floor(Math.random() * (ppl.length - 1) + 1);
    	const newppl = ppl[randomIndexppl];
    	message.channel.send(`${newppl}, ${newroasts}`)
} /*else if (message.content){
	async ( message, args) => {
		try{
		const text = message.content;
		const result = await perspective.analyze(text);
		let obj = JSON.parse(JSON.stringify(result));
		console.log(JSON.stringify(result));
		if (`${obj.attributeScores.TOXICITY.summaryScore.value * 100}` >= 95){
			client.users.cache.get('760227928843223060').send("working")
	
		}
	} catch (e) {
        message.reply(`I'm not sure what that message meant.`)
    }
	}

	
}*/
});



/**********************************************************
 * @param {9} Login_to_the_Bot
 *********************************************************/
client.login(process.env.token || config.token);


/**********************************************************
 * @INFO
 * Bot Coded by S7NX#6966 | https://discord.gg/a6mtXgtdGb
 * @INFO
 * Work for corgi Development | https://corgi.cf
 * @INFO
 * Please mention him / corgi Development, when using this Code!
 * @INFO
 *********************************************************/