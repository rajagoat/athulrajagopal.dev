import Image from "next/image";
import styles from "../styles/ProjectHeader.module.css";

const ProjectHeader = ({ title, image, imageAlt, date, tags }) => {
    return (
        <>
            <h1>{title}</h1>
            <Image
                src={image}
                alt={imageAlt}
                sizes="(max-width: 1440px) 100vw,
                        1440px"
                style={{
                    width: '100%',
                    maxWidth: '1440px',
                    height: 'auto',
                }}
                placeholder="blur"
                priority
            />
            <div className={styles.meta}>
                <p><i>{date}</i></p>
                <p><b>Tags:</b> {tags}</p>
            </div>
        </>
    );
}

export default ProjectHeader;