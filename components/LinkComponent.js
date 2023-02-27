import Link from "next/link";
import styles from "../styles/LinkComponent.module.css"
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-mdi/arrow-down';

const LinkComponent = ({ link }) => {
    return (
        <Link
            href={link.toLowerCase()}
            className={styles.link}
        >
            {link}
            <Icon 
                icon={arrowDown} 
                rotate={3}
                height={32}
                width={32}
            />
        </Link>
    );
}

export default LinkComponent;