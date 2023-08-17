const fs = require('fs')


const nfts = JSON.parse(fs.readFileSync(`${__dirname}/../nft-data/data/nft-simple.json`))

// GET METHOD
exports.getAllNtfs = (req,res) => {res.json({
    status:'success',
    results: nfts.length,
    data:{nfts}
})}
// GET SINGLE METHOD
exports.getSingle =  (req,res) => {   
    const id = req.params.id * 1
    
    if(id > nfts.length){
        return res.status(404).json({
            status:'fail',
            message: 'Invalid ID'
        })
    }

    const nft = nfts.find(el => el.id ===id )
    res.json({
    status:'success',
    data:{nft}
})}
// POST METHOD
exports.createNtf = (req,res) => {
    const newId = nfts[nfts.length - 1].id + 1;
    const newNFTs = Object.assign({id: newId}, req.body)

    nfts.push(newNFTs)

    fs.writeFile(`${__dirname}/../nft-data/data/nft-simple.json`, JSON.stringify(nfts), err => {
        res.status(201).json({
            status:'success',
            nft: newNFTs
        })
    })
    // res.send('POST NFTS')
}
// UPDATE METHOD
exports.updateNtf = (req,res) => {   

    if( req.params.id * 1 > nfts.length){
        return res.status(404).json({
            status:'fail',
            message: 'Invalid ID'
        })
    }

    res.json({
    status:'success',
    data:"Updating nft"
})}
// DELETE METHOD
exports.deleteNtf = (req,res) => {   

    if( req.params.id * 1 > nfts.length){
        return res.status(404).json({
            status:'fail',
            message: 'Invalid ID'
        })
    }

    res.status(404).json({
    status:'success',
    data:null
})}