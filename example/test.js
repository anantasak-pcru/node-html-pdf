const pdf = require('../index')
const fs = require('fs')
const path = require('path')
var html = fs.readFileSync(path.join(__dirname, "./template.html"), "utf8");

const option = {
    html: html,
    path: './example.pdf',
    type: 'pdf',
    data: {

    }
}

pdf.create(option).then((v) => {
    console.log(v)
})
