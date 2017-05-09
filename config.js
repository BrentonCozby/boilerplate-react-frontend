import { resolve } from 'path'

export const rootUrl = (process.env.NODE_ENV === 'production')
    ? ''
    : ''

export const Dir = {
    src: resolve(__dirname, 'src'),
    client: resolve(__dirname, 'src', 'client'),
    views: resolve(__dirname, 'src', 'views'),
    pages: resolve(__dirname, 'src', 'views', 'pages'),
    dist: resolve(__dirname, 'dist'),
    assets: resolve(__dirname, 'assets'),
    images: resolve(__dirname, 'assets', 'images')
}
