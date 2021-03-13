// global styles shared across the entire site
import 'styles/global.css'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'

// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'

// used for collection views selector (optional)
// TODO: re-add if we enable collection view dropdowns
// import 'rc-dropdown/assets/index.css'

// used for rendering equations (optional)
// import 'katex/dist/katex.min.css'

// core styles for static tweet renderer (optional)
import 'react-static-tweets/styles.css'

// global style overrides for notion
import 'styles/notion.css'

// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'

// here we're bringing in any languages we want to support for
// syntax highlighting via Notion's Code block
import 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'

import React from 'react'
import { useRouter } from 'next/router'
import { bootstrap } from 'lib/bootstrap-client'
// import { fathomId, fathomConfig } from 'lib/config'
// import * as Fathom from 'fathom-client'
import ReactGA from 'react-ga' // https://github.com/react-ga/react-ga
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress//Binding events.

ReactGA.initialize('UA-119549631-1')
ReactGA.timing({
  category: 'JS Libraries',
  variable: 'load',
  value: 20, // in milliseconds
  label: 'CDN libs'
})

if (typeof window !== 'undefined') {
  bootstrap()
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  React.useEffect(() => {
    function onRouteChangeComplete() {
      // console.log('route change complete')
      NProgress.done()
      if (typeof window !== 'undefined') {
        const url = window.location.pathname + window.location.search
        // console.log("routeChangeComplete: record pageview to ", url);
        ReactGA.pageview(url)
      }
    }
    function onRouteChangeError() {
      NProgress.done()
    }

    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', onRouteChangeComplete)
    router.events.on('routeChangeError', onRouteChangeError)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
      router.events.off('routeChangeError', onRouteChangeError)
    }
  }, [])

  return <Component {...pageProps} />
}
