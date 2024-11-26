
const User = require('../models/Users.js');

exports.getAllUsers = (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;

    User.getAllUsers(limit, offset, (err, users) => {
        if (err) {
            res.status(500).send({ message: "Lỗi khi tải danh sách người dùng" });
        } else {
            User.getUserCount((err, count) => {
                if (err) {
                    res.status(500).send({ message: "Lỗi khi tải số lượng người dùng" });
                } else {
                    res.send({
                        users,
                        totalUsers: count,
                        totalPages: Math.ceil(count / limit),
                        currentPage: page
                    });
                }
            });
        }
    });
};

exports.updateUserStatus = (req, res) => {
    const { user_id } = req.params;
    const { status } = req.body;

    User.updateUserStatus(user_id, status, (err, data) => {
        if (err) res.status(500).send({ message: "Lỗi khi cập nhật trạng thái người dùng" });
        else res.send({ message: 'Cập nhật trạng thái thành công' });
    });
};
