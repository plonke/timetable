const data = require('./data')()

module.exports = (params) => {
    let schedule = ''
    let week = params.week === 1 ? 'even' : 'odd'

    data.weeks[week][params.day].map(day => {
        schedule += '\n\r'
        schedule += '<b>' + data.pairs[day.pair_id - 1] + '</b>'
        schedule += '\n\r⏰ '
        schedule += data.times[day.time_id - 1].from.format('HH:mm') + ' – '
        schedule += data.times[day.time_id - 1].to.format('HH:mm')
        schedule += '\n\r🗺 '
        schedule += data.cabinets[day.cabinet_id - 1]
        schedule += '\n\r'
    })

    let srs = []
    data.srs.map(item => {
        if (item.day() === params.day && item.isAfter(moment().subtract(1, 'days'))) {
            let day = item.locale('ru').format('D MMM')
            if (srs.length === 0) {
                let diff = item.diff(moment())
                if (diff === 0) {
                    day += ' (<b>Сегодня</b>)'
                } else if (diff === 1) {
                    day += ' (<b>Завтра</b>)'
                } else {
                    day += ' (через ' + (item.toNow(true) + 1) +')'
                }
            }
            srs.push(day)
        }
    })

    if (srs.length > 0) {
        schedule += '\n\r <b>СРС:</b>'
        schedule += '\n\r ' + srs.join(', ')
    }

    if (schedule === '') {
        schedule = 'В этот день нет занятий 🌚'
    }

    return schedule
}