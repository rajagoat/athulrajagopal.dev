import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import { Icon } from "@iconify/react";
import themeIcon from '@iconify/icons-mdi/theme-light-dark';
import menuIcon from '@iconify/icons-mdi/menu';
import closeIcon from '@iconify/icons-mdi/close';
import { useEffect, useState } from "react";

const Navbar = () => {
    const [activeTheme, setActiveTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = activeTheme === 'light' ? 'dark' : 'light';
        setActiveTheme(newTheme);
    };

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme");
        console.log(savedTheme);
        savedTheme && setActiveTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);

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
                    onClick={() => toggleTheme()}
                    style={{cursor: "pointer"}}
                />
            </div>
        </nav>
    );
}

export default Navbar;