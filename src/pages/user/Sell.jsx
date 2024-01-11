import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import moment from 'moment';
import { useRecoilValue } from 'recoil';

// import SubIntroSingle from '@components/SubIntroSingle';
import { loginState } from '../../recoils/login';
import SubIntroSingle from '../../components/SubIntroSingle';

function ProductList() {
  const navigate = useNavigate();

  const user = useRecoilValue(loginState);
  if (user?.id === '' && user?.email === '') navigate('/login');

  const [productList, setProductList] = useState({ no: '', size: '', total: '', products: [] });

  const getProductList = useCallback(async (no = 1, size = 5) => {
    try {
      const resp = await axios.get('http://localhost:8000/products/', { params: { no, size } });
      setProductList(resp.data.list);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getProductList(1, 10);
  }, [getProductList]);

  return (
    <main id="main">
      <SubIntroSingle title="상품 목록" sub="Product List" pathName="ProductList"></SubIntroSingle>

    <h1>안보여</h1>
    <h1>안보여</h1>
    <h1>안보여</h1>
    <h1>안보여</h1>
    <h1>안보여</h1>
    <h1>안보여</h1>

      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>가입일</th>
                    <th>변경일</th>
                  </tr>
                </thead>
                <tbody>
                  {productList?.products?.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td><Link to={"/productDetail/" + product.id}>{product.email}</Link></td>
                      <td>{product.cellphone}</td>
                      <td>{product.address} {product.addressDetail}</td>
                      {/* <td>{moment(product.createdAt).format('YYYY-MM-DD hh:mm:ss')}</td>
                      <td>{moment(product.updatedAt).format('YYYY-MM-DD hh:mm:ss')}</td> */}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={7} className="text-end">
                      <button className="btn btn-outline-secondary" onClick={() => navigate('/addProduct')}>ADD</button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default ProductList;

ProductList.defaultProps = {
  sub: ''
};
