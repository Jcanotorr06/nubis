import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {ChainId, Config, DAppProvider} from '@usedapp/core'
import { ChakraProvider } from '@chakra-ui/react'

const config: Partial<Config> = {
  readOnlyChainId: ChainId.Mumbai,
  
}

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <DAppProvider config={config}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <title>Nubis</title>

          <link rel="manifest" href="/manifest.json" />
          <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#444342"/>
        </Head>
        <Component {...pageProps} />
      </DAppProvider>
    </ChakraProvider>
    ) 
}
export default MyApp
