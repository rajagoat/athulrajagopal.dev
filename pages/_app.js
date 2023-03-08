import dynamic from "next/dynamic";
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
            <Component {...pageProps} />
          </Layout >
        </MenuContextProvider>
      </ViewportContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
