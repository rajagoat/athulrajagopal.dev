import dynamic from "next/dynamic";
import Layout from '../components/Layout'
import '../styles/globals.css'

const ThemeContextProvider = dynamic(() => import("../context/ThemeContext").then((tc) => tc.ThemeContextProvider), {
  ssr: false,
});

const ViewportContextProvider = dynamic(() => import("../context/ViewportContext").then((vc) => vc.ViewportContextProvider), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <ViewportContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout >
      </ViewportContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
