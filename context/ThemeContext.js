import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

/* 
    credits for dark mode implementation goes to Rob Morieson, the referenced
    tutorial can be found here: https://electricanimals.com/articles/next-js-dark-mode-toggle
*/

export const ThemeContextProvider = ({ children }) => {
    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);

    return (
        <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}