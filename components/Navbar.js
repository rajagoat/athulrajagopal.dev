import NavDesk from "./NavDesk";
import NavMobile from "./NavMobile";
import useViewport from "../hooks/useViewport";

const Navbar = () => {
    const { width } = useViewport();
    const NAV_BREAKPOINT = 827;

    return (
        width < NAV_BREAKPOINT ? <NavMobile/> : <NavDesk/>
    );
}

export default Navbar;