const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res, next) => {
  console.log('Home page')
  res.send('Home Page')
  next()
})

app.get('/users', auth, (req, res) => {
  // console.log(req.originalUrl)
  console.log(`User is admin = ${req.admin}`)
  res.send('User Page')
})

// console  /users?admin=true

function logger(req, res, next) {
  console.log('before')
  next()
  console.log('after')
}

// http://localhost:3000/users?admin=true

function auth(req, res, next) {
  if (req.query.admin === 'true') {
    req.admin = true
    // set variable to req or res
    // next(true)
    next()
    return
  }
  res.send('No auth')
}

app.listen(3000)
