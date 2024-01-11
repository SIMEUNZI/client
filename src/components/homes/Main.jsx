import HeartIcon from '../../components/products/HeartIcon';
import React from 'react';
import { Link } from 'react-router-dom';

function Main() {

  return (
        <>
        {/* <!-- Hero Start --> */}
        <div class="container-fluid py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row g-5 align-items-center">
                    <div class="col-md-12 col-lg-7">
                        <h4 class="mb-3 text-secondary">최대 50% 할인</h4>
                        <h1 class="mb-10 display-3"><sub>기프티콘 혁명,</sub> 캐롯티콘</h1>
                        {/* <div class="position-relative mx-auto">
                            <input class="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search"/>
                            <button type="submit" class="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{top: '0', right: '25%'}}>Submit Now</button>
                        </div> */}
                    </div>
                    <div class="col-md-12 col-lg-5">
                        <div id="carouselId" class="carousel slide position-relative" data-bs-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active rounded">
                                    {/* <img src="img/now.png" alt="First slide"/> */}
                                    {/* <img src="img/50.png" alt="First slide"/> */}
                                    {/* <img src="img/buy (1).png" alt="First slide"/> */}
                            <a href="/shop" class="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</a>
                                    <img src="img/ss.png" alt="First slide"/>
                                    <h4 class="text-primary">지금 바로 구매하세요...!</h4>
                                    {/* <img src="img/sale.png" alt="First slide"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/* <!-- Featurs Start --> */}
        <div class="container-fluid service py-5">
            <div class="container py-5">
                <div class="row g-4 justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <Link href="#">
                            <div class="service-item bg-secondary rounded border border-secondary">
                                <img src="img/best1.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="px-4 rounded-bottom">
                                    <div class="service-content bg-primary text-center p-4 rounded">
                                        <h5 class="text-white">불금치킨+모짜치즈볼+콜라1.25L</h5>
                                        <h3 class="mb-0">20% OFF</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <Link href="#">
                            <div class="service-item bg-dark rounded border border-dark">
                                <img src="img/best2-1.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="px-4 rounded-bottom">
                                    <div class="service-content bg-light text-center p-4 rounded">
                                        <h5 class="text-primary">신세계상품권 교환권</h5>
                                        <h3 class="mb-0">30% OFF</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <Link href="#">
                            <div class="service-item bg-primary rounded border border-primary">
                                <img src="img/best3.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="px-4 rounded-bottom">
                                    <div class="service-content bg-secondary text-center p-4 rounded">
                                        <h5 class="text-white"><small>카페 아메리카노 T 2잔 + 부드러운 생크림 카스텔라</small></h5>
                                        <h3 class="mb-0">20% OFF</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Featurs End --> */}


        {/* <!-- Hero End --> */}
        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="text-center mx-auto mb-5" style={{maxWidth: '700px'}}>
                    <h1 class="display-4 text-secondary">Best Product</h1>
                    <p>좋아요 순위에 따른 이번주 인기 기프티콘 입니다.</p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-6 col-xl-4">
                        <div class="p-4 rounded bg-light">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <img src="img/best1.jpg" class="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="h5">굽네치킨</a>
                                    <div class="d-flex my-3">
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart"></i>
                                    </div>
                                    <h4 class="mb-3">3.12 $</h4>
                                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="me-2 text-primary"><HeartIcon /></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4">
                        <div class="p-4 rounded bg-light">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <img src="img/best4.jpg" class="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="h5">굽네치킨</a>
                                    <div class="d-flex my-3">
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart"></i>
                                    </div>
                                    <h4 class="mb-3">3.12 $</h4>
                                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="me-2 text-primary"><HeartIcon /></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4">
                        <div class="p-4 rounded bg-light">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <img src="img/best5.jpg" class="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="h5">굽네치킨</a>
                                    <div class="d-flex my-3">
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart text-primary"></i>
                                        <i class="fas fa-heart"></i>
                                    </div>
                                    <h4 class="mb-3">3.12 $</h4>
                                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="me-2 text-primary"><HeartIcon /></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4">
                        <div class="p-4 rounded bg-light">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <img src="img/best-product-4.jpg" class="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="h5">Organic Tomato</a>
                                    <div class="d-flex my-3">
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="mb-3">3.12 $</h4>
                                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4">
                        <div class="p-4 rounded bg-light">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <img src="img/best-product-5.jpg" class="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="h5">Organic Tomato</a>
                                    <div class="d-flex my-3">
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="mb-3">3.12 $</h4>
                                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4">
                        <div class="p-4 rounded bg-light">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <img src="img/best-product-6.jpg" class="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div class="col-6">
                                    <a href="#" class="h5">Organic Tomato</a>
                                    <div class="d-flex my-3">
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star text-primary"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="mb-3">3.12 $</h4>
                                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </>
      
  )
};

export default Main;
