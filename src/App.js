import {Route, Routes} from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import ProductList from './pages/product/ProductList';
import Shop from './pages/product/Shop';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />    
        <Route path="home" element={<Home />} />
        <Route path="productList" element={<ProductList />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


  </Routes>
  );
}

export default App;
