import Layout from '../components/layout';
import Head from 'next/head';
import aboutStyles from './about.module.css';
import Link from 'next/link';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <section>
                <article>
                    <h1>About</h1>

                    <div className={aboutStyles.bio}>
                        <img
                            src="/images/profile.jpg"
                            alt="John Oerter"
                            width="100.5"
                            height="150"
                        />
                        <p>
                            Hi! My name is John Oerter, and this is my personal
                            blog. I'm a software developer in Omaha, NE focused
                            on software craftsmanship and front-end
                            technologies. If you would like to get in contact
                            with me, send me an email or reach out on one of the
                            platforms below.
                        </p>
                    </div>

                    <div className={aboutStyles.links}>
                        <a href="mailto:john@johnoerter.me">Email</a>
                        <a href="https://github.com/joerter">GitHub</a>
                        <a href="https://www.linkedin.com/in/johnoerter/">
                            LinkedIn
                        </a>
                    </div>

                    <h3>What does Red Green Refactor mean?</h3>
                    <p>
                        The name Red Green Refactor comes from the common cycle
                        of performing Test Driven Development. If you'd like to
                        learn more, check out{' '}
                        <Link href="/posts/introduction-to-tdd">
                            <a>this article</a>
                        </Link>
                        !
                    </p>
                </article>
            </section>
        </Layout>
    );
}
