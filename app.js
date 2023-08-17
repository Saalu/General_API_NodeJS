const express = require('express')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const usersRoute = require('./routes/usersRoute')
const ntfsRoute = require('./routes/ntfsRoute')
const fs = require('fs')


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// app.use((req,res,next) =>{
//     res.send('Hi there I am here coding...')
//     next()
// })
app.use((req,res,next) =>{
    req.requestTime = new Date().toISOString()
    next()
})

app.use('/api/v1/users', usersRoute)
app.use('/api/v1/nfts', ntfsRoute)



const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});