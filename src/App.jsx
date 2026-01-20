import './styles/base.css'
import AnnouncementBar from './component/AnnouncementBar';
import Header from './component/Header';
import BtobFooter from './component/BtobFooter';
import HomePage from './pages/home/HomePage';
import ProductPage from './pages/product/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="product-page" element={<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
      <BtobFooter />
    </>
  )
}

export default App
