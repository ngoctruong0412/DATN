import React from 'react';

const Pagination = ({ page, setPage }) => {
    const handlePrevious = () => setPage(page > 1 ? page - 1 : 1);
    const handleNext = () => setPage(page + 1);

    return (
        <div className="d-flex justify-content-center mt-3">
            <button onClick={handlePrevious} className="btn btn-primary m-2">Trang Trước</button>
            <span>Trang {page}</span>
            <button onClick={handleNext} className="btn btn-primary m-2">Trang Tiếp</button>
        </div>
    );
};

export default Pagination;
