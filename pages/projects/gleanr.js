import ProjectHeader from "../../components/ProjectHeader";
import styles from "../../styles/ProjectDetails.module.css";
import gleanrPreview from "../../public/assets/gleanr-preview.png";
import Head from "next/head";

const Gleanr = () => {
    return (
        <>
            <Head>
                <title>Projects | Gleanr</title>
            </Head>
            <article className={styles.detailsContainer}>
                <ProjectHeader
                    title={"Gleanr"}
                    image={gleanrPreview}
                    imageAlt="gleanr landing page"
                    date="November 2022"
                    tags="Hackathon, Full-Stack"
                />
            </article>
        </>
    );
}

export default Gleanr;