import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
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
                <Image
                    src="/icons/light-mode.svg"
                    width={49.5}
                    height={49.5}
                    alt="sun icon, click to switch to dark mode"
                />
            </div>
        </nav>
    );
}

export default Navbar;