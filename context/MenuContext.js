import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
            {children}
        </MenuContext.Provider>
    )
};