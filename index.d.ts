declare module "node-html-pdf"

interface Options {
    displayHeaderFooter?: boolean
    headerTemplate?: string
    footerTemplate?: string
    printBackground?: boolean
    landscape?: boolean
    pageRanges?: string
    format?: string | 'Letter' | 'Legal' | 'Tabloid' | 'Ledger' | 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6'
    width?: string | number
    height?: string | number
    margin?: {
        top?: string | number
        right?: string | number
        bottom?: string | number
        left?: string | number
    }
    preferCSSPageSize?: boolean
    scale?: number
}

interface PdfOptions {
    options?: Options
    html?: string
    path?: string
    type?: 'pdf' | 'buffer'
    data?: Object
}

export function create(options: PdfOptions): Promise<Buffer | undefined>

export function registerHelper(name: string, callback: Function): void