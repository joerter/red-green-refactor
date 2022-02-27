import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
										<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132343202-6"></script>
										<script src="/ga.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="/prism.js" data-manual></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
