const mongoose = require('mongoose');
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config({path: "./.env"})
const NFT = require('../../model/nftModel')




const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to MongoDB')

  })

  const nfts = JSON.parse(fs.readFileSync(`${__dirname}/nft-simple.json`, 'utf-8'))


//   const nft = JSON.parse(fs.readFileSync('nft-simple.json', 'utf-8'))

const importData =async() => {
    try {
        await NFT.create(nfts)
        console.log('Successfully Loaded DATA ')
       
        
    } catch (err) {
    // res.status(500).json({msg:err.message})  
    console.log(err)
    }
}
const deleteData =async() => {
    try {
        await NFT.deleteMany(nfts)
        console.log('DATA Loaded Success')
       
        
    } catch (err) {
    // res.status(500).json({msg:err.message})  
    console.log(err)

    }
}

if(process.argv[2] === '--import'){
importData()
}else if(process.argv[2] === '--delete'){
    deleteData()
}

console.log(process.argv)