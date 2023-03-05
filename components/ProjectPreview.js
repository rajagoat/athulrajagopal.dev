import Image from "next/image";
import styles from "../styles/ProjectPreview.module.css";
import { useRouter } from "next/router";

const ProjectPreview = ({ previewImage, previewImageAlt, title, date, tags, description, redirectURL }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(redirectURL);
    };

    return (
        <div className={styles.previewContainer} onClick={handleClick}>
            <div className={styles.imageContainer}>
                <Image
                    src={previewImage}
                    alt={previewImageAlt}
                    fill
                    priority
                    // need to add `sizes`
                />
            </div>
            <div className={styles.information}>
                <h2>{title}</h2>
                <p><i>{date}</i></p>
                <p><b>Tags:</b> {tags}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default ProjectPreview;