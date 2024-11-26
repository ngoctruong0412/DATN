// src/CategoryList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Table, Pagination } from 'react-bootstrap';

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [editId, setEditId] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchCategories(page);
    }, [page]);

    const fetchCategories = async (page) => {
        const response = await axios.get(`http://localhost:5000/api/categories?page=${page}`);
        setCategories(response.data);
    };

    const handleShow = (cate_id = null, name = '') => {
        setEditId(cate_id);
        setName(name);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setName('');
    };

    const handleSave = async () => {
        if (editId) {
            await axios.put(`http://localhost:5000/api/categories/${editId}`, { name });
        } else {
            await axios.post(`http://localhost:5000/api/categories`, { name });
        }
        handleClose();
        fetchCategories(page);
    };

    const handleDelete = async (cate_id) => {
        await axios.delete(`http://localhost:5000/api/categories/${cate_id}`);
        fetchCategories(page);
    };

    return (
        <div className="container mt-4">
            <h1>Quản Lý Danh Mục</h1>
            <Button variant="primary" onClick={() => handleShow()}>Thêm Danh Mục</Button>

            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên Danh Mục</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={category.cate_id}>
                            <td>{index + 1 + (page - 1) * 10}</td>
                            <td>{category.name}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleShow(category.cate_id, category.name)}>Sửa</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(category.cate_id)}>Xóa</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Pagination>
                <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 1} />
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Next onClick={() => setPage(page + 1)} />
            </Pagination>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editId ? 'Sửa Danh Mục' : 'Thêm Danh Mục'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="categoryName">
                            <Form.Label>Tên Danh Mục</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên danh mục"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Đóng</Button>
                    <Button variant="primary" onClick={handleSave}>Lưu</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CategoryList;
