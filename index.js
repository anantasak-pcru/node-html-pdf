const puppeteer = require('puppeteer')
const handlebar = require('handlebars')
const fs = require('fs')

function registerHelper(name, callback) {
    handlebar.registerHelper(name, callback)
}

async function create(options) {
    const args = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
    ]

    const browser = await puppeteer.launch({
        args: args
    })

    const result = handlebar.compile(options.html)(options.data)

    const page = await browser.newPage()

    await page.setContent(result)

    console.log(options.options)

    const data = await page.pdf(options.options)

    browser.close()

    if (options.type === 'pdf' && options.path) {
        fs.writeFileSync(options.path, data, 'binary')
        return
    }
    return Buffer.from(Object.values(data))

}



module.exports = { create, registerHelper }