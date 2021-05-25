// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  redirects: async () => {
    // https://stackoverflow.com/a/64710916/870121
    return [
      // {
      //   source: "/favicon.ico",
      //   destination:
      //     "https://cdn2.awesound.com/static/img/favicons/favicon-96x96.png",
      //   permanent: false,
      // },
      {
        source: '/call',
        destination: `https://calendly.com/moriarty`,
        permanent: false
      },
      {
        source: '/tip',
        destination: 'https://buy.stripe.com/fZe14s6FOg70doIfZ0',
        permanent: false
      },
      {
        source: '/insiders',
        destination: 'https://buy.stripe.com/fZe5kIc088EybgA4gl', // $6/mo.
        permanent: false
      },
      {
        source: '/support',
        destination: 'https://buy.stripe.com/fZe5kIc088EybgA4gl', // `https://buy.stripe.com/00g8wUe8g3ke84o28b`,
        permanent: false
      },
      {
        source: '/twitter',
        destination: `https://twitter.com/mbym`,
        permanent: false
      }
    ]
  }
})
