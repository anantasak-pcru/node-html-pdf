const puppeteer = require('puppeteer')
const handlebar = require('handlebars')
const fs = require('fs')

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

    const data = await page.pdf()

    browser.close()

    if (options.type === 'pdf' && options.path) {
        fs.writeFileSync(options.path, data, 'binary')
        return
    }
    return Buffer.from(Object.values(data))

}

module.exports = { create }