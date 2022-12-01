
import type { AppProps } from 'next/app'
import Head from 'next/head'


import { Header, Footer, NavMenuModal } from '../components'
import { NavMenuProvider } from '../context'
import '../styles/globals.css'


function App({ Component, pageProps }: AppProps) {

  return (
    <NavMenuProvider>
      <Head>
        <title>Antique Collectors</title>
        <meta charSet='utf-8' />
        <meta name='description' content='Antique Collectors' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='page-container'>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <NavMenuModal />
      </div>
    </NavMenuProvider>
  )
}

export default App
