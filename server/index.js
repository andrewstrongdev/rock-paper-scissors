const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getHall, postHall} = require('./controller')


app.get('/api/hall', getHall )
app.post('/api/post/hall', postHall )

const port = 4004

app.listen(port, () => {
    console.log(`running on port ${port}`)
})
