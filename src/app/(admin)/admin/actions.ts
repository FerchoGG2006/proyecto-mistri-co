'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

// Blog Actions
export async function getPosts() {
    return await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export async function createPost(formData: { title: string; status: string; content?: string }) {
    const post = await prisma.post.create({
        data: {
            title: formData.title,
            status: formData.status,
            content: formData.content,
            author: 'Admin',
            date: new Date().toISOString().split('T')[0],
            views: 0,
        },
    });
    revalidatePath('/admin/blog');
    return post;
}

export async function updatePost(id: number, formData: { title: string; status: string; content?: string }) {
    const post = await prisma.post.update({
        where: { id },
        data: {
            title: formData.title,
            status: formData.status,
            content: formData.content,
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

// Video Actions
export async function getVideos() {
    return await prisma.video.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export async function createVideo(data: { title: string; url: string; category?: string; description?: string }) {
    const video = await prisma.video.create({
        data,
    });
    revalidatePath('/admin/videos');
    return video;
}

export async function updateVideo(id: number, data: { title: string; url: string; category?: string; description?: string }) {
    const video = await prisma.video.update({
        where: { id },
        data,
    });
    revalidatePath('/admin/videos');
    return video;
}

export async function deleteVideo(id: number) {
    await prisma.video.delete({
        where: { id },
    });
    revalidatePath('/admin/videos');
}

// Talk Actions
export async function getTalks() {
    return await prisma.talk.findMany({
        orderBy: { date: 'desc' },
    });
}

export async function createTalk(data: { title: string; date: string; location: string; description?: string; type: string; url?: string }) {
    const talk = await prisma.talk.create({
        data,
    });
    revalidatePath('/admin/charlas');
    return talk;
}

export async function updateTalk(id: number, data: { title: string; date: string; location: string; description?: string; type: string; url?: string }) {
    const talk = await prisma.talk.update({
        where: { id },
        data,
    });
    revalidatePath('/admin/charlas');
    return talk;
}

export async function deleteTalk(id: number) {
    await prisma.talk.delete({
        where: { id },
    });
    revalidatePath('/admin/charlas');
}

// Media Actions
export async function getMedia() {
    return await prisma.media.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export async function createMedia(data: { name: string; url: string; type: string; size?: number }) {
    const media = await prisma.media.create({
        data,
    });
    revalidatePath('/admin/media');
    return media;
}

export async function deleteMedia(id: number) {
    await prisma.media.delete({
        where: { id },
    });
    revalidatePath('/admin/media');
}

// User Actions
export async function getUsers() {
    return await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export async function createUser(data: { name: string; email: string; role: string }) {
    const user = await prisma.user.create({
        data,
    });
    revalidatePath('/admin/users');
    return user;
}

export async function updateUser(id: number, data: { name: string; email: string; role: string }) {
    const user = await prisma.user.update({
        where: { id },
        data,
    });
    revalidatePath('/admin/users');
    return user;
}

export async function deleteUser(id: number) {
    await prisma.user.delete({
        where: { id },
    });
    revalidatePath('/admin/users');
}
