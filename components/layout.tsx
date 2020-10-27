import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'Red Green Refactor';

export default function Layout({
    children,
    home,
}: {
    children: React.ReactNode;
    home?: boolean;
}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Red Green Refactor is the personal blog site for John Oerter, a software developer in Omaha, NE"
                />
                <meta
                    property="og:image"
                    content="https://redgreenrefactor.dev/images/logo-cropped.png"
                />
                <meta name="og:title" content={siteTitle} />
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
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
