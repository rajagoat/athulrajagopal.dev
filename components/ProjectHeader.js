import Image from "next/image";
import styles from "../styles/ProjectHeader.module.css";

const ProjectHeader = ({ title, image, imageAlt, date, tags }) => {
    return (
        <>
            <h1>{title}</h1>
            <Image
                src={image}
                alt={imageAlt}
                sizes="(max-width: 900px) 100%,
                        900px"
                style={{
                    width: '100%',
                    maxWidth: '900px',
                    height: 'auto',
                }}
                placeholder="blur"
                priority
                className={styles.imageMain}
            />
            <div className={styles.meta}>
                <p><i>{date}</i></p>
                <p><b>Tags:</b> {tags}</p>
            </div>
        </>
    );
}

export default ProjectHeader;