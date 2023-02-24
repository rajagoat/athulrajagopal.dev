import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import { Icon } from "@iconify/react";
import themeIcon from '@iconify/icons-mdi/theme-light-dark';
import menuIcon from '@iconify/icons-mdi/menu';
import closeIcon from '@iconify/icons-mdi/close';
import { useEffect, useState } from "react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(undefined);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const getMediaQueryPreference = () => {
        const mediaQuery = "(prefers-color-scheme: dark)";
        const mql = window.matchMedia(mediaQuery);
        const hasPreference = typeof mql.matches === "boolean";

        if (hasPreference) {
            return mql.matches ? "dark" : "light";
        }
    };

    const setThemePreference = (pref) => {
        localStorage.setItem("theme", pref);
    };

    const getThemePreference = () => {
        return localStorage.getItem("theme");
    }

    useEffect(() => {
        const themePreference = getThemePreference();
        if (themePreference !== null) {
            setDarkMode(themePreference);
        } else {
            const mediaQueryPreference = getMediaQueryPreference();
            setDarkMode(mediaQueryPreference);
        }
    }, []);

    useEffect(() => {
        if (typeof darkMode !== undefined) {
            if (darkMode) {
                setThemePreference("dark");
            } else {
                setThemePreference("light");
            }
        }
    }, [darkMode]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/icons/favicon.png"
                        width={74}
                        height={74}
                        alt="main logo, click to go back to homepage"
                    />
                </Link>
            </div>
            <div className={styles.links}>
                <Link href="/experience">
                    Experience
                </Link>
                <Link href="/projects">
                    Projects
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Icon 
                    icon={themeIcon}
                    width="49.5" 
                    height="49.5" 
                    onClick={() => toggleDarkMode()}
                    color={darkMode ? "white" : "black"}
                />
            </div>
        </nav>
    );
}

export default Navbar;