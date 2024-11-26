-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 15, 2024 lúc 04:44 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `petpal`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `nguoidung_id` int(11) NOT NULL,
  `nguoidung_ten` varchar(255) NOT NULL,
  `nguoidung_matkhau` varchar(255) NOT NULL,
  `nguoidung_vaitro` int(11) NOT NULL,
  `nguoidung_trangthai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baiviet`
--

CREATE TABLE `baiviet` (
  `baiviet_id` int(11) NOT NULL,
  `nguoidung_id` int(11) NOT NULL,
  `danhmuc_baiviet_id` int(11) NOT NULL,
  `baiviet_tieude` varchar(255) NOT NULL,
  `baiviet_noidung` varchar(255) NOT NULL,
  `baiviet_ngaytao` date NOT NULL,
  `baiviet_ngaycapnhat` date NOT NULL,
  `baiviet_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

CREATE TABLE `binhluan` (
  `binhluan_id` int(11) NOT NULL,
  `nguoidung_id` int(11) NOT NULL,
  `sanpham_id` int(11) NOT NULL,
  `binhluan_noidung` varchar(255) NOT NULL,
  `binhluan_danhgia` varchar(255) NOT NULL,
  `binhluan_ngay` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan_baiviet`
--

CREATE TABLE `binhluan_baiviet` (
  `binhluan_baiviet_id` int(11) NOT NULL,
  `baiviet_id` int(11) NOT NULL,
  `nguoidung_id` int(11) NOT NULL,
  `binhluan_baiviet_noidung` varchar(255) NOT NULL,
  `binhluan_baiviet_ngay` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietdonhang`
--

CREATE TABLE `chitietdonhang` (
  `chitietdonhang_id` int(11) NOT NULL,
  `donhang_id` int(11) NOT NULL,
  `sanpham_id` int(11) NOT NULL,
  `sanpham_soluong` int(11) NOT NULL,
  `sanpham_gia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `danhmuc_id` int(11) NOT NULL,
  `danhmuc_ten` int(11) NOT NULL,
  `danhmuc_mota` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc_baiviet`
--

CREATE TABLE `danhmuc_baiviet` (
  `danhmuc_baiviet_id` int(11) NOT NULL,
  `danhmuc_baiviet_ten` varchar(255) NOT NULL,
  `danhmuc_baiviet_mota` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dichvu`
--

CREATE TABLE `dichvu` (
  `dichvu_id` int(11) NOT NULL,
  `dichvu_ten` varchar(255) NOT NULL,
  `dichvu_mota` varchar(255) NOT NULL,
  `dichvu_gia` varchar(255) NOT NULL,
  `dichvu_thoigian` datetime NOT NULL,
  `khuyenmai_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `donhang_id` int(11) NOT NULL,
  `nguoidung_id` int(11) NOT NULL,
  `donhang_ngay` date NOT NULL,
  `donhang_tong` varchar(255) NOT NULL,
  `donhang_trangthai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giohang`
--

CREATE TABLE `giohang` (
  `giohang_id` int(11) NOT NULL,
  `nguoidung_id` int(11) NOT NULL,
  `giohang_ngaytao` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giohangchitiet`
--

CREATE TABLE `giohangchitiet` (
  `giohangchitiet_id` int(11) NOT NULL,
  `giohang_id` int(11) NOT NULL,
  `sanpham_id` int(11) NOT NULL,
  `sanpham_soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khuyenmai`
--

CREATE TABLE `khuyenmai` (
  `khuyenmai_id` int(11) NOT NULL,
  `khuyenmai_tieude` varchar(255) NOT NULL,
  `khuyenmai_mota` varchar(255) NOT NULL,
  `khuyenmai_ngaybatdau` date NOT NULL,
  `khuyenmai_ngayketthuc` date NOT NULL,
  `khuyenmai_mucgiamgia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lichhen`
--

CREATE TABLE `lichhen` (
  `lichhen_id` int(11) NOT NULL,
  `nguoidung_id` int(11) NOT NULL,
  `dichvu_id` int(11) NOT NULL,
  `lichhen_ngay` date NOT NULL,
  `lichhen_trangthai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `nguoidung_id` int(11) NOT NULL,
  `nguoidung_ten` varchar(255) NOT NULL,
  `nguoidung_matkhau` varchar(255) NOT NULL,
  `nguoidung_email` varchar(255) NOT NULL,
  `nguoidung_sdt` int(11) NOT NULL,
  `nguoidung_diachi` varchar(255) NOT NULL,
  `nguoidung_vaitro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `nhanvien_id` int(11) NOT NULL,
  `nhanvien_ten` varchar(255) NOT NULL,
  `nhanvien_email` varchar(255) NOT NULL,
  `nhanvien_sodienthoai` int(11) NOT NULL,
  `nhanvien_chucvu` varchar(255) NOT NULL,
  `nhanvien_luong` varchar(255) NOT NULL,
  `nhanvien_ngay` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `sanpham_id` int(11) NOT NULL,
  `sanpham_ten` varchar(255) NOT NULL,
  `sanpham_mota` varchar(255) NOT NULL,
  `sanpham_gia` varchar(255) NOT NULL,
  `sanpham_soluong` int(11) NOT NULL,
  `danhmuc_id` int(11) NOT NULL,
  `sanpham_img` varchar(255) NOT NULL,
  `khuyenmai_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thanhtoan`
--

CREATE TABLE `thanhtoan` (
  `thanhtoan_id` int(11) NOT NULL,
  `donhang` int(11) NOT NULL,
  `thanhtoan_phuongthuc` varchar(255) NOT NULL,
  `thanhtoan_ngay` date NOT NULL,
  `thanhtoan_trangthai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `timkiem`
--

CREATE TABLE `timkiem` (
  `timkiem_id` int(11) NOT NULL,
  `nguoidung_id` int(11) NOT NULL,
  `timkiem_tukhoa` varchar(255) NOT NULL,
  `timkiem_ngay` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vanchuyen`
--

CREATE TABLE `vanchuyen` (
  `vanchuyen_id` int(11) NOT NULL,
  `donhang_id` int(11) NOT NULL,
  `nhanvien_id` int(11) NOT NULL,
  `vanchuyen_ngaybatdau` date NOT NULL,
  `vanchuyen_ngaygiaohang` date NOT NULL,
  `vanchuyen_trangthai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`nguoidung_id`);

--
-- Chỉ mục cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  ADD PRIMARY KEY (`baiviet_id`);

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`binhluan_id`);

--
-- Chỉ mục cho bảng `binhluan_baiviet`
--
ALTER TABLE `binhluan_baiviet`
  ADD PRIMARY KEY (`binhluan_baiviet_id`);

--
-- Chỉ mục cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD PRIMARY KEY (`chitietdonhang_id`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`danhmuc_id`);

--
-- Chỉ mục cho bảng `danhmuc_baiviet`
--
ALTER TABLE `danhmuc_baiviet`
  ADD PRIMARY KEY (`danhmuc_baiviet_id`);

--
-- Chỉ mục cho bảng `dichvu`
--
ALTER TABLE `dichvu`
  ADD PRIMARY KEY (`dichvu_id`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`donhang_id`);

--
-- Chỉ mục cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`giohang_id`);

--
-- Chỉ mục cho bảng `giohangchitiet`
--
ALTER TABLE `giohangchitiet`
  ADD PRIMARY KEY (`giohangchitiet_id`);

--
-- Chỉ mục cho bảng `khuyenmai`
--
ALTER TABLE `khuyenmai`
  ADD PRIMARY KEY (`khuyenmai_id`);

--
-- Chỉ mục cho bảng `lichhen`
--
ALTER TABLE `lichhen`
  ADD PRIMARY KEY (`lichhen_id`);

--
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`nguoidung_id`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`nhanvien_id`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`sanpham_id`);

--
-- Chỉ mục cho bảng `thanhtoan`
--
ALTER TABLE `thanhtoan`
  ADD PRIMARY KEY (`thanhtoan_id`);

--
-- Chỉ mục cho bảng `timkiem`
--
ALTER TABLE `timkiem`
  ADD PRIMARY KEY (`timkiem_id`);

--
-- Chỉ mục cho bảng `vanchuyen`
--
ALTER TABLE `vanchuyen`
  ADD PRIMARY KEY (`vanchuyen_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `nguoidung_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  MODIFY `baiviet_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `binhluan_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `binhluan_baiviet`
--
ALTER TABLE `binhluan_baiviet`
  MODIFY `binhluan_baiviet_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  MODIFY `chitietdonhang_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `danhmuc_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `danhmuc_baiviet`
--
ALTER TABLE `danhmuc_baiviet`
  MODIFY `danhmuc_baiviet_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `dichvu`
--
ALTER TABLE `dichvu`
  MODIFY `dichvu_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `donhang_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `giohang`
--
ALTER TABLE `giohang`
  MODIFY `giohang_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `giohangchitiet`
--
ALTER TABLE `giohangchitiet`
  MODIFY `giohangchitiet_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `khuyenmai`
--
ALTER TABLE `khuyenmai`
  MODIFY `khuyenmai_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `lichhen`
--
ALTER TABLE `lichhen`
  MODIFY `lichhen_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `nguoidung_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `nhanvien_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `sanpham_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `thanhtoan`
--
ALTER TABLE `thanhtoan`
  MODIFY `thanhtoan_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `timkiem`
--
ALTER TABLE `timkiem`
  MODIFY `timkiem_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `vanchuyen`
--
ALTER TABLE `vanchuyen`
  MODIFY `vanchuyen_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
