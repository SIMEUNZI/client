import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilCallback, useRecoilState } from 'recoil';
import { productState } from '../../recoils/product'; // products로 변경
import HeartIcon from '../../components/products/HeartIcon';
import Pay from '../../components/products/Pay';

import { useProductContext } from './ProductContext';
// import './ProductRegister';


function ProductDetail() {
    const { products } = useProductContext();


  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useRecoilState(productState); // 상품 상태

  // Recoil에서 해당 상품 정보 가져오기
  const getProductRecoil = useRecoilCallback(({ set }) => async (id) => {
    try {
      const resp = await axios.get(`http://localhost:8000/products/${id}`); // API로 상품 정보 가져오기
      setProduct(resp.data.product);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    getProductRecoil(id);
  }, [getProductRecoil, id]);



  return (
    <main id="main">
      {/* Single Page Header heartt */}
      <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Shop Detail</h1>
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active text-white">Shop</li>
          <li class="breadcrumb-item"><a href="#">Sell</a></li>
        </ol>
      </div>
      {/* Single Page Header End */}

      {/* Single Product Start */}
      <div class="container-fluid py-5 mt-10">
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-9">
              <div class="row g-12">
                <div class="col-lg-6">
                  <div class="border rounded">
                    <a href="#">
                      <img src="img/single-item.jpg" class="img-fluid rounded" alt="Image" />
                    </a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h4 class="fw-bold mb-3">{product.name}</h4>
                  <p class="mb-3">Category: Vegetables</p>
                  <h5 class="fw-bold mb-3">{product.price}</h5>
                  <div class="d-flex mb-4">
                    <i class="fa fa-star text-secondary"></i>
                    <i class="fa fa-star text-secondary"></i>
                    <i class="fa fa-star text-secondary"></i>
                    <i class="fa fa-star text-secondary"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p class="mb-4">{product.description}</p>
                  <p class="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
                  <div class="input-group quantity mb-5" style={{width: '100px'}}>
                    <div class="input-group-btn">
                      <button class="btn btn-sm btn-minus rounded-circle bg-light border" >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                    <input type="text" class="form-control form-control-sm text-center border-0" value="1" />
                    <div class="input-group-btn">
                      <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  {/* <a href="#" class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i class="me-2 text-primary"><HeartIcon /><Pay /></i> 구입하기</a> */}
                  <Pay />
                </div>
                <div class="col-lg-12">
                  <nav>
                    <div class="nav nav-tabs mb-3">
                      <button class="nav-link active border-white border-bottom-0" type="button" role="tab"
                          id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                          aria-controls="nav-about" aria-selected="true">Description</button>
                      <button class="nav-link border-white border-bottom-0" type="button" role="tab"
                          id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission"
                          aria-controls="nav-mission" aria-selected="false">Reviews</button>
                    </div>
                  </nav>
                  <div class="tab-content mb-5">
                    <div class="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                      <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. 
                        Susp endisse ultricies nisi vel quam suscipit </p>
                      <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic 
                        icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <button className="btn btn-outline-secondary" onClick={() => navigate('/shop')}>목록</button>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
