const pdf = require('../index')
const fs = require('fs')
const path = require('path')
var html = fs.readFileSync(path.join(__dirname, "./template.html"), "utf8");

const option = {
    options: {
        format: 'a4',
        displayHeaderFooter: true,
        margin: {
            top: '60px',
            bottom: '60px',
            left: '25px',
            right: '25px'
        },
        headerTemplate: '<div id="header-template" style="font-size:10px !important; color:#808080; padding-left:10px"><span class="date"></span><span class="title"></span><span class="url"></span><span class="pageNumber"></span><span class="totalPages"></span></div>',
        footerTemplate:' '
    },
    html: html,
    path: './example.pdf',
    type: 'pdf',
    data: {

    }
}

pdf.create(option).then((v) => {
    console.log(v)
})
