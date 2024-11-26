import React, { useState } from 'react';
import '../styles/PromoProduct.css'; // Import CSS
const productData = [
  {
    id: 1,
    name: 'Thức ăn cho chó',
    description: 'Thức ăn hạt dinh dưỡng dành cho chó mọi lứa tuổi.',
    price: 150000,
    discount: 10,
    imageUrl: 'https://alltop.vn/backend/media/images/posts/695/THUC_AN_HAT_MEM_CHO_CON_ZENITH-99776.png'
  },
  {
    id: 2,
    name: 'Áo cho thú cưng',
    description: 'Áo len ấm áp cho thú cưng vào mùa đông.',
    price: 250000,
    discount: 15,
    imageUrl: 'https://cdn.tgdd.vn/Files/2021/04/23/1345728/top-10-thuc-an-hat-cho-meo-tot-nhat-hien-nay-202104231500458713.jpg'
  },
  {
    id: 3,
    name: 'Vòng cổ phát sáng',
    description: 'Vòng cổ phát sáng giúp thú cưng an toàn khi đi vào buổi tối.',
    price: 50000,
    discount: 5,
    imageUrl: 'https://cf.shopee.vn/file/2d7aecc4012d3b3562ff88cf96320682'
  },
];

const PromoProducts = () => {
  const [products] = useState(productData);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <a href="/promo" className="list-group-item list-group-item-action active">
              Khuyến mãi
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              Thức ăn cho thú cưng
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              Phụ kiện
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              Dịch vụ thú y
            </a>
          </div>
        </div>

        {/* Nội dung sản phẩm */}
        <div className="col-md-9">
          {selectedProduct ? (
            <div className="product-detail">
              <h2>Chi tiết sản phẩm: {selectedProduct.name}</h2>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="img-fluid"
              />
              <p>{selectedProduct.description}</p>
              <p>
                <strong>Giá gốc:</strong>{' '}
                <span style={{ textDecoration: 'line-through' }}>
                  {selectedProduct.price.toLocaleString()} VND
                </span>
              </p>
              <p>
                <strong>Giá khuyến mãi:</strong>{' '}
                {(selectedProduct.price * (1 - selectedProduct.discount / 100)).toLocaleString()} VND
              </p>
              <button
                className="btn btn-success"
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Thêm vào giỏ hàng
              </button>
              <button
                className="btn btn-secondary ml-3"
                onClick={() => setSelectedProduct(null)}
              >
                Quay lại danh sách
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-center mb-4">Sản Phẩm Khuyến Mãi</h2>
              <div className="row">
                {products.map((product) => (
                  <div className="col-md-4" key={product.id}>
                    <div className="card mb-4">
                      <img
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">
                          <strong>Giá khuyến mãi: </strong>
                          {(product.price * (1 - product.discount / 100)).toLocaleString()} VND
                        </p>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleViewDetails(product)}
                        >
                          Xem chi tiết
                        </button>
                        <button
                          className="btn btn-success ml-2"
                          onClick={() => handleAddToCart(product)}
                        >
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoProducts;
