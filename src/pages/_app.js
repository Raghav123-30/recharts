import '@/styles/globals.css'
import Navbar from './Navbar'
import ApiInteraction from './apicontact'
export default function App({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <ApiInteraction/>
  <Navbar></Navbar>
  </>
}
