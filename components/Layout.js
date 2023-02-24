import dynamic from "next/dynamic";
import Footer from "./Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700']
});

const Navbar = dynamic(() => import("../components/Navbar"), {
    ssr: false,
});

const Layout = ({ children }) => {
    return (
        <div className={`${montserrat.className} container`}>
            <Navbar />
            <div className="main">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;