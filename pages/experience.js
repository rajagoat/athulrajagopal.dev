import Head from 'next/head'
import styles from "../styles/Experience.module.css";
import useTheme from "../hooks/useTheme";
import Position from '../components/Position';
import ctsDark from "../public/logos/cts-logo-dark.png";
import ctsLight from "../public/logos/cts-logo-light.png";
import ctcDark from "../public/logos/ctc-logo-dark.png";
import ctcLight from "../public/logos/ctc-logo-light.png";

const Experience = () => {
    const { activeTheme } = useTheme();

    return (
        <>
            <Head>
                <title>Experience | Athul Rajagopal</title>
                <meta name="description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
                <link rel="icon" type="image/png" href="/icons/favicon.png" />
            </Head>
            <main className={styles.experience}>
                <h1>Experience</h1>
                <Position
                    logo={activeTheme === "dark" ? ctsDark : ctsLight}
                    positionTitle={"Software Developer"}
                    organization={"CalgaryToSpace"}
                    dateRange={"October 2022 — Present"}
                    accomplishments={[
                        "Developing mission-critical software for Calgary’s first student-built satellite",
                        "Programming communication modules for an STM32 microcontroller",
                        "Working with several serial communication technologies"
                    ]}
                />
                <Position
                    logo={activeTheme === "dark" ? ctcDark : ctcLight}
                    positionTitle={"VP Technology"}
                    organization={"Code the Change YYC"}
                    dateRange={"October 2020 — June 2022"}
                    accomplishments={[
                        "Designed and developed websites for non-profit organizations",
                        "Optimized code to efficiently handle large amounts of operational data",
                        "Improved project workflows by 33% through implementing best programming practices"
                    ]}
                />
            </main>
        </>
    );
}

export default Experience;