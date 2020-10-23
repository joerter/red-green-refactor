import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Tags from '../../components/tags';
import Date from '../../components/date';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostsByTag, getAllPostTags } from '../../lib/posts';

export default function TagPosts({
    tagPostsData,
}: {
    tagPostsData: {
        tag: string;
        posts: { date: string; title: string; id: string; tags: string[] }[];
    };
}) {
    return (
        <Layout home>
            <Head>
                <title>#{tagPostsData.tag} Posts - Red Green Refactor</title>
            </Head>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>
                    Posts tagged #{tagPostsData.tag}
                </h2>
                <ul className={utilStyles.list}>
                    {tagPostsData.posts.map(({ id, date, title, tags }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <Tags tags={tags}></Tags>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostTags();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const tagPostsData = await getPostsByTag(params.tag as string);
    return {
        props: {
            tagPostsData,
        },
    };
};
