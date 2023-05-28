import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { posts } from "~/models/posts";
import fs from "fs";
import { marked } from "marked";

const prisma = new PrismaClient();
const readFile = fs.promises.readFile;

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  for (const post of posts) {
    const data = await readFile(`posts/${post.slug}.md`, "utf8");
    const markdown = marked.parse(data);
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        published: post.date,
        slug: post.slug,
        excerpt: post.excerpt,
        caption: post.heroCaption,
        markdown,
      },
      create: {
        title: post.title,
        published: post.date,
        slug: post.slug,
        excerpt: post.excerpt,
        caption: post.heroCaption,
        markdown,
      },
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
