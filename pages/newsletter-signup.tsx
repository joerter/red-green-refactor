import Layout from '../components/layout';
import Head from 'next/head';

export default function NewsletterSignup() {
    return (
        <Layout>
            <Head>
                <title>Thanks for signing up!</title>
            </Head>
            <section>
                <article>
                    <h1>Thanks for signing up!</h1>
                    <p>
                        You should now have an email to confirm your
                        subscription. Click the link in that email and you'll be
                        all set!
                    </p>
                </article>
            </section>
        </Layout>
    );
}
