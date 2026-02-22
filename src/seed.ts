import { PrismaClient } from '@prisma/client';
import { contentES } from './lib/content';

const prisma = new PrismaClient();

async function main() {
    console.log('Migrando datos...');

    // Migrar Posts
    for (const post of contentES.admin.blog.posts) {
        await prisma.post.upsert({
            where: { id: post.id },
            update: {
                title: post.title,
                author: post.author,
                date: post.date,
                status: post.status,
                views: post.views,
                content: post.content || '',
            },
            create: {
                id: post.id,
                title: post.title,
                author: post.author,
                date: post.date,
                status: post.status,
                views: post.views,
                content: post.content || '',
            },
        });
    }

    // Migrar Settings
    await prisma.siteSettings.upsert({
        where: { id: 1 },
        update: {
            siteName: "Mistri & Co",
            description: contentES.titles.home.hero,
        },
        create: {
            id: 1,
            siteName: "Mistri & Co",
            description: contentES.titles.home.hero,
        },
    });

    console.log('Migración completada con éxito.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
