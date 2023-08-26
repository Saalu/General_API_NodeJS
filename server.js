 const express = require('express');
 const cors = require('cors')
 const app = express()

app.use('/api/users/:id/udate', (req,res) =>{
    setTimeout(() =>{
        res.send(req.body)
    },(2000))
})





app.listen(2200, () =>{
    console.log('Server running')
})