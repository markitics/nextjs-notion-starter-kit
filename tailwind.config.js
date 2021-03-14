// const defaultTheme,  { colors } = require('tailwindcss/defaultTheme')
const {
  fontFamily: defaultFontFamily,
  screens: defaultScreens
} = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// next two lines for border-b-color and border-t-color
var _ = require('lodash')
var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
  .default
// https://github.com/tailwindlabs/tailwindcss/pull/560#issuecomment-503222143

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  // darkMode: "class",
  purge: [
    // Reduce bundle; we don't need every single possible class defined, if we're not using them.
    // https://tailwindcss.com/docs/controlling-file-size#removing-unused-css
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    // could add blur filter,
    // https://github.com/tailwindlabs/tailwindcss/discussions/1880
    extend: {
      cursor: {
        help: 'help'
      },
      colors: {
        fuchsia: {
          1000: '#5c1560',
          1100: '#48114b',
          1200: '#340c36'
        },
        cyan: {
          1000: '#113e4e',
          1100: '#0d2d39',
          1200: '#081d24'
        }
      },
      maxWidth: {
        36: '9rem',
        48: '12rem',
        // 80: "20rem", // just like max-w-xs
        '80w': '80vw', // for homepage display - but only on wide screens
        screenMinusSidebar: 'calc(100vw - 16rem)'
      },
      minWidth: {
        // keep consistent with https://tailwindcss.com/docs/width
        0: '0',
        16: '4rem',
        20: '5rem', // coupon apply button
        24: '6rem', // coupon apply button
        28: '7rem', // coupon apply button
        // 32: "8rem", // keep consistent with https://tailwindcss.com/docs/width
        // 48: "12rem",
        64: '16rem', // Play/Pause free sample
        //  '1/4': '25%',
        //  '1/2': '50%',
        //  '3/4': '75%',
        full: '100%',
        screenMinusSidebar: 'calc(100vw - 16rem) !important'
      },
      fontFamily: {
        // sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        sans: ['Inter var', ...defaultFontFamily.sans]
        // https://tailwindui.com/documentation#getting-set-up
      },
      height: {
        '20v': '20vh' // used in speed controls
      },
      maxHeight: {
        // vh and vw not available by default -
        // "30v": "30vh", // used in speed playlist description/chapters/reviews panel
        // "50v": "50vh", //
        '70v': '70vh' // used in speed Controls modal _speedGridOnOverlay
        // "80v": "80vh",
        // "90v": "90vh",
        // "100v": "100vh", already available as h-screen
      },
      minHeight: {
        // vh and vw not available by default -
        '80v': '80vh', // used on 'payment not found' payment view
        // "100v": "100vh", already available as h-screen
        screenMinusNavbar: 'calc(100vh - 64px)',
        screenMinusPlayer: 'calc(100vh - 80px)', // logged in, wide screen, player on bottom only, h-20
        screenMinusNavbarAndPlayer: 'calc(100vh - 64px - 80px)'
        // having these here instead of just pixels in styles.css allows us to use with breakpoints, e.g., in SimplePage: min-h-full sm:min-h-screenMinusNavbar
      },

      zIndex: {
        '-10': '-10'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
      },
      transitionDuration: {
        // 0: "0ms",
        2000: '2000ms',
        5000: '5000ms'
      },

      backgroundOpacity: {
        // affects bg-opacity-xx only
        // could extend 'opacity' to customise all opacity classes at once, https://tailwindcss.com/docs/background-opacity#class-reference
        5: '0.05',
        15: '0.15'
      }
    }, // end of extend
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      circle: 'circle',
      roman: 'upper-roman',
      romanLower: 'lower-roman'
    },
    rotate: {
      // "-180": "-180deg",
      // "-90": "-90deg",
      // "-45": "-45deg",
      0: '0',
      // 45: "45deg",
      90: '90deg',
      120: '120deg',
      // 135: "135deg",
      180: '180deg'
      // 270: "270deg",
    },
    colors: {
      // 22 colors (10 shades each) are possible.
      // We need to import the ones we'll actually use.
      // Recommended: don't import all 22, or we'll have paradox of choice and a large bundle size
      // https://tailwindcss.com/docs/customizing-colors
      black: colors.black,
      white: colors.white,
      // gray: colors.blueGray, // not default gray; there are five options for gray from blueGray to warmGray
      gray: { ...colors.gray, 375: '#aeaeb6', 350: '#bbbbc2' },
      // 'gray' is default middle shade of gray, between 'warm' and 'cool'
      //  https://tailwindcss.com/docs/customizing-colors#color-palette-reference
      transparent: 'transparent',
      prim: {
        ...colors.fuchsia,
        1000: '#5c1560',
        1100: '#48114b',
        1200: '#340c36'
      }, // our primary color
      seco: {
        ...colors.cyan,
        301: '#a1c6ca',
        201: '#70989c', // rgb(112, 152, 156)", // gray for subtle text
        1000: '#113e4e',
        1100: '#0d2d39',
        1200: '#081d24'
      }, // our secondary color
      // other named colors
      red: colors.red,
      // orange: colors.orange,
      // yellow: colors.yellow,
      lime: colors.lime,
      amber: colors.amber, // for 'warning' Pill
      green: colors.green // for 'success' pill
      // blue: colors.blue,
      // teal: colors.teal,
      // cyan: colors.cyan,
      // indigo: colors.indigo,
      // violet: colors.violet,
      // purple: colors.purple,
      // fuchsia: colors.fuchsia,
      // pink: colors.pink,
    },
    screens: {
      xs: '475px', // https://tailwindcss.com/docs/breakpoints#extending-the-default-breakpoints
      ...defaultScreens
      // hMed: "@media (min-height: 640px)",
    }
  },
  variants: {
    // borderRadius: ['responsive'], // add hover and focus
    borderRadius: ['responsive', 'hover', 'focus'],
    extend: {
      borderOpacity: ['focus'], // for tab-abale pills, see tabsInPills.jsx, so we can tab with space bar
      // ringWidth: ["hover"], // , "active" https://tailwindcss.com/docs/ring-width
      borderWidth: ['hover'], // Caution, changing border changes layout, better change color, opacity or use ring
      // transitionDuration: ["hover", "focus", 'rotate or transform?'],
      ringColor: ['hover'],
      ringOpacity: ['hover'], // , "active" // The ring utilities make use of box-shadow and not border, which would cause layout reflow and distorts the user experience.
      ringWidth: ['hover'], // , 'active'
      ringOffsetWidth: ['hover'],
      ringOffsetColor: ['hover'],
      // fontWeight: ["hover"], // caution, font-weight causes letters to take up more space, can cause weird UI effects if changes
      borderStyle: ['focus'], //
      margin: ['hover'] // for sbContents left margin to make up for left border
    }
  },
  plugins: [
    // @tailwindcss/ui is NOT required for Tailwind v2
    // require("@tailwindcss/ui")({
    // layout: "sidebar",
    // }), // https://tailwindui.com/documentation#getting-set-up
    require('@tailwindcss/forms'),
    function ({ addUtilities, e, theme, variants }) {
      // from https://github.com/tailwindlabs/tailwindcss/pull/560#issuecomment-503222143
      // to have different color borders on different sides – e.g., mobile/desktop dialog on payment page
      const colors = flattenColorPalette(theme('borderColor'))

      const utilities = _.flatMap(
        _.omit(colors, 'default'),
        (value, modifier) => ({
          [`.${e(`border-t-${modifier}`)}`]: { borderTopColor: `${value}` },
          [`.${e(`border-r-${modifier}`)}`]: { borderRightColor: `${value}` },
          [`.${e(`border-b-${modifier}`)}`]: { borderBottomColor: `${value}` },
          [`.${e(`border-l-${modifier}`)}`]: { borderLeftColor: `${value}` }
        })
      )

      addUtilities(utilities, variants('borderColor'))
    }
  ]
}
