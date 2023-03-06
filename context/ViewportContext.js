import { createContext, useState, useEffect } from "react";
import { BREAKPOINT_MD, BREAKPOINT_LG } from '../constants';

export const ViewportContext = createContext();

export const ViewportContextProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    const handleBreakpoint = (sm, md, lg) => {
        if (width < BREAKPOINT_MD) {
            return sm;
        } else if (width < BREAKPOINT_LG) {
            return md;
        } else {
            return lg;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <ViewportContext.Provider value={{ width, handleBreakpoint }}>
            {children}
        </ViewportContext.Provider>
    )
}