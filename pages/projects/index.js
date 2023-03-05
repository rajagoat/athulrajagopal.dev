import Head from 'next/head'
import styles from "../../styles/Projects.module.css";

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
            </main>
        </>
    );
}

export default Projects;