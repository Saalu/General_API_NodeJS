const fs = require("fs");
const mongoose = require("mongoose");
const NFT = require('../../model/nftModel')

const dotenv = require('dotenv')
dotenv.config({path: "./.env"})

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log('Successfully Connected to MongoDB')

  })

const nfts = JSON.parse(
  fs.readFileSync(`${__dirname}/nft-simple.json`, "utf-8")
);

//IMPORT DATA
const importData = async () => {
  try {
    await NFT.create(nfts);
    console.log("DATA successfully Loaded");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

//DELETE DATA
const deleteData = async () => {
  try {
    await NFT.deleteMany();
    console.log("DATA successfully Deleted");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv)
