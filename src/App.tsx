
import {  Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Ecommerce from './Component/Ecommerce';
import ProductDetail from './Component/ProductDetail'
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
      </Routes>
      </>
  );
};

export default App;

