import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '../components/navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark-theme'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
