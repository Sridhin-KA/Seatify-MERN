import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, logout } from "./features/auth/authSlice";
import { useGetMeQuery } from "./features/auth/authApiSlice";

function App() {
  const dispatch = useDispatch();

  const { data, isSuccess, isError, isLoading } = useGetMeQuery();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data.user));
    }

    if (isError) {
      dispatch(logout());
    }
  }, [isSuccess, isError, data, dispatch]);

  return (
    <>
      <Header />

      <main className="min-h-screen p-4">
        {isLoading ? (
          <div className="text-center mt-10">Checking auth...</div>
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;