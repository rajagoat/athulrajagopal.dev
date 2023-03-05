import Head from 'next/head'
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <>
            <Head>
                <title>About | Athul Rajagopal</title>
                <meta name="description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
                <link rel="icon" type="image/png" href="/icons/favicon.png" />
            </Head>
            <main className={styles.about}>
                <h1>About</h1>
            </main>
        </>
    );
}

export default About;