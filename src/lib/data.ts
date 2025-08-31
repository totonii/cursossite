import { prisma } from './db';

export async function getCourses() {
  try {
    const courses = await prisma.course.findMany();
    return courses;
  } catch (error) {
    console.error('Database Error:', error);
    // In a real app, you'd want to handle this more gracefully.
    // For now, we'll throw the error to be caught by the caller.
    throw new Error('Failed to fetch courses.');
  }
}
