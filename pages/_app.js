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
              <link rel="icon" type="image/png" href="/icons/favicon.png" />
              {/* HTML Meta Tags */}
              <meta name="description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
              {/* Facebook Meta Tags */}
              <meta property="og:url" content="https://www.athulrajagopal.dev/" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Home | Athul Rajagopal" />
              <meta property="og:description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
              <meta property="og:image" content="/assets/preview.png" />
              {/* Twitter Meta Tags */}
              <meta name="twitter:card" content="/assets/preview.png" />
              <meta property="twitter:domain" content="athulrajagopal.dev" />
              <meta property="twitter:url" content="https://www.athulrajagopal.dev/" />
              <meta name="twitter:title" content="Home | Athul Rajagopal" />
              <meta name="twitter:description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
              <meta name="twitter:image" content="/assets/preview.png" />
            </Head>
            <Component {...pageProps} />
          </Layout >
        </MenuContextProvider>
      </ViewportContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
