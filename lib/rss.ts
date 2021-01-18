import fs from 'fs';
import path from 'path';
import { getSortedPostsData, blogPostsRssXml, getPostsByTag, PostData } from './posts';

function writeRss(posts: PostData[], filename: string) {
    const { rssItemsXml, latestPostDate } = blogPostsRssXml(posts);
    const selfLink = `https://redgreenrefactor.dev/${filename}.xml`;
    const xml =  `<?xml version="1.0" ?>
                    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
                        <channel>
                            <title>Red Green Refactor</title>
                            <link>https://redgreenrefactor.dev</link>
                            <description>Clojure and software craftsmanship</description>
                            <language>en</language>
                            <lastBuildDate>${latestPostDate}</lastBuildDate>
                            <atom:link href="${selfLink}" rel="self" type="application/rss+xml" />
                            ${rssItemsXml}
                        </channel>
                    </rss>`;

    const publicDirectory = path.join(process.cwd(), 'public');
    fs.writeFile(`${publicDirectory}/${filename}.xml`, xml, err => {
        if (err) {
            console.error(err)
            return
        }

        console.log('Success!')
    })
}

function generateMasterFeed() {
    console.log('Generating feed rss...');
    const posts = getSortedPostsData();
    writeRss(posts, 'rss');
}

function generateClojureFeed() {
    console.log('Generating clojure feed rss...')
    const tagPosts = getPostsByTag('clojure');
    writeRss(tagPosts.posts, 'clojure');
}

function generateFeeds() {
    generateMasterFeed();
    generateClojureFeed();
}

generateFeeds();
