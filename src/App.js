import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import SearchPage from './pages/SearchPage';
import { Header } from './components/Header';
import RealtorProfilePage from './pages/RealtorProfilePage';
import AppartmentPage from './pages/AppartmentPage';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<FrontPage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/appartment" element={<AppartmentPage/>}/>
      <Route path="/realtor" element={<RealtorProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
