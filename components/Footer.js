import Image from "next/image";
import styles from "../styles/Footer.module.css";
import github from "../public/icons/github.svg";
import linkedin from "../public/icons/linkedin.svg";

const Footer = () => {
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
                    <Image
                        src={github}
                        height={41}
                        width={41}
                        alt="GitHub logo, click to go to my GitHub page"
                    />
                </a>
                <a href="https://www.linkedin.com/in/rajagoat/" target="_blank">
                    <Image
                        src={linkedin}
                        height={41}
                        width={41}
                        alt="LinkedIn logo, click to go to my LinkedIn page"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;