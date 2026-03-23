  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Home from "./pages/Home";
  import Login from "./pages/Login";
  import Register from "./pages/Register";
  import Movies from "./pages/Movies";
  import MovieDetails from "./pages/MovieDetails";
  import PrivateRoute from "./components/PrivateRoute";

  function App() {
    return (
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        
          <Route
          path="/movies"
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
        />

 

          <Route path="/movie/:id" element={<MovieDetails />} />

        </Routes>

      </BrowserRouter>
    );
  }

  export default App;