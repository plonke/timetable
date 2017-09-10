const TOKEN = '255704702:AAGm_IG22M0tBeWp8JfhYKxj0EJFe18-IQQ';
const url = 'https://pawlo-timetable.herokuapp.com';
const TelegramBot  = require('node-telegram-bot-api')

global.moment      = require('moment')
global.currentWeek = require('./currentWeek')
global.getKeyboard = require('./getKeyboard')
global.getSchedule = require('./getSchedule')
global.bot = new TelegramBot(TOKEN, {
    webHook: {
        port: process.env.PORT
    }
});

bot
    .setWebHook(`${url}/bot${TOKEN}`)
    .on('message', require('./handlers/message'))
    .on('callback_query', require('./handlers/callbackQuery'))