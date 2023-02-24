const express = require('express')

const app = express()

app.get('/',((req,res) =>{
    res.send('<h1>Hello This is Home page of Node-Handson-2</h1>')
    res.end()
   
}))

app.get('/api',((req,res)=>{
    res.send('This is api page ')
    res.end()
}))
app.get('/main', (req,res)=>{
    res.send('<h3>This is main Page.</h3>')
    res.end()
})

// app.post('/submit', (req,res)=>{
//     res.send('Post worked')
// })

app.listen(3001, ()=>{
    console.log('port is running on 3001')
})