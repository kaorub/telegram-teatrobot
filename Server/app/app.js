
'use strict';

const config = require('../config');
const jsdom = require("jsdom");
const Telebot = require('telebot');

const bot = new Telebot({
  token: config.get('BOT_TOKEN')
});

bot.on('/hello', msg => {
  let [cmdName, firstName, lastName] = msg.text.split(' ');
  return bot.sendMessage(msg.from.id, `Hello, ${ firstName } ${ lastName }!`);
});

bot.on('/top10', msg => {
	jsdom.env({
	  url: 'http://www.smotr.ru/pressa_rec.htm',
	  scripts: ["http://code.jquery.com/jquery.js"],
	  done: function (err, window) {
	  	// window.close();
	    return bot.sendMessage(msg.from.id, `TOP10 of the season: ${window.$(".sm11 ul").text()}`);
	  }
	});
});

bot.connect();
