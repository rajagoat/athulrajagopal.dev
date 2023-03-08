import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const setInitialTheme = `
            function getUserPreference() {
            if(window.localStorage.getItem('theme')) {
                return window.localStorage.getItem('theme')
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                        ? 'dark'
                        : 'light'
            }
            document.body.dataset.theme = getUserPreference();
        `;
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" href="/icons/favicon.png" />
                    <meta name="description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
                    <meta name="author" content="Athul Rajagopal" />
                    {/* Facebook Meta Tags */}
                    <meta property="og:url" content="https://www.athulrajagopal.dev/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Home | Athul Rajagopal" />
                    <meta property="og:description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
                    <meta property="og:image" content="https://www.athulrajagopal.dev/assets/og-preview.png" />
                    {/* Twitter Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="twitter:domain" content="athulrajagopal.dev" />
                    <meta property="twitter:url" content="https://www.athulrajagopal.dev/" />
                    <meta name="twitter:title" content="Home | Athul Rajagopal" />
                    <meta name="twitter:description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
                    <meta name="twitter:image" content="https://www.athulrajagopal.dev/assets/og-preview.png" />
                </Head>
                <body style={{ overflowX: "hidden" }}>
                    <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;