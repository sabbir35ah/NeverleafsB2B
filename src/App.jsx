import './styles/base.css'
import AnnouncementBar from './component/AnnouncementBar';
import Header from './component/Header';
import BtobFooter from './component/BtobFooter';
import HomePage from './pages/home/HomePage';
import ProductPage from './pages/product/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignUpPage';
import ShoppingCart from './pages/cart-page/Cart';

function App() {
  return (
    <>
      <AnnouncementBar />
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/product-page/:id' element={<ProductPage/>}/>
        <Route path="login-page" element={<LoginPage/>}/>
        <Route path="signup" element={<SignupPage/>}/>
        <Route path="cart" element={<ShoppingCart/>}/>
      </Routes>
      </BrowserRouter>
      <BtobFooter />
    </>
  )
}

export default App
