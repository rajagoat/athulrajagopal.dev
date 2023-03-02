import NavDesk from "./NavDesk";
import NavMobile from "./NavMobile";
import useViewport from "../hooks/useViewport";
import { BREAKPOINT as NAV_BREAKPOINT } from "../constants";

const Navbar = () => {
    const { width } = useViewport();

    return (
        width < NAV_BREAKPOINT ? <NavMobile/> : <NavDesk/>
    );
}

export default Navbar;