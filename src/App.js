import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Navibar from './Components/Navibar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home/Home';
import { Favorites } from './Pages/Favorites/Favorites';
import { Catalog } from './Pages/Catalog/Catalog';
import { MangaDescriptionPage } from './Pages/Manga/Manga';

function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/manga/:mangaId" element={<MangaDescriptionPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
