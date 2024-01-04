import React from 'react';
import { Link } from 'react-router-dom';

function Middle() {
  const topLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '2px', 
    top: '0',
    right: '25%'
  };

  return (

      <div>

  {/* <!-- Featurs Start --> */}
        {/* <h1 class="mb-6">할인 탑3</h1> */}
        <div class="container-fluid service py-5">
            <div class="container py-5">
                <div class="row g-4 justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <Link href="#">
                            <div class="service-item bg-secondary rounded border border-secondary">
                                <img src="img/best1.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="px-4 rounded-bottom">
                                    <div class="service-content bg-primary text-center p-4 rounded">
                                        <h5 class="text-white">Fresh Apples</h5>
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
                                        <h3 class="mb-0">8,000 <sub>Point</sub></h3>신세계백화점
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
                                        <h5 class="text-white"><small>아메리카노 + 카스테라</small></h5>
                                        <h3 class="mb-0">10,000 <sub>Point</sub> </h3>스타벅스
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Featurs End --> */}
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
                                        <h5 class="text-white">Fresh Apples</h5>
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
                                        <h3 class="mb-0">8,000 원</h3>
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
                                        <h3 class="mb-0">10,000 원 </h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Featurs End --> */}

  </div>
  )
};

export default Middle;
