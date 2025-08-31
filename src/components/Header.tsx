import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Plataforma Cursos</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/cursos" className="text-gray-600 hover:text-blue-600">
            Cursos
          </Link>
          <Link href="/como-funciona" className="text-gray-600 hover:text-blue-600">
            Como Funciona
          </Link>
          <Link href="/comunidade" className="text-gray-600 hover:text-blue-600">
            Comunidade
          </Link>
        </nav>
        <div>
          <Link href="/assine" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Assine Agora
          </Link>
        </div>
      </div>
    </header>
  );
}
