import { Route, Routes} from 'react-router-dom';

import Layout from './components/Layout';
import Layout2 from './components/Layout2';


import Home from './pages/Home';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';
import Sell from './pages/user/Sell';

import Shop from './pages/product/Shop';
import ProductList from './pages/product/ProductList';
import ProductList2 from './pages/product/ProductList2';
import ProductDetail from './pages/product/ProductDetail';
import ProductUpdate from './pages/product/ProductUpdate';




import ProductRegister from './pages/product/ProductRegister';
import { ProductProvider } from './pages/product/ProductContext';



function App () {
  return (
  <ProductProvider> 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productList2" element={<ProductList2 />} />
        <Route path="/procut-detail/:id" element={<ProductDetail />} />
        <Route path="/product-update/" element={<ProductUpdate />} />
        <Route path="/sell" element={<Sell />} />

      </Route>

      <Route path="/" element={<Layout2 />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product-register" element={<ProductRegister />} />

      </Route> 
    </Routes>
</ProductProvider>
  );
}

export default App;
