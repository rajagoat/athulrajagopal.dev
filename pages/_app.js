import dynamic from "next/dynamic";
import Head from "next/head";
import Layout from '../components/Layout'
import { MenuContextProvider } from "../context/MenuContext";
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
        <MenuContextProvider>
          <Layout>
            <Head>
              <meta name="description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
              <link rel="icon" type="image/png" href="/icons/favicon.png" />
            </Head>
            <Component {...pageProps} />
          </Layout >
        </MenuContextProvider>
      </ViewportContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
