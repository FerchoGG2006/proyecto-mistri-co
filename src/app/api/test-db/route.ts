import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
    console.log('API Test: Fetching videos...');
    try {
        const videos = await prisma.video.findMany();
        console.log('API Test: Success, found', videos.length, 'videos');
        return NextResponse.json({ success: true, count: videos.length, videos });
    } catch (error: any) {
        console.error('API Test: Error', error.message);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
