const Discord = require('discord.js');
const client = new Discord.Client();
const gis = require('g-i-s');



client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.content != 'bewwbs!') {
        return;
    }

    gis('sexy breasts', (error, results) => {
            if (error) {
                console.log(error);
            }
            else {
                const randResult = results[Math.floor(Math.random() * results.length)];
                receivedMessage.channel.send('BEWWWWWWWWBS!', { files: [randResult.url] });
            }
        }
    );
})


const bot_secret_token = "NzI0MjUzNjI2NzU5MTE4ODg5.Xu9rkA.PPUianjqu0ESjTRKug30ZvkmmtM";
client.login(bot_secret_token);
