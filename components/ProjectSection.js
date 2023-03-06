import styles from "../styles/ProjectSection.module.css";

const ProjectSection = ({ sectionTitle, paragraphs }) => {
    return (
        <div className={styles.sectionContainer}>
            {paragraphs.map((paragraph, index) =>
                <p key={index} className={styles.sectionParagraph}>
                    {index === 0 && <b>{sectionTitle}: </b>}
                    {paragraph}
                </p>
            )}
        </div>
    );
}
 
export default ProjectSection;