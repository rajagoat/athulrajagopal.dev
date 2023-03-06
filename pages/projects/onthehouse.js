import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/ProjectDetails.module.css";
import OnTheHousePreview from "../../public/assets/onthehouse-preview.png";
import OnTheHouseSample from "../../public/assets/onthehouse-pastorder.png";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectSection from "../../components/ProjectSection";
import SkillsContainer from "../../components/SkillsContainer";

const OnTheHouse = () => {
    return (
        <>
            <Head>
                <title>Projects | OnTheHouse</title>
            </Head>
            <article className={styles.detailsContainer}>
                <ProjectHeader
                    title={"OnTheHouse"}
                    image={OnTheHousePreview}
                    imageAlt="OnTheHouse wireframes"
                    date="December 2020"
                    tags="Passion Project, UX/UI"
                />
                <ProjectSection
                    sectionTitle="Overview"
                    paragraphs={[
                        "As a busy and cash-strapped university student, I am always on the hunt for wholesome meals available for cheap. I realized that there are not any homemade food delivery apps on the market, and this drove me to create OnTheHouse.",
                        "OnTheHouse is a (hypothetical) service that helps home cooks connect with hungry customers looking for healthy and affordable meals."
                    ]}
                />
                <Image
                    src={OnTheHouseSample}
                    alt="Example wireframe of what a past order using the app would look like"
                    sizes="(max-width: 300px) 50vw,
                            300px"
                    style={{
                        width: '50vw',
                        maxWidth: '300px',
                        height: 'auto',
                    }}
                    placeholder="blur"
                    className={styles.extraImage}
                />
                <ProjectSection
                    sectionTitle="Development"
                    paragraphs={[
                        "Using various food delivery apps as inspiration, I modelled the application on Figma. This project was one of my first experiences with using Figma as a design tool and thinking about user experience."
                    ]}
                />
                <p className={styles.skillsTitle}><u>Skills</u></p>
                <SkillsContainer
                    skills={[
                        "Figma",
                        "UX/UI"
                    ]}
                    color={"black"}
                    backgroundColor={"#C0DFFC"}
                    numberPerRow={2}
                    aligned
                />
                <div className={styles.extra}>
                    <p><b>Links</b></p>
                    <ul>
                        <li><u><a target="_blank" href="https://www.figma.com/proto/EMwhNKfnvme39x8nKuYuRk/OnTheHouse-(Preview)?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2">Preview Prototype</a></u></li>
                    </ul>
                </div>
            </article>
        </>
    );
}

export default OnTheHouse;