const promotionModel = require('../models/promotion');

exports.getPromotions = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  promotionModel.getTotalPromotions((err, countResult) => {
    if (err) throw err;

    const total = countResult[0].total;
    promotionModel.getPromotions(limit, offset, (err, result) => {
      if (err) throw err;
      res.json({
        data: result,
        total,
        page,
        pages: Math.ceil(total / limit),
        message: 'Lấy danh sách khuyến mãi thành công!',
      });
    });
  });
};

exports.createPromotion = (req, res) => {
  const data = req.body;
  promotionModel.createPromotion(data, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Thêm khuyến mãi thành công!', id: result.insertId });
  });
};

exports.updatePromotion = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  promotionModel.updatePromotion(id, data, (err) => {
    if (err) throw err;
    res.json({ message: 'Cập nhật khuyến mãi thành công!' });
  });
};

exports.deletePromotion = (req, res) => {
  const { id } = req.params;
  promotionModel.deletePromotion(id, (err) => {
    if (err) throw err;
    res.json({ message: 'Xóa khuyến mãi thành công!' });
  });
};
