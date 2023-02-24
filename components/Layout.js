import Navbar from "./Navbar";
import Footer from "./Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700']
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