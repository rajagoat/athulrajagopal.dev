import Navbar from "./Navbar";
import Footer from "./Footer";
import { Montserrat } from "next/font/google";
import useMenu from "../hooks/useMenu";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700']
});

const Layout = ({ children }) => {
    const { menuIsOpen } = useMenu();

    return (
        <div 
            className={`${montserrat.className} 
            container`}
            style={{
                maxHeight: menuIsOpen && "100vh"
            }}
        >
            <Navbar />
            <div className="main">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;