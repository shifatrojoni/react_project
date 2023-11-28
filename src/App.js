import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import AboutPage from './Pages/About';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Info from './Components/Info';
import ContactPage from './Pages/ContactPage';
import MedicinePages from './Pages/MedicinePages';
import NewsPage from './Pages/NewsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/medicine' element={<MedicinePages />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Info />
      <Footer />
      </BrowserRouter>

      
    </>
  );
}

export default App;