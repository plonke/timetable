// const { Pool, Client } = require('pg')
global.moment      = require('moment')
global.currentWeek = require('./currentWeek')

const handler = require('./handler')

//
const TOKEN = process.env.TELEGRAM_TOKEN || '255704702:AAGm_IG22M0tBeWp8JfhYKxj0EJFe18-IQQ';
const TelegramBot = require('node-telegram-bot-api')
const options = { webHook: { port: process.env.PORT }}

const url = process.env.APP_URL || 'https://pawlo-timetable.herokuapp.com';
const bot = new TelegramBot(TOKEN, options);

bot.setWebHook(`${url}/bot${TOKEN}`);

bot.on('message', function onMessage(msg) {
    bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});

//
// const pool = new Pool({
//     user: 'dyecvowfqxalaq',
//     host: 'ec2-54-247-120-169.eu-west-1.compute.amazonaws.com',
//     database: 'd8blu11lv08bo6',
//     password: '1ea81da38eb5aa66c3782e87afadf44f0ea65204b1bf90be7a07a82178f4dcab',
//     port: 5432,
// })

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })