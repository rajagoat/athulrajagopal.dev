import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NavMobile.module.css"
import { Icon } from "@iconify/react";
import menuIcon from '@iconify/icons-mdi/menu';
import closeIcon from '@iconify/icons-mdi/close';
import useTheme from "../hooks/useTheme";

const NavMobile = () => {
    const { activeTheme, setActiveTheme } = useTheme();

    const openNav = () => {
        console.log('navbar opened');
    }

    return (
        <nav className={`${styles.navbar} ${activeTheme === "dark" ? styles.navbarDark : styles.navbarLight}`}>
            <div className={styles.logo}>
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
                    onClick={() => openNav()}
                    style={{ cursor: "pointer" }}
            />
        </nav>
    );
}

export default NavMobile;