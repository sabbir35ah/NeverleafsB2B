import './styles/base.css'
import AnnouncementBar from './component/AnnouncementBar';
import Header from './component/Header';
import BtobFooter from './component/BtobFooter';
import HomePage from './pages/home/HomePage';
function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <HomePage />
      <BtobFooter />
    </>
  )
}

export default App
