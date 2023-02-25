import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NavMobile.module.css"
import { Icon } from "@iconify/react";
import themeIcon from '@iconify/icons-mdi/theme-light-dark';
import menuIcon from '@iconify/icons-mdi/menu';
import closeIcon from '@iconify/icons-mdi/close';
import useTheme from "../hooks/useTheme";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavMobile = () => {
    const router = useRouter();
    const { activeTheme, setActiveTheme } = useTheme();
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleTheme = () => {
        const newTheme = activeTheme === 'light' ? 'dark' : 'light';
        setActiveTheme(newTheme);
    };

    const openMenu = () => {
        setMenuIsOpen(true);
    }

    const closeMenu = () => {
        setMenuIsOpen(false);
    }

    // this will close the menu on each redirect
    useEffect(() => {
        setMenuIsOpen(false);
    }, [router]);

    return (
        <>
            <nav className={`${styles.navbar} ${activeTheme === "dark" && router.pathname !== "/"  ? styles.navbarDark : styles.navbarLight}`}>
                <div className={styles.logo} style={{visibility: router.pathname === "/" && "hidden"}}>
                    <Link href="/">
                        <Image
                            src="/icons/favicon.png"
                            width={31}
                            height={31}
                            alt="main logo, click to go back to homepage"
                        />
                    </Link>
                </div>
                <Icon
                    icon={menuIcon}
                    width="31"
                    height="31"
                    onClick={() => openMenu()}
                    style={{ cursor: "pointer" }}
                />
            </nav>
            {menuIsOpen && <div className={styles.menu}>
                <Icon
                    icon={closeIcon}
                    width="31"
                    height="31"
                    onClick={() => closeMenu()}
                    style={{ cursor: "pointer" }}
                />
                <div className={styles.links}>
                    <Link href="/experience">
                        Experience
                    </Link>
                    <Link href="/projects">
                        Projects
                    </Link>
                    <div className={styles.subLinks}>
                        <Link href="#">
                            Gleanr
                        </Link>
                        <Link href="#">
                            Blue Nile Sport
                        </Link>
                        <Link href="#">
                            OnTheHouse
                        </Link>
                    </div>
                    <Link href="/about">
                        About
                    </Link>
                    <Icon
                        icon={themeIcon}
                        width="31"
                        height="31"
                        onClick={() => toggleTheme()}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>}
        </>
    );
}

export default NavMobile;