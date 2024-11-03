import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/home/index';
import Navbar from './components/navbar/index';
import Karyawan from './pages/karyawan/index';
import Jabatan from './pages/jabatan';
function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/karyawan" element={<Karyawan/>}></Route>
        <Route path="/jabatan" element={<Jabatan/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
