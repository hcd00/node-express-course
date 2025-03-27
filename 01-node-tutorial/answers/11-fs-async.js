const { writeFile } = require('fs');

writeFile('./temporary/fileB.txt',
    "Soccer Players:\n ",
    (err, result) => {
        console.log('point 1');
        if (err) {
            console.log("Error: ", err);
            return
        }
        else {
            console.log("result", result);
            writeFile('./temporary/fileB.txt',
                "Bruno Fernandes\n ",
                { flag: 'a' },
                (err, result) => {
                    console.log('point 1');
                    if (err) {
                        console.log("Error: ", err);
                        return
                    }
                    else {
                        console.log("result", result);
                        writeFile('./temporary/fileB.txt',
                            "Marcus Rashford\n ",
                            { flag: 'a' },
                            (err, result) => {
                                console.log('point 1');
                                if (err) {
                                    console.log("Error: ", err);
                                    return
                                }
                                else {
                                    console.log("result", result);
                                }
                            }
                        )
                    }
                }
            )
        }
    }
)


