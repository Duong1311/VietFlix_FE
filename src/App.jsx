import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Favorite from "./pages/Favorite/Favorite";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
