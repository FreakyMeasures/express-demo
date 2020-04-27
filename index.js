const express = require('express')
const volleyball = require('volleyball')
const path = require('path')

const app = express() // creating the server

app.use(volleyball)

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
/*
 HTTP

 - CRUD operations -
 GET - Give me stuff
 POST - Here is some stuff from me
 PATCH/PUT - Update this stuff
 DELETE - Remove this Stuff
*/

app.get('/', (request, res, next) => {
  //   console.log('REQUEST', request)
  res.send('<h1>Hello, Welcome to my AWESOME site</h1>')
})

const puppies = [
  { id: 1, name: 'Anabelle' },
  { id: 2, name: 'Jonah' },
  { id: 3, name: 'Calyopi' },
  { id: 4, name: 'Budd' },
]

app.get('/puppies', (req, res, next) => {
  res.status(401).json(puppies)
})

app.get('/puppies/:puppyId', (req, res, next) => {
  const { puppyId } = req.params

  console.log('params:=> ', req.params)

  console.log('Finding puppy #', puppyId)
  // 1 === '1'
  const myPuppy = puppies.find((puppy) => puppy.id === +puppyId)

  res.status(200).send(myPuppy)
})

app.post('/puppies', (req, res) => {
  // data from the client (user of our app)
  console.log(req.body)
  // send back I got it
  res.status(200).send('<p>You have a lot of dogs</p>')
  //   res.sendStatus(200)
})

app.listen(1337, () => {
  console.log('Server has started!')
})
