const Discord = require('discord.js');
const client = new Discord.Client();
const gis = require('g-i-s');
const https = require('https');



client.on('message', (receivedMessage) => {
    if(['!bewwwwbs', '!bewwwbs', 'bewwbs!', 'bewwwbs'].indexOf(receivedMessage.content) > -1)  {
        gis('sexy breasts', (error, results) => {
            const randResult = results[Math.floor(Math.random() * results.length)];
            receivedMessage.channel.send('BEWWWWWWWWBS!', { files: [randResult.url] });
        });
    } else if(receivedMessage.content === '!flip') {
        if(Math.random() < 0.5) {
            gis('heads', (error, results) => {
                const randResult = results[Math.floor(Math.random() * results.length)];
                receivedMessage.channel.send('HEADS!!', { files: [randResult.url] });
            });
        } else {
            gis('tails', (error, results) => {
                const randResult = results[Math.floor(Math.random() * results.length)];
                receivedMessage.channel.send('TAILS!!', { files: [randResult.url] });
            });
        }
    } else if(receivedMessage.content === '!roll') {
        const num = 1 + Math.floor(Math.random()*6);
        receivedMessage.channel.send(num);
    }  else if(receivedMessage.content.startsWith('!insult ')) {
        const insult = https.get('https://evilinsult.com/generate_insult.php?lang=en&type=text', (resp) => {
            let data = '';
          
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
              data += chunk;
            });
          
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
              receivedMessage.channel.send(receivedMessage.content.substr(8) + ': ' + data);
            });
          
          });
        
    }/*else if(receivedMessage.content === '!instul') {
        receivedMessage.channel.send(1 + Math.floor(Math.random()*6));
        gis('heads', (error, results) => {
            const randResult = results[Math.floor(Math.random() * results.length)];
            receivedMessage.channel.send('BEWWWWWWWWBS!', { files: [randResult.url] });
        });
    }*/
})


const bot_secret_token = "NzI0MjUzNjI2NzU5MTE4ODg5.Xu9ujQ.AjT9-e7twBEJ8s8EpxhgpISIbRc";
client.login(bot_secret_token);
