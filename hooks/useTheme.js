import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw Error("useTheme must be used inside a ThemeContextProvider");
    }
    return context;
}
 
export default Theme;