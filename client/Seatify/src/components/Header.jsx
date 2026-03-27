import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth || {});

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          MyApp
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>

          {user ? (
            <>
              <span className="text-sm text-gray-600">
                Hi, {user.name}
               
              </span>
              <Link
                to="/profile"
                className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
              >
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-blue-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
              >
                Register
              </Link>
            </>
          )}
        </nav>

      </div>
    </header>
  );
};

export default Header;