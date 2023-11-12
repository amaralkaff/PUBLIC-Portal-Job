// src/components/layout/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-5 flex justify-between items-center">
      <Link to="/" className="text-white">
      <h1 className="text-xl">Job Portal</h1>
      </Link>
      <nav>
        <Link to="/jobs" className="text-white mr-4 hover:text-gray-300">
          Jobs
        </Link>
      </nav>
        <Link to="/login" className="text-white mr-4 hover:text-gray-300">
          Login
        </Link>
    </header>
  );
};

export default Header;
