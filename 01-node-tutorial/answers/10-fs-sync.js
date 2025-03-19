const { readFileSync, writeFileSync} = require('fs');

const read = readFileSync;
writeFileSync('./temporary/fileA.txt', 
    "Soccer Leagues\n",
);
writeFileSync('./temporary/fileA.txt', 
    "Premier League\n",
    {flag: 'a'}
)
writeFileSync("./temporary/fileA.txt",
     "Serie A",
    {flag: 'a'}
    )
console.log();