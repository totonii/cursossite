import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Seção de Chamada para Ação (CTA) */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Sua jornada de aprendizado começa aqui.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Acesso ilimitado a todos os nossos cursos por um preço único. Aprenda no seu ritmo.
        </p>
        <Link
          href="/assine"
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300"
        >
          Assine Agora por R$ 100,00/mês
        </Link>
      </section>

      {/* Seção de Listagem de Cursos */}
      <CourseList />

      {/* Futuras seções (Depoimentos) podem ser adicionadas aqui */}
    </div>
  );
}
import CourseList from '@/components/CourseList';
