// src/pages/Login.jsx

import { useState } from "react";
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setUser(res.user));
      navigate("/movies"); // redirect after login
    } catch (err) {
 console.log("ERROR:", err);
console.log("ERROR DATA:", err?.data);
console.log("ERROR STATUS:", err?.status);
  alert(err?.data?.message || "Login failed");
}
  };

  return (
    <FormContainer>
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

      <form onSubmit={submitHandler} className="space-y-4">
        
        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

      </form>

      {/* Footer */}
      <p className="text-sm text-center mt-4">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Register
        </span>
      </p>
    </FormContainer>
  );
};

export default Login;