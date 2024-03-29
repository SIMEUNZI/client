import React from 'react';
import PRbutton from '../../components/products/PRbutton';
import HeartIcon from '../../components/products/HeartIcon';
import '../../fruitables-1.0.0/css/style.css';

import { useProductContext } from './ProductContext';
import { Link } from 'react-router-dom';


function Shop() {
    const { products } = useProductContext();

  return (
        <div>

        {/* <!-- Single Page Header heartt --> */}
        <div class="container-fluid page-header py-5">
            <h1 class="text-center text-white display-6">Shop</h1>
            <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active text-white">Shop</li>
                <li class="breadcrumb-item"><a href="#">Sell</a></li>

            </ol>
        </div>
        {/* <!-- Single Page Header End --> */}


        {/* <!-- Fruits Shop heartt--> */}
        <div class="container-fluid fruite py-5">
            <div class="container py-5">
                <h1 class="mb-4">Gift shop</h1>
                <div class="row g-4">
                    <div class="col-lg-12">
                        <div class="row g-4">
                            <div class="col-xl-3">
                                 <PRbutton />      {/* 상품등록 버튼 */}
                            </div>
                            <div class="col-6"> 
                                <div class="input-group w-100 mx-auto d-flex">
                                    <input type="search" class="form-control p-3" placeholder="찾으시는 상품명을 입력해주세요!" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
                                </div>
                            </div>
                            <div class="col-xl-3">
                                <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                    <label for="fruits">Default Sorting:</label>
                                    <select id="fruits" name="fruitlist" class="border-0 form-select-sm bg-light me-3" form="fruitform">
                                        <option value="volvo">최신순</option>
                                        <option value="saab">등록순</option>
                                        <option value="opel">조회순</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4">
                            <div class="col-lg-3">
                                <div class="row g-4">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <h4>가격대별</h4>
                                            <ul class="list-unstyled fruite-categorie">
                                                <li>
                                                    <div class="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i class="fas fa-apple-alt me-2"></i>10,000 Point</a>
                                                        <span>(3)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i class="fas fa-apple-alt me-2"></i>20,000 Point</a>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i class="fas fa-apple-alt me-2"></i>30,000 Point</a>
                                                        <span>(2)</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <h4 class="mb-3">최근 본 상품</h4>
                                        <div class="d-flex align-items-center justify-content-heartt">
                                            <div class="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                <img src="img/best3.jpg" class="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 class="mb-2">스타벅스</h6>
                                                <div class="d-flex mb-2">
                                                      <HeartIcon />
                                                </div>
                                                <div class="d-flex mb-2">
                                                    <h5 class="fw-bold me-2">2.99 $</h5>
                                                    <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-heartt">
                                            <div class="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                <img src="img/best6.jpg" class="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 class="mb-2">기프트카드 1만원권</h6>
                                                <div class="d-flex mb-2">
                                                     <HeartIcon />
                                                </div>
                                                <div class="d-flex mb-2">
                                                    <h5 class="fw-bold me-2">10 $</h5>
                                                    <h5 class="text-danger text-decoration-line-through">13.5 $</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-heartt">
                                            <div class="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                <img src="img/best2-1.jpg" class="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 class="mb-2">신세계상품권</h6>
                                                <div class="d-flex mb-2">
                                                    <HeartIcon />
                                                </div>
                                                <div class="d-flex mb-2">
                                                    <h5 class="fw-bold me-2">2.99 $</h5>
                                                    <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center my-4">
                                            <a href="#" class="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                                <Link to="/procut-detail/:id" class="col-lg-9">
                                <div>
                                <div className="row g-4 justify-content-center">
                                {products.map((product, index) => (
                                    <div key={index} className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                        <div className="fruite-img border border-lightgray">
                                        {/* 이미지 표시 */}
                                        <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className="p-4 border border-lightgray border-top-0 rounded-bottom">
                                        {/* 상품 정보 표시 */}
                                        <h4>{product.name}</h4>
                                        {/* <p><small>{product.description}</small></p> */}
                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                            <p className="text-dark fs-5 fw-bold mb-0">{product.finalPrice} P</p>
                                            <a href="#" className="btn border border-secondary rounded-pill px-3">
                                            <i className="me-2 text-primary"><HeartIcon /> 구입하기</i>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                                    </div>
                                    </div>
                                </Link>
                                    <div class="col-12">
                                        <div class="pagination d-flex justify-content-center mt-5">
                                            <a href="#" class="rounded">&laquo;</a>
                                            <a href="#" class="active rounded">1</a>
                                            <a href="#" class="rounded">2</a>
                                            <a href="#" class="rounded">3</a>
                                            <a href="#" class="rounded">4</a>
                                            <a href="#" class="rounded">5</a>
                                            <a href="#" class="rounded">&raquo;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 )
};

export default Shop;