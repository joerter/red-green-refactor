import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';
import Tags from '../../components/tags';
import Newsletter from '../../components/newsletter';

export default function Post({
    postData,
}: {
    postData: {
        id: string;
        title: string;
        date: string;
        contentHtml: string;
        tags: string[];
        coverImagePath: string;
        description: string;
    };
}) {
    const canonicalUrl = `https://redgreenrefactor.dev/posts/${postData.id}`;
    return (
        <Layout
            metaImage={postData.coverImagePath}
            metaTitle={postData.title}
            metaDescription={postData.description}
        >
            <Head>
                <link rel="canonical" href={canonicalUrl} />
                <title>{postData.title}</title>
                <link href="/prism.css" rel="stylesheet" />
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <Tags tags={postData.tags}></Tags>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
            <Newsletter></Newsletter>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData,
        },
    };
};
