import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Favorite from "./pages/Favorite/Favorite";
import { AppProvider } from "./context/AppContext";
import AddMovie from "./pages/Admin/AddMovie";
import UserMovieDetails from "./pages/Details/MovieDetails";
import AdminMovieDetails from "./pages/Admin/AdminMovieDetails";
import MovieList from "./pages/Admin/AdminMovieList";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/details/:id" element={<UserMovieDetails />} />
          <Route path="/profile" element={<Profile />} />
          {/* admin route */}
          <Route path="/adm-list" element={<MovieList />} />
          <Route path="/adm-details/:id" element={<AdminMovieDetails />} />
          <Route path="/adm-add" element={<AddMovie />} />
        </Routes>
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
