'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

// Blog Actions
export async function getPosts() {
    return await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export async function createPost(formData: { title: string; status: string }) {
    const post = await prisma.post.create({
        data: {
            title: formData.title,
            status: formData.status,
            author: 'Admin',
            date: new Date().toISOString().split('T')[0],
            views: 0,
        },
    });
    revalidatePath('/admin/blog');
    return post;
}

export async function updatePost(id: number, formData: { title: string; status: string }) {
    const post = await prisma.post.update({
        where: { id },
        data: {
            title: formData.title,
            status: formData.status,
        },
    });
    revalidatePath('/admin/blog');
    return post;
}

export async function deletePost(id: number) {
    await prisma.post.delete({
        where: { id },
    });
    revalidatePath('/admin/blog');
}

// Settings Actions
export async function getSettings() {
    let settings = await prisma.siteSettings.findUnique({
        where: { id: 1 },
    });

    if (!settings) {
        settings = await prisma.siteSettings.create({
            data: { id: 1 },
        });
    }

    return settings;
}

export async function updateSettings(data: {
    siteName: string;
    description: string;
    contactEmail: string;
    metaTitle: string;
    metaKeywords: string;
}) {
    const settings = await prisma.siteSettings.upsert({
        where: { id: 1 },
        update: data,
        create: { id: 1, ...data },
    });
    revalidatePath('/admin/settings');
    return settings;
}
