import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="min-h-screen p-4">
        <Outlet /> {/* ✅ Pages will render here */}
      </main>

      <Footer />
    </>
  );
}

export default App;