import GlobalStyles from "../utils/GlobalStyles"

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
}

export default MyApp
