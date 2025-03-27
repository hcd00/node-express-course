const { writeFile, readFile } = require('fs').promises;

//async function
const writer = () => {
    return writeFile(
        'temporary/temp.txt',
        'Japan\n'
    )
        .then(() => {
            return writeFile(
                'temporary/temp.txt', 'U.S.A.\n', { flag: 'a' })
        })
        //single line
        .then(() => writeFile('temporary/temp.txt', 'Canada\n', { flag: 'a' }))
        .catch((e) => {
            console.log('Error: ', e);
        })
}

const reader = () => {
    return readFile('temporary/temp.txt', 'utf8')
    .then((data) => console.log(data))
    .catch((e) => console.log('Error: ', e));
}

const readWrite = async () => {
    writer().then(() => reader());

}

readWrite();