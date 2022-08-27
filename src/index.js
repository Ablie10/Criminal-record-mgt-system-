const express = require('express')
const app = express()
const port = 3000

const middleware = require('./utilities/middleware')


app.use(express.json())
app.use(middleware.requestLogger)


app.get('/', (req, res) => {
  res.send('criminal record mgt system')
})

const me ={
    fname:"ablie",
    lname:"bah",
    minit:"pacifist",
    location:"yundum",
    status:"active",
    gender:"male",
    email:"bappebah15@gmail.com",
}
    let users = [
    {
        id:1,
        username: "england",
        Phone:"2727161",
        password:"london01"
    },
    {
        id:2,
        username:"germany",
        phone:"9208388",
        password:"berlin01"
    },
    {
        id:3,
        username:"france",
        password:"paris01"
    }
]

app.get('/me',(req, res)=>{
    res.json(me)
})



app.get('/api/users/:id', (req, res) =>{
    const id = req.params.id
    const user = users.find((user) => user.id === Number(id))

        if(user) {
            res.json(user)
        }

        else{
            res.status(404).end()
        }
})

app.get('/api/users', (req, res) =>{
    res.json(users)
})

app.delete('/api/users/:id',(req, res) =>{
    const id = req.params.id
    users = users.filter((user) => user.id !== Number(id))

    res.status(204).end()
})

app.post('/api/users', (req, res) =>{

    const content = req.body

    console.log(content);
    res.json(content)


})

app.post('/api/users', (req, res) =>{

    const happy = req.body

    res.json(happy)
})

app.put('/api/users/;id',(req, res)=> {
    const id = req.params.id

    res.id
})

app.use(middleware.unknownEndpoint)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})