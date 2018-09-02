require('dotenv').config()
const { WebClient } = require('@slack/client');
const WEB = new WebClient(process.env.BOT_TOKEN);
const TEXTS = [
                'リゾートで飲み会発生中:beers:誰か一緒に飲もう:hibiscus::tropical_drink::palm_tree:',
                'リゾートで飲み会発生中:beers:みんなあつまれ〜:man-running::dash::woman-running::dash:'
              ]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pick_text(texts) {
  return texts[getRandomInt(2)];
}

var dash_button = require('node-dash-button');
var dash = dash_button(process.env.MAC_ADDRESS, null, null, 'all');

dash.on('detected', function (){
  WEB.chat.postMessage({ channel: process.env.CHANNEL_ID, text: pick_text(TEXTS) })
  .then((res) => {
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);
});
