import Head from 'next/head'
import styles from "../styles/Experience.module.css";
import useTheme from "../hooks/useTheme";
import useViewport from "../hooks/useViewport";
import { BREAKPOINT_NAV } from "../constants/index";
import Position from '../components/Position';
import ctsDark from "../public/logos/cts-logo-dark.png";
import ctsLight from "../public/logos/cts-logo-light.png";
import ctcDark from "../public/logos/ctc-logo-dark.png";
import ctcLight from "../public/logos/ctc-logo-light.png";
import suniaDark from "../public/logos/sunia-logo-dark.png";
import suniaLight from "../public/logos/sunia-logo-light.png";

const Experience = () => {
    const { activeTheme } = useTheme();
    const { width } = useViewport();

    return (
        <>
            <Head>
                <title>Experience | Athul Rajagopal</title>
            </Head>
            <main className={styles.experience}>
                <h1>Experience</h1>
                <Position
                    logo={activeTheme === "dark" ? ctsDark : ctsLight}
                    positionTitle="Software Developer"
                    organization="CalgaryToSpace"
                    dateRange="October 2022 — Present"
                    accomplishments={[
                        "Developing mission-critical software for Calgary’s first student-built satellite",
                        "Programming communication modules for an STM32 microcontroller",
                        "Working with several serial communication technologies"
                    ]}
                    skills={[
                        "C",
                        "FreeRTOS",
                        "STM32",
                        "UART",
                        "I2C",
                        "SPI"
                    ]}
                />
                <Position
                    logo={activeTheme === "dark" ? ctcDark : ctcLight}
                    marginTop={width < BREAKPOINT_NAV && 40}
                    positionTitle="VP Technology"
                    organization="Code the Change YYC"
                    dateRange="October 2020 — June 2022"
                    accomplishments={[
                        "Designed and developed websites for non-profit organizations",
                        "Optimized code to efficiently handle large amounts of operational data",
                        "Improved project workflows by 33% through implementing best programming practices"
                    ]}
                    skills={[
                        "Figma",
                        "Webflow",
                        "React",
                        "MaterialUI",
                        "TypeScript",
                        "Firebase"
                    ]}
                />
                <Position
                    logo={activeTheme === "dark" ? suniaDark : suniaLight}
                    marginTop={width < BREAKPOINT_NAV && 40}
                    positionTitle="Program Coordinator"
                    organization="SUNIA"
                    dateRange="November 2018 — October 2022"
                    accomplishments={[
                        "Collaborated with 13 fellow volunteers to deliver UN related educational content to 100+ students each summer",
                        "Improved event planning by using process improvement techniques to reduce setup time",
                        "Refactored mission and vision statements by focusing on end user experience"
                    ]}
                    skills={[
                        "Leadership",
                        "Efficiency",
                        "Creativity",
                        "Teamwork",
                    ]}
                />
            </main>
        </>
    );
}

export default Experience;