import Head from 'next/head'
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <>
            <Head>
                <title>About | Athul Rajagopal</title>
            </Head>
            <main className={styles.about}>
                <h1>About</h1>
            </main>
        </>
    );
}

export default About;