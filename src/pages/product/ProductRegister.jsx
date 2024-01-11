import React, { useEffect, useState } from 'react';

function ProductRegistration() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productBarcode, setProductBarcode] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [productDiscount, setProductDiscount] = useState('');
  const [productExpiration, setProductExpiration] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [submittedProduct, setSubmittedProduct] = useState('');

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  const saveProductsToLocalStorage = (updatedProducts) => {
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleProductRegistration = (e) => {
    e.preventDefault();


    const newProduct = {
      id: productId,
      name: productName,
      price: productPrice,
      barcode: productBarcode,
      description: productDescription,
      image: productImage,
      discount: productDiscount,
      expiration: productExpiration,
      finalPrice: finalPrice,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);

    setSubmittedProduct(newProduct);

    // 등록 후 초기화
    setProductName('');
    setProductPrice('');
    setProductBarcode('');
    setProductDescription('');
    setProductImage('');
    setProductDiscount('');
    setProductExpiration('');
    setFinalPrice('');
  };


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProductImage(URL.createObjectURL(selectedImage));
  };


  const handleCancel = () => {
    window.location.href = '/shop';
  };

  const handleComfirm = () => {
  if (!productName.trim()) {
    return; // 제품명이 비어있으면 아무 동작도 하지 않음
  }

    const newProduct = {
      id: productId,
      name: productName,
      price: productPrice,
      barcode: productBarcode,
      description: productDescription,
      image: productImage,
      discount: productDiscount,
      expiration: productExpiration,
      finalPrice: finalPrice,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);

    // 등록 후 초기화
    setProductId('');
    setProductName('');
    setProductPrice('');
    setProductBarcode('');
    setProductDescription('');
    setProductImage('');
    setProductDiscount('');
    setProductExpiration('');
    setFinalPrice('');

  // 상품 등록 완료 알림창
  alert('상품이 성공적으로 등록되었습니다.');
};

  return (
    <>
        <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Sell</h1>
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/shop">Shop</a></li>
          <li class="breadcrumb-item active text-white">Sell</li>
        </ol>
      </div>
      <div className="container-fluid py-5 mt-5 d-flex justify-content-center">
        <div className="border p-4" style={{ maxWidth: '800px' }}>
          <div className="row g-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <a href="#">
                  <img
                    src={productImage ? productImage : "img/sale.png"}
                    className="img-fluid mt-3"
                    alt="Product"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </a>
              </div>

              <form className="mt-3" style={{ width: '100%' }}>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <label htmlFor="fileInput" className="btn btn-light border p-4" style={{ marginLeft: '32px', width: '83%', border: 'none' }}>
                      상품 이미지 등록
                      <input
                        type="file"
                        id="fileInput"
                        className="form-control-file"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="jumbotron">
                <div className="container">
                  <h3 className="display-5">할인 상품 등록</h3>
                </div>
              </div>
              <div className="container" style={{ border: 'none' }}>
                <form name="newProduct" onSubmit={handleProductRegistration} className="form-horizontal">
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">상품명</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    {/* <label className="col-sm-4 col-form-label">상품ID</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        className="form-control"
                      />
                    </div> */}
                    <label className="col-sm-4 col-form-label">정가</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <label className="col-sm-4 col-form-label">할인율</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        value={productDiscount}
                        onChange={(e) => setProductDiscount(e.target.value)}
                        className="form-control"
                        placeholder="0%"
                      />
                    </div>
                    <label className="col-sm-4 col-form-label">바코드 번호</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        value={productBarcode}
                        onChange={(e) => setProductBarcode(e.target.value)}
                        className="form-control"
                        placeholder="0000-0000-0000-0000"
                      />
                    </div>
                    <label className="col-sm-4 col-form-label">유효기간</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        value={productExpiration}
                        onChange={(e) => setProductExpiration(e.target.value)}
                        className="form-control"
                        placeholder="2024-01-19"
                      />
                    </div>
                    <label className="col-sm-4 col-form-label">설명</label>
                    <div className="col-sm-8">
                      <textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="상품설명, 할인이유, 주의사항 등"
                      ></textarea>
                    </div>
                    <label className="col-sm-4 col-form-label">판매금액</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        value={finalPrice}
                        onChange={(e) => setFinalPrice(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

                <div className="row g-4 text-center align-items-center justify-content-center pt-4">

                  <button
                    type="submit"
                    className="btn border-primary py-3 px-4 text-uppercase text-primary"
                    style={{ marginBottom:'40px', width: '6%' }}
                    onClick={handleCancel}
                  >
                    취소
                  </button>

                  <button
                    type="submit"
                    className="btn border-secondary py-3 px-4 text-uppercase text-primary"
                    style={{  marginLeft: '20px', marginBottom:'40px', width: '6%'}}
                    onClick={handleComfirm}>
                    확인
                  </button>
                </div>
 
          </>


  );
}

export default ProductRegistration;

