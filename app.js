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




const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});