import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps } from 'next';
import { getTagsData } from '../../lib/posts';
import Link from 'next/link';

export default function Tags({
    tagData
}: {
    tagData: {
        [key: string]: number;
    };
}) {
    const tags = Object.keys(tagData).sort();

    return (
        <Layout>
            <Head>
                <title>Tags</title>
            </Head>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Tags</h2>
                <ul className={utilStyles.list}>
                    {
                        tags.map(t => (
                            <li className={utilStyles.listItem} key={t}>
                                <Link href={`/tags/${t}`}>
                                    <a>#{t}</a>
                                </Link>
                                <br/>
                                <small className={utilStyles.lightText}>
                                    {tagData[t]} {tagData[t] > 1 ? `posts` : `post`}
                                </small>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const tagData = getTagsData();
    return {
        props: {
            tagData
        }
    }
}
