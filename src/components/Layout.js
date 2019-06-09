// Libraries
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

// Styles
import GlobalStyles from '../styles/globalStyles'
import theme from '../styles/theme'

// Variables
import { siteName, siteDescription, siteUrl } from '../utils/variables'

// Layout
export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <html lang='et' />
        <title>{siteName}</title>
        <meta name="description" content={siteDescription} />
        <link rel='canonical' href={siteUrl} />
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
        <meta property='og:url' content={siteUrl} />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='et' />
        <meta property='og:title' content={siteName} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:site_name' content={siteName} />
        <meta property='og:image' content={`${siteUrl}/social.png`} />
        <meta property='og:image:width' content='1012' />
        <meta property='og:image:height' content='506' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)