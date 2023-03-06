import Head from 'next/head'
import ProjectPreview from '../../components/ProjectPreview';
import styles from "../../styles/Projects.module.css";
import gleanrPreview from "../../public/assets/gleanr-preview.png";
import blueNileSportPreview from "../../public/assets/bluenilesport-preview.png";
import onTheHousePreview from "../../public/assets/onthehouse-preview.png";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects | Athul Rajagopal</title>
            </Head>
            <main className={styles.projects}>
                <h1>Projects</h1>
                <div className={styles.projectPreviewContainer}>
                    <ProjectPreview
                        previewImage={gleanrPreview}
                        previewImageAlt="gleanr landing page"
                        title="Gleanr"
                        date="November 2022"
                        tags="Hackathon, Full-Stack"
                        description="Gleanr is a web application that connects farmers, volunteers, and food banks via..."
                        redirectURL="/projects/gleanr"
                    />
                    <ProjectPreview
                        previewImage={blueNileSportPreview}
                        previewImageAlt="Blue Nile Sport landing page"
                        title="Blue Nile Sport"
                        date="January 2022"
                        tags="Freelance, CMS"
                        description="Blue Nile Sport is a platform that provides in-depth analytical news and commentary..."
                        redirectURL="/projects/bluenilesport"
                    />
                    <ProjectPreview
                        previewImage={onTheHousePreview}
                        previewImageAlt="OnTheHouse wireframes"
                        title="OnTheHouse"
                        date="December 2020"
                        tags="Passion Project, UX/UI"
                        description="As a busy and cash-strapped university student, I am always on the hunt for wholesome..."
                        redirectURL="/projects/onthehouse"
                    />
                </div>
            </main>
        </>
    );
}

export default Projects;