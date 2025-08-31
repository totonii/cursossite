import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@prisma/client';

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/cursos/${course.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <Image
          src={course.imageUrl}
          alt={`Capa do curso ${course.title}`}
          width={400}
          height={225}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.title}</h3>
          <p className="text-sm text-gray-600">por {course.instructor}</p>
        </div>
      </div>
    </Link>
  );
}
