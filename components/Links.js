import styles from "../styles/Links.module.css"
import LinkComponent from "./LinkComponent";

const Links = ({ links }) => {
    return (
        <div className={styles.linksContainer}>
            {links.map((link, index) =>
                <LinkComponent link={link} key={index} />
            )}
        </div>
    );
}

export default Links;