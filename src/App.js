import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import SearchPage from './pages/SearchPage';
import RealtorProfilePage from './pages/RealtorProfilePage';
import AppartmentPage from './pages/AppartmentPage';

function App() {
  return (
    <BrowserRouter>
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
