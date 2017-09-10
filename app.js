// const { Pool, Client } = require('pg')
global.moment      = require('moment')
global.currentWeek = require('./currentWeek')

const handler = require('./handler')
const express = require('express')
const app = express()

app.get('/', handler)
app.listen(process.env.PORT || 3000)

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