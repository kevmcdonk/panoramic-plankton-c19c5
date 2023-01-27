const Feed = require('feed').Feed;
const markdown = require('markdown').markdown;
const fs = require('fs');
const config = require('../../content/data/site.json');
const header = require('../../content/data/header.json');
const path = require('path');
import matter from 'gray-matter';

import { getPages } from './getPages';

function generateRssFeed() {
    console.log('Generating feed');
    /*if (process.env.NODE_ENV === 'development') {
    return;
  }*/

    const baseUrl = config.domain;
    const date = new Date();
    const author = {
        name: config.author,
        link: config.authorTwitter
    };

    const feed = new Feed({
        title: header.title,
        description: header.tagline,
        id: config.domain,
        link: 'https://www.mcd79.com',
        language: 'en',
        image: `https://www.mcd79.com/images/KMcDonnell-Square-BW%20conv.jpeg`,
        favicon: `${config.domain}/favicon.ico`,
        copyright: `All rights reserved ${date.getFullYear()}, Kevin McDonnell`,
        updated: date,
        generator: 'Next.js using Feed for Node.js',
        ttl: 60,
        feedLinks: {
            rss2: `${baseUrl}/rss/index.xml`,
            json: `${baseUrl}/rss/feed.json`,
            atom: `${baseUrl}/rss/atom.xml`
        },
        author
    });

    const getAllFiles = function (dirPath, arrayOfFiles) {
        let files = fs.readdirSync(dirPath);

        arrayOfFiles = arrayOfFiles || [];

        files.forEach(function (file) {
            console.log(file);
            if (fs.statSync(dirPath + '/' + file).isDirectory()) {
                arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
            } else {
                arrayOfFiles.push(path.join(dirPath, '/', file));
            }
        });

        return arrayOfFiles;
    };

    // const posts = getPages(this.props.posts, '/posts');

    const DIR = path.join(process.cwd(), 'content', 'pages').replace('C:', 'C:');
    const topLevelFiles = fs.readdirSync(DIR).filter((file) => file.endsWith('.md'));

    console.log('Here is the dirPath');
    console.log(DIR);

    const allFiles = getAllFiles(DIR);

    const postsData = allFiles.map((file) => {
        // grab the metadata
        if (file.includes('\\pages\\2')) {
            console.log('file found: ' + file);
            const contents = fs.readFileSync(file, 'utf8');
            const matterResult = matter(contents);

            const matterResponse = {
                file,
                title: matterResult.data.title,
                description: matterResult.data.description,
                date: matterResult.data.date,
                content: matterResult.content
            };
            return matterResponse;
        }
    });

    console.log(postsData);

    postsData.forEach((post) => {
        if (post != undefined) {
            const url = `${baseUrl}/${post.slug}`;
            feed.addItem({
                title: post.title,
                id: url,
                link: url,
                description: post.description,
                content: markdown.toHTML(post.content),
                author: 'Kevin McDonnell',
                contributor: 'Kevin McDonnell',
                date: new Date(post.date)
            });
        }
    });

    fs.mkdirSync('./public/rss', { recursive: true });
    fs.writeFileSync('./public/rss/index.xml', feed.rss2());
    fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
    fs.writeFileSync('./public/rss/feed.json', feed.json1());
    console.log('generated feed');
}

export default generateRssFeed;
