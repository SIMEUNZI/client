import React from 'react'
// import Layout from '../components/Layout';
import Middle from '../components/Middle';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Layout from '../components/Layout';

// import ProductList from './product/ProductList';

function Home() {
  return (
    <>
      <Header />
      {/* <Layout /> */}
      <Middle />
      <Footer />
    </>
  )
}

export default Home;


// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/productList');
//   };

//   return (
//     <div>
//       <h1>홈 화면</h1>
//       <button onClick={handleClick}>Product List로 이동</button>
//     </div>
//   );
// }

// export default Home;