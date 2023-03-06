import ProjectHeader from "../../components/ProjectHeader";
import styles from "../../styles/ProjectDetails.module.css";
import gleanrPreview from "../../public/assets/gleanr-preview.png";
import Head from "next/head";
import ProjectSection from "../../components/ProjectSection";

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
                <ProjectSection
                    sectionTitle="Overview"
                    paragraphs={[
                        "Gleanr is a web application that connects farmers, volunteers, and food banks to support gleaning initiatives. It was created for Earth Day Canada at Code to Give, which is a Canada-wide hackathon hosted by Morgan Stanley.",
                        "The application provides an intuitive interface for multiple kinds of users (i.e. farmers, volunteers, and food bank workers), to organize and arrange gleaning events. As the only remote team participating (the competition was in Montreal), our team of five ultimately earned second place for our efforts."
                    ]}
                />
            </article>
        </>
    );
}

export default Gleanr;