import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>

      <h2>BookMyShow</h2>

      <Link to="/">Home</Link>

      <Link to="/movies">Movies</Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>

    </div>
  );
}

export default Navbar;