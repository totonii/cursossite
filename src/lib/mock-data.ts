import { Course } from './types';

export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Introdução ao React',
    description: 'Aprenda os fundamentos do React, a biblioteca JavaScript mais popular para criar interfaces de usuário.',
    instructor: 'Júlia Lopes',
    category: 'Desenvolvimento Web',
    imageUrl: 'https://via.placeholder.com/400x225.png?text=React',
  },
  {
    id: 2,
    title: 'Next.js para Iniciantes',
    description: 'Leve suas habilidades em React para o próximo nível com o framework Next.js.',
    instructor: 'Marcos Silva',
    category: 'Desenvolvimento Web',
    imageUrl: 'https://via.placeholder.com/400x225.png?text=Next.js',
  },
  {
    id: 3,
    title: 'Design de UI/UX Moderno',
    description: 'Crie interfaces bonitas e funcionais que os usuários vão adorar.',
    instructor: 'Ana Pereira',
    category: 'Design',
    imageUrl: 'https://via.placeholder.com/400x225.png?text=UI/UX',
  },
  {
    id: 4,
    title: 'Fundamentos de Node.js',
    description: 'Construa aplicações de backend rápidas e escaláveis com Node.js e Express.',
    instructor: 'Carlos Souza',
    category: 'Desenvolvimento Web',
    imageUrl: 'https://via.placeholder.com/400x225.png?text=Node.js',
  },
];
