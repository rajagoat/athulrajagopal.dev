import Image from "next/image";
import styles from "../styles/ProjectHeader.module.css";

const ProjectHeader = ({ title, image, imageAlt, date, tags }) => {
    return (
        <>
            <h1>{title}</h1>
            <Image
                src={image}
                alt={imageAlt}
                sizes="(max-width: 675px) 100%,
                        675px"
                style={{
                    width: '100%',
                    maxWidth: '675px',
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