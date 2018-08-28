const { WebClient } = require('@slack/client');
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);
const conversationId = '';
//warning this may trigger multiple times for one press
//...usually triggers twice based on testing for each press
var dash_button = require('node-dash-button');
var dash = dash_button("", null, null, 'all'); //address from step above
dash.on("detected", function (){
  web.chat.postMessage({ channel: conversationId, text: 'Hello, world' })
  .then((res) => {
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);
});
