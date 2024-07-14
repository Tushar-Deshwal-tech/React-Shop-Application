import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_page from '../pages/Landing_page';
import Mens from '../pages/Mens';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing_page />} />
          <Route path="Mens" element={<Mens />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
