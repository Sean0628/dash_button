# dash_button
A bot posting a message to Slack with Amazon Dash Button.

## Getting Started
Set the following environment variables in `.env` file.
- `MAC_ADDRESS`: media access control address(MAC address) of your dash button. See [node-dash-button](https://github.com/hortinstein/node-dash-button#find-a-dash) to find a dash button on your network
- `BOT_TOKEN`: follow the official instraction [here](https://api.slack.com/bot-users).
- `CHANNEL_ID`: Slack channel id of which you want to post a text to.

Then run the following:

```
sudo node app.js
```

### Prerequisites

Versions:

- macOS High Sierra version 10.13.4
- node v8.11.0

### Installing

Run the following commands:
```
$git clone https://github.com/Sean0628/dash_button.git
$cd dash_button
$npm install
```

## Built With

* [node-dash-button](https://github.com/hortinstein/node-dash-button) - The library utilizing a dash button to emit an event
* [node-slack-sdk](https://github.com/slackapi/node-slack-sdk) - Slack Developer Kit for Node.js
* [dotenv](https://www.npmjs.com/package/dotenv) - Used to store configuration in the environment separate from code
