'use strict';

const _ = require('lodash');
const convict = require('convict');

const config = convict({
	port: 8000,
	BOT_TOKEN: "306450590:AAHhmEgBrpUtvQa0VIzVvJ0rwJ3mThfs8wg",
	URL: "https://api.telegram.org/bot%s/" || BOT_TOKEN,
	MyURL: "http://127.0.0.1:8000"
})

module.exports = config;
