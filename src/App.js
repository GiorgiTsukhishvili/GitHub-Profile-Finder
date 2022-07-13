import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SingleUser from "./pages/SingleUser";
import { GithubProvider } from "./context/GithubContext";

function App() {
  return (
    <GithubProvider>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userLogin" element={<SingleUser />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </GithubProvider>
  );
}

export default App;
