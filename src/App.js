import { Route, Routes} from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import Shop from './pages/product/Shop';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';

import ProductList from './pages/product/ProductList';



function App () {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* <Route index element={<Home />} />     */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/productList" element={<ProductList />} />s
      </Route>
    </Routes>

  );
}

export default App;
