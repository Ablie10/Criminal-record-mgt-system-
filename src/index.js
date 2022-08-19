const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
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
    let users =[
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

app.get('/me',(reg, res)=>{
    res.json(me)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})