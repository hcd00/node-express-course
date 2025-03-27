const { writeFile, readFile } = require('fs').promises;

//async function
const writer = async () => {
    //Write 3 lines to temp.txt
    await writeFile(
        './temporary/temp.txt',
        '2026 World Cup\n',
    )
    //need flag after 1st line
    await writeFile(
        './temporary/temp.txt',
        'Host Cities: \n',
        { flag: 'a' }
    )
    await writeFile(
        './temporary/temp.txt',
        'Santa Clara \n',
        { flag: 'a' }
    )
}

const reader = async () => {
    const file = await readFile('./temporary/temp.txt', 'utf8');
    console.log('File:\n ', file);
}

const readWrite = async () => {
    try {
        //needs to be called w/ await
        await writer();
        await reader();
    }
    catch (e) {
        console.log(e);
    }

}

readWrite();