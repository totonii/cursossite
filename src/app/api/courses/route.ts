import { NextResponse } from 'next/server';
import { getCourses } from '@/lib/data';

export async function GET() {
  try {
    const courses = await getCourses();
    return NextResponse.json(courses);
  } catch (error) {
    console.error('[API_COURSES_GET]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
