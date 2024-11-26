const db = require('../config/db');

// Hàm lấy danh sách orders
exports.getOrders = (req, res) => {
    const query = 'SELECT * FROM orders';
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching orders:", err);
            return res.status(500).json({ message: "Error retrieving orders" });
        }
        console.log("Orders retrieved:", results);
        res.json(results);
    });
};
