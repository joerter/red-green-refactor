#!/usr/bin/env zx

import 'zx/globals';
import {
    getSortedPostsData,
    blogPostsRssXml,
    getPostsByTag,
    PostData,
} from './posts';

function writeRss(posts: PostData[], filename: string) {
    const { rssItemsXml, latestPostDate } = blogPostsRssXml(posts);
    const selfLink = `https://redgreenrefactor.dev/${filename}.xml`;
    const xml = `<?xml version="1.0" encoding="utf-8"?>
                    <feed xmlns="http://www.w3.org/2005/Atom">
                        <title>Red Green Refactor</title>
                        <link rel="self" href="${selfLink}" />
                        <updated>${latestPostDate}</updated>
                        <author>
                            <name>John Oerter</name>
                            <email>john@johnoerter.me</email>
                            <uri>https://johnoerter.me</uri>
                        </author>
                        <id>https://redgreenrefactor.dev</id>
                        <icon>/favicon.ico</icon>
                        <logo>/images/logo-cropped.png</logo>
                        <subtitle>Clojure and software craftsmanship</subtitle>

                        ${rssItemsXml}
                    </feed>`;

    const publicDirectory = path.join(process.cwd(), 'public');
    fs.writeFile(`${publicDirectory}/${filename}.xml`, xml, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Success!');
    });
}

function generateMasterFeed() {
    console.log('Generating feed rss...');
    const posts = getSortedPostsData();
    writeRss(posts, 'rss');
}

function generateClojureFeed() {
    console.log('Generating clojure feed rss...');
    const tagPosts = getPostsByTag('clojure');
    writeRss(tagPosts.posts, 'clojure');
}

function generateFeeds() {
    generateMasterFeed();
    generateClojureFeed();
}

generateFeeds();
