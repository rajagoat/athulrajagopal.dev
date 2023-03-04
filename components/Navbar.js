import NavDesk from "./NavDesk";
import NavMobile from "./NavMobile";
import useViewport from "../hooks/useViewport";
import { BREAKPOINT_NAV } from "../constants";

const Navbar = () => {
    const { width } = useViewport();

    return (
        width < BREAKPOINT_NAV ? <NavMobile/> : <NavDesk/>
    );
}

export default Navbar;