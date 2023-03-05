import Head from 'next/head'
import ProjectPreview from '../../components/ProjectPreview';
import styles from "../../styles/Projects.module.css";
import gleanrPreview from "../../public/assets/gleanr-preview.png";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects | Athul Rajagopal</title>
                <meta name="description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
                <link rel="icon" type="image/png" href="/icons/favicon.png" />
            </Head>
            <main className={styles.projects}>
                <h1>Projects</h1>
                <div className={styles.projectPreviewContainer}>
                    <ProjectPreview
                        previewImage={gleanrPreview}
                        previewImageAlt="gleanr landing page"
                        title="Gleanr"
                        date="December 2020"
                        tags="Hackathon, Full-Stack"
                        description="Gleanr is a web application that connects farmers, volunteers, and food banks via..."
                        redirectURL="/projects/gleanr"
                    />
                </div>
            </main>
        </>
    );
}

export default Projects;