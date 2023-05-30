import '../global.css'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

export default function MyApp({ Component, pageProps }) {
  
  return <GeistProvider>
    <CssBaseline />
    <Component {...pageProps} />
  </GeistProvider>
}
