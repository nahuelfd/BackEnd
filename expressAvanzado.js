import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const users = []

app.get('/',  (req, res) => res.send('OK'))

app.get('/api/user', (req, res) => res.json(users))
app.post('/api/user', (req, res) => {
    const user = req.body
    users.push(user)
    res.send({status: 'success', message: 'User Created'})
})

app.listen(8080)