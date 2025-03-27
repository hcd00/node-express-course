const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', { 
  encoding: 'utf8', 
  //max amount of bytes in each chunk
  highWaterMark: 200 
});

let chunkCount = 0;

stream.on('data', (chunk) => {
  chunkCount++;
  console.log(chunk);
});

stream.on('end', () => {
  console.log(`Total chunks received: ${chunkCount}`);
});

stream.on('error', (err) => console.log(err));