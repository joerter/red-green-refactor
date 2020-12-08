import Layout from '../components/layout';
import Head from 'next/head';

export default function NewsletterConfirmed() {
    return (
        <Layout>
            <Head>
                <title>Confirmed</title>
            </Head>
            <section>
                <article>
                    <h1>You're all set!</h1>
                    <p>
                        Thanks for confirming! You'll get an email when I
                        publish my next post.
                    </p>
                </article>
            </section>
        </Layout>
    );
}
