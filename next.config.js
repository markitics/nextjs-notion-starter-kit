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
        source: '/indiepreneur',
        destination: 'https://1drv.ms/p/s!Ajsj-RKW73e1f7T7xId0-S_l1g8',
        permanent: false
      },
      {
        source: '/stripe-notion',
        destination:
          'https://achieved-author-f0e.notion.site/Moriarty-Stripe-Oct-2021-discussions-c3fb4e15a8ef4507b75781f5c5ae1fc2',
        permanent: false
      },
      {
        source: '/stripe-site-deck',
        destination: 'https://1drv.ms/p/s!Ajsj-RKW73e1f7T7xId0-S_l1g8',
        permanent: false
      },
      {
        source: '/stripe/stripe-site',
        destination:
          'https://achieved-author-f0e.notion.site/Stripe-Sites-fa02c1cd0b9d4726ba2f54ec9a0bb5a6',
        permanent: false
      },
      {
        source: '/stripe/sample-presentation/excel',
        destination:
          'https://www.dropbox.com/s/56sge6viveh1nai/MarkMoriarty-Stripe-BizOps.xlsx?dl=0',
        permanent: false
      },
      {
        source: '/stripe/sample-presentation/ppt',
        destination:
          'https://www.dropbox.com/s/82zlagno3r8tc66/Mark_Moriarty_Bizops_presentation.pptx?dl=0',
        permanent: false
      },
      {
        source: '/stripe/sample-presentation/pdf',
        destination:
          'https://www.dropbox.com/s/pj8ngsqfy686ojx/Mark_Moriarty_Bizops_presentation.pdf?dl=0',
        permanent: false
      },
      {
        source: '/stripe/sample-presentation',
        destination:
          'https://www.dropbox.com/s/pj8ngsqfy686ojx/Mark_Moriarty_Bizops_presentation.pdf?dl=0',
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
