export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Plataforma de Cursos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
