module.exports = (req, res) => {
    res.send('work!')
    const TelegramBot = require('node-telegram-bot-api')
    const getKeyboard    = require('./getKeyboard')
    const getSchedule = require('./getSchedule')

    const token = '255704702:AAGm_IG22M0tBeWp8JfhYKxj0EJFe18-IQQ';
    const bot = new TelegramBot(token, {
        polling: false
    });

    bot.openWebHook().then((w) => {
        bot.sendMessage(125399191, 'w' + w)
        bot.sendMessage(125399191, 'req' + JSON.stringify(req))
    })


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


}