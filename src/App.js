import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Admin from './pages/Admin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
