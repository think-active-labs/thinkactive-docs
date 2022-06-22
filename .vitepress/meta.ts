/* Texts */
export const thinkActiveName = 'ThinkActive'
export const thinkActiveShortName = 'ThinkActive'
export const thinkActiveDescription = 'Collect, Analyse and Orchestrate your distributed sensing devices. ThinkActive enables organisations, researchers and individuals to focus on their data not infrastructure'

/* CDN fonts and styles */
export const googleapis = 'https://fonts.googleapis.com'
export const gstatic = 'https://fonts.gstatic.com'
export const font = `${googleapis}/css2?family=Readex+Pro:wght@200;400;600&display=swap`

/* vitepress head */
export const ogUrl = 'https://thinkactive.io/'
export const ogImage = `${ogUrl}og.png`

/* ThinkActive Cloud links */
export const thinkActiveCloud = 'https://cloud.thinkactive.io/'

/* GitHub and social links */
export const github = 'https://github.com/think-active-labs/thinkactive-docs'
export const releases = 'https://github.com/think-active-labs/thinkactive-docs/releases'
export const contributing = 'https://github.com/think-active-labs/thinkactive-docs/blob/main/CONTRIBUTING.md'
export const twitter = 'https://twitter.com/thinkactivelabs'

/* Avatar/Image/Sponsors servers */
export const preconnectLinks = [googleapis, gstatic]
export const preconnectHomeLinks = [googleapis, gstatic]

/* PWA runtime caching urlPattern regular expressions */
export const pwaFontsRegex = new RegExp(`^${googleapis}/.*`, 'i')
export const pwaFontStylesRegex = new RegExp(`^${gstatic}/.*`, 'i')
