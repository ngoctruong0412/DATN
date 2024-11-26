import React, { useEffect, useState } from 'react';
import { fetchPromotions, addPromotion, updatePromotion, deletePromotion } from '../services/promotionService';
import PromotionList from './PromotionList';
import PromotionForm from './PromotionForm';

const PromotionManager = () => {
  const [promotions, setPromotions] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [editingPromotion, setEditingPromotion] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    loadPromotions(page);
  }, [page]);

  const loadPromotions = async (page) => {
    const { data, pages } = await fetchPromotions(page);
    setPromotions(data);
    setPages(pages);
  };

  const handleAddOrEdit = async (data) => {
    if (editingPromotion) {
      await updatePromotion(editingPromotion.promo_id, data);
      alert('Cập nhật khuyến mãi thành công!');
    } else {
      await addPromotion(data);
      alert('Thêm khuyến mãi thành công!');
    }
    setEditingPromotion(null);
    setIsFormVisible(false);
    loadPromotions(page);
  };

  const handleEdit = (promotion) => {
    setEditingPromotion(promotion);
    setIsFormVisible(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa khuyến mãi này?')) {
      await deletePromotion(id);
      alert('Xóa khuyến mãi thành công!');
      loadPromotions(page);
    }
  };

  const handleShowForm = () => {
    setEditingPromotion(null);
    setIsFormVisible(true);
  };

  const handleCancel = () => {
    setIsFormVisible(false);
    setEditingPromotion(null);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pages) return;
    setPage(newPage);
  };

  return (
    <div>
      <div className="mb-4">
        <button className="btn btn-success" onClick={handleShowForm}>
          Thêm khuyến mãi
        </button>
      </div>

      {isFormVisible && (
        <div className="card p-3 mb-4">
          <PromotionForm onSubmit={handleAddOrEdit} initialData={editingPromotion} />
          <button className="btn btn-secondary mt-3" onClick={handleCancel}>
            Hủy
          </button>
        </div>
      )}

      <PromotionList promotions={promotions} onEdit={handleEdit} onDelete={handleDelete} />

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Trước
        </button>
        <span className="mx-3">
          Trang {page} / {pages}
        </span>
        <button
          className="btn btn-primary"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === pages}
        >
          Sau
        </button>
      </div>
    </div>
  );
};

export default PromotionManager;
