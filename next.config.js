const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  en: 'en',
  ar: 'ar'
}

module.exports = {
  trailingSlash: true,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}

// module.exports = {
//   i18n: {
//     locales: ['en-AE', 'en-SA', 'ar-AE', 'ar-SA'],
//     defaultLocale: 'en-AE',
//   }
// }