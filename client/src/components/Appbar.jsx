import { Link } from 'react-router-dom';

export default function Appbar() {
  return (
    <header className="fixed top-0 w-full bg-gray-500 text-white z-50">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold">
          CourseListing
        </Link>
        <ul className="flex gap-5">
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </ul>
      </div>
    </header>
  );
}