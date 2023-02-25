import { useContext } from "react";
import { ViewportContext } from "../context/ViewportContext";

const Viewport = () => {
    const context = useContext(ViewportContext);
    if (!context) {
        throw Error("useViewport must be used inside a ViewportContextProvider");
    }
    return context;
}
 
export default Viewport;