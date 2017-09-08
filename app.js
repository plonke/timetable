const { Pool, Client } = require('pg')
const TelegramBot = require('node-telegram-bot-api');
const token = '255704702:AAGm_IG22M0tBeWp8JfhYKxj0EJFe18-IQQ';
const bot = new TelegramBot(token, {polling: true});
bot.deleteWebHook()

const pool = new Pool({
    user: 'dyecvowfqxalaq',
    host: 'ec2-54-247-120-169.eu-west-1.compute.amazonaws.com',
    database: 'd8blu11lv08bo6',
    password: '1ea81da38eb5aa66c3782e87afadf44f0ea65204b1bf90be7a07a82178f4dcab',
    port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})

bot.onText(/\/start (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
});