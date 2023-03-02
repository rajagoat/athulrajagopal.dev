import styles from "../styles/Footer.module.css";
import { Icon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import githubIcon from "@iconify/icons-mdi/github";
import useViewport from "../hooks/useViewport";

const Footer = () => {
    const { width } = useViewport();
    const BREAKPOINT = 827;

    return (
        <footer className={styles.footer}>
            <p>Athul Rajagopal • {new Date().getUTCFullYear()}</p>
            <p>Illustrations courtesy of
                <i> <a href="https://undraw.co/" target="_blank" className={styles.externalLink}>
                    undraw
                </a></i> and
                <i> <a href="https://undraw.co/" target="_blank" className={styles.externalLink}>
                    haikei
                </a></i>
            </p>
            <p>Built with Next.js</p>
            <div className={styles.social}>
                <a href="https://github.com/rajagoat" target="_blank">
                    <Icon
                        icon={githubIcon}
                        width={width < BREAKPOINT ? 30 : 47}
                        height={width < BREAKPOINT ? 30 : 47}
                    />
                </a>
                <a href="https://www.linkedin.com/in/rajagoat/" target="_blank">
                    <Icon
                        icon={linkedinIcon}
                        width={width < BREAKPOINT ? 30 : 47}
                        height={width < BREAKPOINT ? 30 : 47}
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;