let week = moment().week()
let day = moment().day()
if (day === 0) week--
module.exports =   week % 2 === 0 ? 2 : 1