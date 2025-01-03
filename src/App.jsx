import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Layout from './Layout';
import Products from './pages/Products';
import { ProductsProvider } from "./usecontext/Product_Context";

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="Mens" element={<Mens />} />
            <Route path="Womens" element={<Womens />} />
            <Route path="Products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  )
}

export default App;
