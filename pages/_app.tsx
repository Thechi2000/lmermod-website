import type { AppProps } from 'next/app'
import 'styles/global.css'
import 'styles/navbar.css'
import 'styles/aboutme.css'
import 'styles/home.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
