import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/ProjectDetails.module.css";
import blueNileSportPreview from "../../public/assets/bluenilesport-preview.png";
import blueNileSportArticles from "../../public/assets/bluenilesport-articles.png";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectSection from "../../components/ProjectSection";
import SkillsContainer from "../../components/SkillsContainer";

const BlueNileSport = () => {
    return (
        <>
            <Head>
                <title>Projects | Blue Nile Sport</title>
            </Head>
            <article className={styles.detailsContainer}>
                <ProjectHeader
                    title={"Blue Nile Sport"}
                    image={blueNileSportPreview}
                    imageAlt="Blue Nile Sport landing page"
                    date="January 2022"
                    tags="Freelance, CMS"
                />
                <ProjectSection
                    sectionTitle="Overview"
                    paragraphs={[
                        "Blue Nile Sport is a platform that provides in-depth, analytical news and commentary on African football (soccer). It was developed in response to a rising demand for content relating to football competitions in Africa, particularly the Africa Cup of Nations (AFCON).",
                        "Though there are other news outlets that cover AFCON and similar tournaments, none are as granular and player-focused as Blue Nile Sport. As of writing, the site has over 90 articles and counting!"
                    ]}
                />
                <Image
                    src={blueNileSportArticles}
                    alt="A few articles taken from the Blue Nile Sport page"
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
                        "I was commissioned to aid in creating the website using Next.js and CSS modules. The articles are created and fed through Netlify CMS, and the site as a whole is hosted via Netlify."
                    ]}
                />
                <p className={styles.skillsTitle}><u>Skills</u></p>
                <SkillsContainer
                    skills={[
                        "Next.js",
                        "React",
                        "CSS",
                        "YAML",
                        "Netlify CMS",
                        "Netlify"
                    ]}
                    color={"black"}
                    backgroundColor={"#C0DFFC"}
                    numberPerRow={2}
                />
                <div className={styles.extra}>
                    <p><b>Links</b></p>
                    <ul>
                        <li><u><a target="_blank" href="https://www.bluenilesport.com/">Blue Nile Sport Website</a></u></li>
                        <li><u><a target="_blank" href="https://github.com/rajagoat/blue-nile-sports">GitHub Repo</a></u></li>
                    </ul>
                </div>
            </article>
        </>
    );
}

export default BlueNileSport;