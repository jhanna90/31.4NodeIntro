const fs = require('fs');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}:`);
            console.error(err);
        } else {
            console.log(data);
        }
    });
}

function webCat(url) {
    axios
        .get(url)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.error(`Error fetching ${url}:`);
            console.error(err);
        });
}

const arg = process.argv[2];
if (arg.startsWith('http')) {
    webCat(arg);
} else if (arg) {
    cat(arg);
}

