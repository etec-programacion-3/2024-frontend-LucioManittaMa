import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-green-600">
              Mi Tienda
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </Link>

            {user ? (
              <>
                {user.rol === 'admin' && (
                  <Link
                    to="/admin/productos"
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Administrar Productos
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Cerrar Sesión
                </button>
                <span className="text-gray-700 px-3 py-2 text-sm font-medium">
                  {user.nombre}
                </span>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="bg-green-600 text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
} 