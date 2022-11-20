import { Routes, Route } from "react-router-dom";

/**********************************************
 * PAGES
 **********************************************/
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

/**********************************************
 * COMPONENTS/LAYOUTS
 **********************************************/
// import MainNavigation from "./components/layout/MainNavigation"; // Moved to components > Layout.js
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-metup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
