import 'bootstrap/scss/bootstrap.scss'
import '../styles/app.scss'
import AuthenticateProvider from '../contexts/AuthenticateContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthenticateProvider>
      <Component {...pageProps} />
    </AuthenticateProvider>
  )
}

export default MyApp
