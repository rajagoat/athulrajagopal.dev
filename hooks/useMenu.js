import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Theme = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw Error("useTheme must be used inside a MenuContextProvider");
    }
    return context;
}
 
export default Theme;