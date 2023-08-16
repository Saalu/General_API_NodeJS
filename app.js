const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const nfts = JSON.parse(
    fs.readFileSync(`${__dirname}/nft-data/data/nft-simple.json`)
)

// console.log(nfts)
// GET METHOD
app.get('/api/v1/nfts', (req,res) => {res.json({
    status:'success',
    results: nfts.length,
    data:{nfts}
})})


// POST METHOD
app.post('/api/v1/nfts', (req,res) => {

    // console.log(req)

    const newId = nfts[nfts.length - 1].id + 1;
    const newNFTs = Object.assign({id:newId},req.body)

    nfts.push(newNFTs)

    fs.writeFile(`${__dirname}/nft-data/data/nft-simple.json`, JSON.stringify(nfts), err => {
        res.status(201).json({
            status:'success',
    nfts: newNFTs
        })
    })


    // res.send('POST NFTS')
})



const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});