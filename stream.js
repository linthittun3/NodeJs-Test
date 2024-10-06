const fs = require('fs');

const readStream = fs.createReadStream('./docs/big.txt');
const writeStream = fs.createWriteStream('./docs/big-write.txt');

// readStream.on('data', (data)=>{
//     console.log(data.toString());
//     console.log('_____Chunk_____')
// })

// readStream.on('data', (data)=>{
//     writeStream.write(data.toString());
//     writeStream.write('---Chunk---')
// })

readStream.pipe(writeStream);