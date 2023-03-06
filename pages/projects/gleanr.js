import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/ProjectDetails.module.css";
import gleanrPreview from "../../public/assets/gleanr-preview.png";
import gleanrCertificate from "../../public/assets/gleanr-certificate.png";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectSection from "../../components/ProjectSection";
import SkillsContainer from "../../components/SkillsContainer";

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
                <Image
                    src={gleanrCertificate}
                    alt="Winner's Certificate of Recognition from Morgan Stanley"
                    sizes="(max-width: 600px) 95vw,
                            600px"
                    style={{
                        width: '95vw',
                        maxWidth: '600px',
                        height: 'auto',
                    }}
                    placeholder="blur"
                    className={styles.extraImage}
                />
                <ProjectSection
                    sectionTitle="Development"
                    paragraphs={[
                        "This hackathon provided me with an opportunity to apply my full-stack development knowledge. The site was developed using a slightly modified version of the MERN stack (i.e. using Next.js rather than plain React). Most of the styling was done using TailwindCSS, which was a first for me.",
                        "I created a REST API (the documentation for which can be found here) using Node.js and Express. Additionally, I made use of Mongoose, which is an object modelling library that links between the Node backend and the data resting in MongoDB."
                    ]}
                />
                <p className={styles.sectionTitle}><u>Skills</u></p>
                <SkillsContainer
                    skills={[
                        "Next.js",
                        "React",
                        "TailwindCSS",
                        "Node.js",
                        "Express",
                        "REST API",
                        "Mongoose",
                        "MongoDB"
                    ]}
                    color={"black"}
                    backgroundColor={"#C0DFFC"}
                    numberPerRow={2}
                />
            </article>
        </>
    );
}

export default Gleanr;