import React, { useState } from 'react';
import HeartIcon from './HeartIcon';

function ProductDetail() {
  const [showModal, setShowModal] = useState(false);

  const openPaymentModal = () => {
    setShowModal(true);
  };

  const closePaymentModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* 구매하기 버튼 */}
      <p className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary" onClick={openPaymentModal}>
        <i className="me-2 text-primary"><HeartIcon /></i> 구입하기
      </p>

      {/* 결제 모달 */}
      {showModal && (
        <div className="modal" style={{ display: showModal ? 'block' : 'none'}}>
          <div className="modal-content p-0">
            <span className="close" onClick={closePaymentModal}>&times;</span>

            <div className="container" style={{marginBottom: '30px'}} >
              <div className="row g-4 justify-content-center">
                <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4 bg-light rounded p-4">
                  <h1 className="display-6 mb-4">결제 <span className="fw-normal">모드</span></h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">보유 포인트</h5>
                    <p className="mb-0">30,000 P</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">결제 포인트</h5>
                    <div>
                      <p className="mb-0">10,000 P</p>
                    </div>
                  </div>
                      <br />
                  <div className="py-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">잔여 포인트</h5>
                    <p className="mb-0 pe-4">20,000 P</p>
                  </div>
                      <br />
                  <div className="text-center mt-4">
                    <button className="btn border-secondary rounded-pill px-5 py-3 text-primary text-uppercase ml-4" type="button">결제하기</button>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={closePaymentModal} className="btn border-secondary rounded-0 w-100 py-3 text-black text-uppercase" type="button">close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
