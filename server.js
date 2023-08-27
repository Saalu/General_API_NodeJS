 const express = require('express');
 const cors = require('cors')
 const app = express()

app.use('/api/users/:id/update', (req,res) =>{
    setTimeout(() =>{
        res.send(req.body)
    },(2000))
})

app.get('/home', (req,res) => res.send('Hi there, welcome to my server with port 5500'))


const port = 5500


app.listen(port, () =>{
    console.log('Server running :' + port)
})