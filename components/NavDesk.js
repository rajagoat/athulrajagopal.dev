import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NavDesk.module.css"
import useTheme from "../hooks/useTheme";
import { Icon } from "@iconify/react";
import themeIcon from '@iconify/icons-mdi/theme-light-dark';
import { useRouter } from "next/router";

const NavDesk = () => {
    const router = useRouter();

    const {activeTheme, setActiveTheme} = useTheme();

    const toggleTheme = () => {
        const newTheme = activeTheme === 'light' ? 'dark' : 'light';
        setActiveTheme(newTheme);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo} style={{visibility: router.pathname === "/" && "hidden"}}>
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
                    style={{ cursor: "pointer" }}
                />
            </div>
        </nav>
    );
}

export default NavDesk;