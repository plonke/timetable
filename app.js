// const { Pool, Client } = require('pg')
global.moment      = require('moment')
global.currentWeek = require('./currentWeek')
const TelegramBot = require('node-telegram-bot-api')
const getKeyboard    = require('./getKeyboard')
const getSchedule = require('./getSchedule')

const token = '255704702:AAGm_IG22M0tBeWp8JfhYKxj0EJFe18-IQQ';
const bot = new TelegramBot(token, {polling: true});

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

bot.onText(/\/clear/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'cleared', {
        reply_markup: {
            remove_keyboard: true
        }
    })
})

bot.onText(/\/start/, (msg) => {
    let day = 1
    let params = { week: currentWeek, day: day }
    let schedule = getSchedule(params)
    let options = {
        reply_markup: getKeyboard(params),
        parse_mode: 'html'
    }

    bot.sendMessage(msg.chat.id, schedule, options)
})

bot.on('callback_query', (callback) => {
    const data = JSON.parse(callback.data)

    bot.answerCallbackQuery({
        callback_query_id: callback.id,
        text: 'Выполняю..'
    })

    let options = {
        chat_id: callback.from.id,
        message_id: callback.message.message_id,
        parse_mode: 'html'
    }

    if (data.today) {
        let day = moment().day()
        let params = { week: currentWeek, day: day }
        let schedule = getSchedule(params)
        let keyboard = getKeyboard(params)
        options.reply_markup = keyboard
        options.text = schedule
        bot.editMessageText(schedule, options)
            .catch( err => {
                console.log('err', err.response.body)
            }
        )
        return
    }

    if (data.tomorrow) {
        let day = moment().day() + 1
        let params = { week: currentWeek, day: day }
        let schedule = getSchedule(params)
        let keyboard = getKeyboard(params)
        options.reply_markup = keyboard
        options.text = schedule
        bot.editMessageText(schedule, options)
            .catch( err => {
                console.log('err', err.response.body)
            }
        )
        return
    }

    let params = { week: data.week, day: data.day }
    let schedule = getSchedule(params)
    let keyboard = getKeyboard(params)
    options.reply_markup = keyboard
    options.text = schedule
    bot.editMessageText(schedule, options)

})