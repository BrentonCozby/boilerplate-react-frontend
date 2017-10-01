import { resolve } from 'path'

export const DEV_PATH = __dirname
// PP (public path) must begin and end with '/' unless it is just '/'
export const PP = process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
export const SITE_TITLE = 'React Frontend Boilerplate'
export const SITE_NAME = 'ejs-sass-static-boilerplate'
export const DESCRIPTION = 'Boilerplate for a frontend react project'
export const SITE_URL = 'example.com'
export const DEVELOPER_NAME = 'Brenton Cozby'
export const DEVELOPER_URL = 'https://brentoncozby.com'

export const Dir = {
    src: resolve(__dirname, 'src'),
    dist: resolve(__dirname, 'dist'),
    views: resolve(__dirname, 'src', 'views'),
    pages: resolve(__dirname, 'src', 'views', 'pages'),
    partials: resolve(__dirname, 'src', 'views', 'partials'),
    assets: resolve(__dirname, 'assets'),
    images: resolve(__dirname, 'assets', 'images')
}
