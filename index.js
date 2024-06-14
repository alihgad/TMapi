import express from 'express'
import  connection  from './DB/connectionDB.js'
import cors from 'cors'
import router from './tasks/tasks.routes.js'
const app = express()
const port = 3000 || process.env.PORT

app.use(cors())

app.use(express.json())

app.use('/tasks',router)


app.get('/',(req, res) => {res.send('hello world')})
app.use('*',(req, res) => {res.send('404 not found')})






app.listen(port, () => console.log(`Example app listening on port ${port}!`))