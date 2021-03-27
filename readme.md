Node html to pdf

# Get start

* installation 
```bash
npm install https://github.com/anantasak-pcru/node-html-pdf.git
```

# Example

```javascript
const pdf = require('node-html-pdf')

const html = fs.readFileSync(path.join(__dirname, "./template.html"), "utf8");
// or
const html = '<h1>Hello world</h1>'

// register handlebar helper
pdf.registerHelper('inc', (v) => {
    return parseInt(v) + 1
})

const option = {
    // puppeteer pdf options 
    // https://pptr.dev/#?product=Puppeteer&version=v8.0.0&show=api-pagepdfoptions
    options: {},
    html: html,
    // path to store file
    path: './example.pdf',
    // type pdf , buffer default buffer
    type: 'pdf',
    // handlebars data variable
    data: {

    }
}
```

[Example Template](https://www.sparksuite.com/open-source/invoice.html)