import { useEffect, useState } from "react";
import API from "../api/axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { useLoginMutation } from "../features/auth/authSlice";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const location = useLocation();
  const [login,{isLoading}] = useLoginMutation();

  const {userinfo} = useSelector((state) => state.auth);

  const {search} = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get("redirect") || "/";

  useEffect(() => {
    if(userinfo){
      navigate(redirect);
    }
  },[navigate,userinfo,redirect])


  // 👇 where user came from
 // const from = location.state?.from?.pathname || "/";
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await login({email,password}).unwrap();

      dispatch(setCredentials({...res}));
      navigate(redirect);
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          disabled={isLoading}>
            Login
          </button>
          {isLoading && <Loader />}

        </form>

        {/* 🔗 Register Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;