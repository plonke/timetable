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
    data.srs.map(day => {
        if (day.day() === params.day && day.isAfter(moment().subtract(1, 'days'))) {
            srs.push(day.locale('ru').format('D MMM'))
        }
    })

    if (srs.length > 0) {
        schedule += '\n\r'
        schedule += srs.join(', ')
    }

    if (schedule === '') {
        schedule = 'В этот день нет занятий 🌚'
    }

    return schedule
}