import { AppProps } from 'next/app'
import GlobalStyle from 'styles/global'
import { defaultTheme } from 'styles/themes/default'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>Boilerplate/NextJS</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
