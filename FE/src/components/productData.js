const ProductData = [
    {
        id: 1,
        Title: 'Sản phẩm A',
        Price: 500000, // Giá dưới dạng số
        Description: 'Mô tả sản phẩm A',
        img: '/images/productA.jpg',
        images: [
            '/images/productA.jpg',
            '/images/productA-1.jpg',
            '/images/productA-2.jpg',
        ],
        Category: 'Thời trang', // Thêm danh mục
        Stock: 10, // Số lượng tồn kho
    },
    {
        id: 2,
        Title: 'Sản phẩm B',
        Price: 700000,
        Description: 'Mô tả sản phẩm B',
        img: '/images/productB.jpg',
        images: [
            '/images/productB.jpg',
            '/images/productB-1.jpg',
            '/images/productB-2.jpg',
        ],
        Category: 'Phụ kiện',
        Stock: 5,
    },
];

export default ProductData;
