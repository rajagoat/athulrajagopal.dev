import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NavMobile.module.css"
import { Icon } from "@iconify/react";
import themeIcon from '@iconify/icons-mdi/theme-light-dark';
import menuIcon from '@iconify/icons-mdi/menu';
import closeIcon from '@iconify/icons-mdi/close';
import useTheme from "../hooks/useTheme";
import { useRouter } from "next/router";
import useMenu from "../hooks/useMenu";

const NavMobile = () => {
    const router = useRouter();
    const { activeTheme, setActiveTheme } = useTheme();
    const { menuIsOpen, setMenuIsOpen } = useMenu();

    const toggleTheme = () => {
        const newTheme = activeTheme === 'light' ? 'dark' : 'light';
        setActiveTheme(newTheme);
        // this will close the menu when dark mode is toggled
        setMenuIsOpen(false);
    };

    const openMenu = () => {
        setMenuIsOpen(true);
    }

    const closeMenu = () => {
        setMenuIsOpen(false);
    }

    return (
        <>
            <nav className={`${styles.navbar} ${router.pathname !== "/" && (activeTheme === "dark" ? styles.navbarDark : styles.navbarLight)}`}>
                <div className={styles.logo} style={{ visibility: router.pathname === "/" && "hidden" }}>
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
                    <Link
                        href="/experience"
                        onClick={() => closeMenu()}
                        className={router.pathname === "/experience" ? styles.activeLink : undefined}
                    >
                        Experience
                    </Link>
                    <Link
                        href="/projects"
                        onClick={() => closeMenu()}
                        className={router.pathname === "/projects" ? styles.activeLink : undefined}
                    >
                        Projects
                    </Link>
                    <div className={styles.subLinks}>
                        <Link
                            href="/projects/gleanr"
                            onClick={() => closeMenu()}
                            className={router.pathname === "/projects/gleanr" ? styles.activeLink : undefined}
                        >
                            Gleanr
                        </Link>
                        <Link
                            href="/projects/bluenilesport"
                            onClick={() => closeMenu()}
                            className={router.pathname === "/projects/bluenilesport" ? styles.activeLink : undefined}
                        >
                            Blue Nile Sport
                        </Link>
                        <Link
                            href="/projects/onthehouse"
                            onClick={() => closeMenu()}
                            className={router.pathname === "/projects/onthehouse" ? styles.activeLink : undefined}
                        >
                            OnTheHouse
                        </Link>
                    </div>
                    <Link
                        href="/about"
                        onClick={() => closeMenu()}
                        className={router.pathname === "/about" ? styles.activeLink : undefined}
                    >
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