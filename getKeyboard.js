module.exports = (data) => {

    function getDayButtons() {
        const texts = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт']
        let btns = []
        for (let i = 0; i < texts.length; i++) {
            let text = ''
            if (data.day === i + 1) {
                text = '☑️ ' + texts[i]
            } else {
                text = texts[i]
            }
            btns.push({
                text: text,
                callback_data: JSON.stringify({
                    today: false,
                    tomorrow: false,
                    week: data.week,
                    day: i + 1
                })
            })
        }
        return btns
    }

    function getCommonButtons() {
        let today = false
        let tomorrow = false
        if (currentWeek === data.week) {
            if (moment().day() === data.day) {
                today = true
            }
            if (moment().day() + 1 === data.day) {
                tomorrow = true
            }
        }

        return [{
            text: today ? '☑️ Сегодня' : 'Сегодня',
            callback_data: JSON.stringify({
                today: true,
                tomorrow: false
            })
        }, {
            text: tomorrow ? '☑️ Завтра' : 'Завтра',
            callback_data: JSON.stringify({
                today: false,
                tomorrow: true
            })
        }]
    }

    function getWeekButtons() {
        return [{
            text: data.week === 2 ? '☑️ Четная' : 'Четная',
            callback_data: JSON.stringify({
                today: false,
                tomorrow: false,
                week: 2,
                day: data.day
            })
        }, {
            text: data.week === 1 ? '☑️ Нечетная' : 'Нечетная',
            callback_data: JSON.stringify({
                today: false,
                tomorrow: false,
                week: 1,
                day: data.day
            })
        }]
    }

    return {
        inline_keyboard: [
            getDayButtons(),
            getCommonButtons(),
            getWeekButtons()
        ]
    }
}
