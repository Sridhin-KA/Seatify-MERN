import { useState } from "react";
import API from "../api/axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password
      });

      dispatch(setCredentials(res.data));

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>

    </form>
  );
}

export default Login;