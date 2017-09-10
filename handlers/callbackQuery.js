module.exports = (query) => {
    const data = JSON.parse(query.data)

    bot.answerCallbackQuery({
        callback_query_id: query.id,
        text: '🌕🌖🌗🌘🌚🌒🌓🌔🌕'
    })

    let options = {
        chat_id: query.from.id,
        message_id: query.message.message_id,
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

}