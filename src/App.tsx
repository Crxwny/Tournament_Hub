import { Route, Routes } from "react-router-dom";
import { ConfigBanner } from "./components/ConfigBanner";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";


export function App() {
  return (
    <>
      <ConfigBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="*"
          element={
            <main className="container">
              <h1>Page not found</h1>
            </main>
          }
        />
      </Routes>
      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tournament Hub</p>
        </div>
      </footer>
    </>
  );
}
