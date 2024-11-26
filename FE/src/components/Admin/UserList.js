// frontend/src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchUsers = async (pageNumber) => {
        const response = await axios.get(`http://localhost:5000/api/users?page=${pageNumber}&limit=10`);
        setUsers(response.data.users);
        setTotalPages(response.data.totalPages);
    };

    useEffect(() => {
        fetchUsers(page);
    }, [page]);

    const handleStatusChange = async (user_id, newStatus) => {
        await axios.put(`http://localhost:5000/api/users/${user_id}/status`, { status: newStatus });
        fetchUsers(page);
    };

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    return (
        <div className="container mt-5">
            <h2>Danh Sách Người Dùng</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Tên Người Dùng</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                        <th>Địa Chỉ</th>
                        <th>Trạng Thái</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.user_id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone_number}</td>
                            <td>{user.address}</td>
                            <td>
                                <select
                                    value={user.status}
                                    onChange={(e) => handleStatusChange(user.user_id, e.target.value)}
                                    className="form-select form-select-sm"
                                >
                                    <option value="Đang Hoạt Động">Đang Hoạt Động</option>
                                    <option value="Bị Chặn">Bị Chặn</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-center mt-3">
                <button onClick={handlePreviousPage} className="btn btn-primary m-2" disabled={page === 1}>
                    Trang Trước
                </button>
                <span>Trang {page} / {totalPages}</span>
                <button onClick={handleNextPage} className="btn btn-primary m-2" disabled={page === totalPages}>
                    Trang Tiếp
                </button>
            </div>
        </div>
    );
};

export default UserList;
