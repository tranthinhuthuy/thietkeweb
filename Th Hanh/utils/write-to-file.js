const fs = require('fs');
const path = require('path');

module.exports = (data) => {
    const pathFile = path.join(__dirname, '..','data/todo.json');
    fs.writeFillSync(pathFile, JSON.stringify(data));
}
