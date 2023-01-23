import type { AppProps } from 'next/app'
import 'styles/global.css'
import 'styles/navbar.css'
import 'styles/aboutme.css'
import 'styles/home.css'
import 'styles/projects.css'
import 'styles/competences.css'
import 'styles/socials.css'
import NavBar from '../components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}
