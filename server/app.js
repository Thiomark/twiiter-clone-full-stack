require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const { errorMiddleware } = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/twoots', require('./routes/twootRoute'))

app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})