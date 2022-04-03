import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

export interface PostData {
    date: string;
    title: string;
    id: string;
    tags: string[];
    description: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): PostData[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/,
'');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const tags = matterResult.data.tags;

        // Combine the data with the id
        return {
            id,
            tags,
            ...(matterResult.data as {
                date: string;
                title: string;
                description: string;
            }),
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getTagsData() {
    const tags = {};
    const fileNames = fs.readdirSync(postsDirectory);

    fileNames.forEach((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath);
        const matterResult = matter(fileContents);
        const postTags = matterResult.data.tags as string[];
        postTags.forEach((t) => {
            if (tags[t] != null) {
                tags[t]++;
                return;
            }

            tags[t] = 1;
        });
    });

    return tags;
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const tags = matterResult.data.tags;

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        tags,
        ...(matterResult.data as {
            date: string;
            title: string;
            coverImagePath: string;
            description: string;
        }),
    };
}

export function getPostsByTag(tag: string) {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .map((fileName) => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);
            const tags = matterResult.data.tags as string[];
            if (!tags.includes(tag)) {
                return null;
            }

            return {
                id,
                tags,
                ...(matterResult.data as {
                    date: string;
                    title: string;
                    description: string;
                }),
            };
        })
        .filter((p) => p != null);

    const sortedPosts = allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    return {
        tag,
        posts: sortedPosts,
    };
}

export function getAllPostTags() {
    let tags = [];
    const fileNames = fs.readdirSync(postsDirectory);

    fileNames.forEach((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath);
        const matterResult = matter(fileContents);
        const postTags = matterResult.data.tags;
        tags = [...postTags, ...tags];
    });

    const uniqueTags = tags.filter(
        (t, index, self) => self.indexOf(t) === index
    );
    return uniqueTags.map((t) => ({
        params: {
            tag: t,
        },
    }));
}

export function blogPostsRssXml(
    posts: PostData[]
): { rssItemsXml: string; latestPostDate: string } {
    const formatDate = (date: string) => new Date(date).toISOString();
    const rssItemsXml = posts
        .map((p) => {
            return `<entry>
                <id>https://redgreenrefactor.dev/posts/${p.id}</id>
                <title>${p.title}</title>
                <updated>${formatDate(p.date)}</updated>
                <author>
                    <name>John Oerter</name>
                </author>
                <link
                    rel="alternate"
                    href="https://redgreenrefactor.dev/posts/${p.id}"
                />
                <summary>${p.description}</summary>
              </entry>`;
        })
        .join('');

    return {
        rssItemsXml,
        latestPostDate: formatDate(posts[0].date),
    };
}
