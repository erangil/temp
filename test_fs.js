var fs = require('fs');

filenames = fs.readdirSync(".");
for (i = 0; i < filenames.length; i++) {
    console.log(filenames[i]);
}

processId = process.getuid;
console.log(processId);