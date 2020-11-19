import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'Red Green Refactor';
const defaultImage = 'https://redgreenrefactor.dev/images/logo-cropped.png'
const defaultDescription = 'Red Green Refactor is the personal blog site for John Oerter, a software developer in Omaha, NE'

export default function Layout(props : {
    children: React.ReactNode;
    home?: boolean;
    metaImage?: string;
    metaTitle?: string;
    metaDescription?: string;
}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content={props.metaDescription || defaultDescription}
                />
                <meta
                    name="og:description"
                    content={props.metaDescription || defaultDescription}
                />
                <meta
                    name="og:image"
                    content={props.metaImage ? `https://redgreenrefactor.dev${props.metaImage}` : defaultImage}
                />
                <meta name="og:title" content={props.metaTitle || siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <Link href="/">
                    <a className="link-override"><img src="/images/logo-cropped.png" alt={siteTitle} /></a>
                </Link>
                <nav className={styles.menu}>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/tags">
                        <a>Tags</a>
                    </Link>
                </nav>
            </header>
            <main>{props.children}</main>
            {!props.home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
