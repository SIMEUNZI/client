import React, { useEffect, useState } from 'react';

function ProductRegistration() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productBarcode, setProductBarcode] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [products, setProducts] = useState([]);

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
      name: productName,
      price: productPrice,
      barcode: productBarcode,
      description: productDescription,
      image: productImage,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToLocalStorage(updatedProducts);

    setProductName('');
    setProductPrice('');
    setProductBarcode('');
    setProductDescription('');
    setProductImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProductImage(URL.createObjectURL(selectedImage));
  };
  return (
    <div>
      <h2>상품 등록</h2>
      <h2>상품 등록</h2>
      <h2>상품 등록</h2>
      <h2>상품 등록</h2>
      <h2>상품 등록</h2>

      <form onSubmit={handleProductRegistration}>
        <div>
          <label>상품명:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label>상품 가격:</label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div>
          <label>바코드 번호:</label>
          <input
            type="text"
            value={productBarcode}
            onChange={(e) => setProductBarcode(e.target.value)}
          />
        </div>
        <div>
          <label>상품 설명:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>이미지 업로드:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>
        <button type="submit">등록</button>
      </form>

      {/* 등록된 상품 목록 */}
    <div>
      <h2>상품 목록</h2>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            {products.map((product, index) => (
              <div className="col-md-6 col-lg-6 col-xl-4" key={index}>
                <div className="rounded position-relative fruite-item">
                  <div className="fruite-img">
                    <img src={product.image} className="img-fluid w-100 rounded-top" alt={product.name} />
                  </div>
                  <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">P {product.price}</p>
                      <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                        <i className="me-2 text-primary"></i>구매하기
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}
export default ProductRegistration;
