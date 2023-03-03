-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 30, 2022 lúc 05:40 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `productmove`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `agents`
--

CREATE TABLE `agents` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `agents`
--

INSERT INTO `agents` (`id`, `name`, `address`, `status`, `updated_at`) VALUES
(1, 'VinFast-Chevrolet Newway', '183 Yên Lãng, Thịnh Quang, Đống Đa, Hà Nội\n', 1, '2022-12-29 07:07:15'),
(2, 'VinFast-Chevrolet Thăng Long', '68 Trịnh Văn Bô (Cụm CN vừa và nhỏ Từ Liêm), Phương Canh, Nam Từ Liêm, Hà Nội\n\n', 1, '2022-12-29 09:51:13'),
(3, 'VinFast Mỹ Đình', 'Số 8, đường Phạm Hùng, Phường Mai Dịch, Quận Cầu Giấy, Hà Nội', 1, '2022-12-29 09:58:11'),
(4, 'VinFast Royal City\r\n', 'Tầng B2, TTTM Vincom Mega Mall Royal City - 72A Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội', 1, '2022-12-29 10:13:40'),
(5, 'VinFast-Chevrolet Hà Nội', 'Số 948 đường Quang Trung kéo dài, P.Yên Nghĩa, Quận Hà Đông, Thành phố Hà Nội', 1, '2022-12-29 12:51:20'),
(6, 'VinFast Phạm Ngọc Thạch', 'Tầng L1, TTTM Vincom Center Phạm Ngọc Thạch - 2 Phạm Ngọc Thạch, Kim Liên, Đống Đa, Hà Nội', 1, '2022-12-29 12:52:04'),
(7, 'VinFast-Chevrolet Đại Việt', 'Số 1 Đường Nguyễn Văn Linh, Phường Gia Thụy, Quận Long Biên, Thành phố Hà Nội', 1, '2022-12-30 05:13:24'),
(8, 'VinFast-Chevrolet Sài Gòn', 'Số 161F Đường Dạ Nam, Phường 3, Quận 8, Thành phố Hồ Chí Minh', 1, '2022-12-30 05:14:14'),
(9, 'VinFast Quang Trung\r\n', '190 Quang Trung, Phường 10, Gò Vấp, Hồ Chí Minh', 1, '2022-12-30 07:09:43'),
(10, 'VinFast Landmark 81\r\n', 'Tầng L1, TTTM Vincom Center Landmark 81 - Khu đô thị Central Park, 208 đường Nguyễn Hữu Cảnh, Quận B', 1, '2022-12-21 09:20:57'),
(11, 'VinFast-Chevrolet Newway', '183 Yên Lãng, Thịnh Quang, Đống Đa, Hà Nội\r\n', 1, '2022-12-26 02:38:51'),
(12, 'VinFast-Chevrolet Thăng Long', '68 Trịnh Văn Bô (Cụm CN vừa và nhỏ Từ Liêm), Phương Canh, Nam Từ Liêm, Hà Nội\r\n\r\n', 1, '2022-12-24 13:52:07'),
(13, 'VinFast Mỹ Đình', 'Số 8, đường Phạm Hùng, Phường Mai Dịch, Quận Cầu Giấy, Hà Nội', 1, '2022-12-27 09:10:05'),
(14, 'VinFast Royal City\r\n', 'Tầng B2, TTTM Vincom Mega Mall Royal City - 72A Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội', 1, '2022-12-27 09:13:53'),
(15, 'VinFast-Chevrolet Hà Nội', 'Số 948 đường Quang Trung kéo dài, P.Yên Nghĩa, Quận Hà Đông, Thành phố Hà Nội', 1, '2022-12-26 03:11:56'),
(16, 'VinFast Phạm Ngọc Thạch', 'Tầng L1, TTTM Vincom Center Phạm Ngọc Thạch - 2 Phạm Ngọc Thạch, Kim Liên, Đống Đa, Hà Nội', 1, '2022-12-21 09:24:29'),
(17, 'VinFast-Chevrolet Đại Việt', 'Số 1 Đường Nguyễn Văn Linh, Phường Gia Thụy, Quận Long Biên, Thành phố Hà Nội', 1, '2022-12-26 03:00:18'),
(18, 'VinFast-Chevrolet Sài Gòn', 'Số 161F Đường Dạ Nam, Phường 3, Quận 8, Thành phố Hồ Chí Minh', 1, '2022-12-26 02:42:07'),
(19, 'VinFast Quang Trung\r\n', '190 Quang Trung, Phường 10, Gò Vấp, Hồ Chí Minh', 1, NULL),
(20, 'VinFast Landmark 81\r\n', 'Tầng L1, TTTM Vincom Center Landmark 81 - Khu đô thị Central Park, 208 đường Nguyễn Hữu Cảnh, Quận B', 1, '2022-12-26 02:43:16');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `id` int(10) NOT NULL,
  `fullname` text NOT NULL,
  `phone_number` int(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`id`, `fullname`, `phone_number`, `email`, `address`) VALUES
(1, 'Nguyễn Thanh Thủy', 384162783, 'thuynguyen@gmail.com', 'Thanh Hóa'),
(2, 'Nguyễn Hoàng Lan', 389182742, 'hoanglan@gmail.com', 'Vĩnh Phúc'),
(3, 'Phùng Thị Ngọc', 126488367, 'ngocphung@gmail.com', 'Vĩnh Phúc'),
(4, 'Nguyễn Thu Trang ', 957754678, 'trangthu@gmail.com', 'Hưng Yên'),
(5, 'Nguyễn Thị Hường', 987367462, 'huongnguyen@gmail.com', 'Hưng Yên'),
(6, 'Hoàng Ngọc Lan', 128475967, 'ngoclan@gmail.com', 'Bắc Giang');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `exportdetail`
--

CREATE TABLE `exportdetail` (
  `id` int(10) NOT NULL,
  `customer_code` int(10) NOT NULL,
  `product_code` int(100) NOT NULL,
  `export_date` date NOT NULL,
  `status` int(11) NOT NULL,
  `time_up_date` date NOT NULL,
  `insurance_times` int(11) NOT NULL DEFAULT 0,
  `agent_code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `exportdetail`
--

INSERT INTO `exportdetail` (`id`, `customer_code`, `product_code`, `export_date`, `status`, `time_up_date`, `insurance_times`, `agent_code`) VALUES
(1, 3, 4, '2021-12-01', 1, '2023-12-08', 0, 19),
(2, 6, 3, '2019-11-06', 0, '2023-12-13', 0, 3),
(3, 1, 3, '2022-12-22', 0, '2022-12-22', 0, 3),
(4, 6, 2, '2021-12-09', 0, '2022-12-22', 0, 19),
(5, 1, 7, '2022-10-03', 0, '2022-12-22', 0, 3),
(6, 1, 11, '2020-09-02', 0, '2023-12-08', 0, 2),
(7, 4, 10, '2018-08-09', 0, '2022-12-08', 0, NULL),
(8, 1, 12, '2019-07-02', 0, '2022-12-14', 0, NULL),
(9, 3, 4, '2021-06-03', 1, '2023-12-08', 0, 19),
(10, 6, 3, '2020-05-06', 0, '2023-12-13', 0, 3),
(11, 1, 3, '2019-04-02', 0, '2022-12-22', 0, 3),
(12, 6, 2, '2018-03-01', 0, '2022-12-22', 0, 19),
(13, 1, 7, '2019-02-01', 0, '2022-12-22', 0, 3),
(14, 1, 11, '2022-01-01', 0, '2023-12-08', 0, NULL),
(33, 3, 4, '2021-12-01', 1, '2023-12-08', 0, 19),
(34, 6, 3, '2019-11-06', 0, '2023-12-13', 0, 3),
(35, 1, 3, '2022-12-22', 0, '2022-12-22', 0, 3),
(36, 6, 2, '2021-12-09', 0, '2022-12-22', 0, 19),
(37, 1, 7, '2022-10-03', 0, '2022-12-22', 0, 3),
(38, 1, 11, '2020-09-02', 0, '2023-12-08', 0, 2),
(39, 4, 10, '2018-08-09', 0, '2022-12-08', 0, NULL),
(40, 1, 12, '2019-07-02', 0, '2022-12-14', 0, NULL),
(41, 3, 4, '2021-06-03', 1, '2023-12-08', 0, 19),
(42, 6, 3, '2020-05-06', 0, '2023-12-13', 0, 3),
(43, 1, 3, '2019-04-02', 0, '2022-12-22', 0, 3),
(44, 6, 2, '2018-03-01', 0, '2022-12-22', 0, 19),
(45, 1, 7, '2019-02-01', 0, '2022-12-22', 0, 3),
(46, 1, 11, '2022-01-01', 0, '2023-12-08', 0, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `importdetail`
--

CREATE TABLE `importdetail` (
  `id` int(10) NOT NULL,
  `product_code` int(100) NOT NULL,
  `amount` int(100) NOT NULL,
  `status_code` int(11) NOT NULL,
  `agent_code` int(100) NOT NULL,
  `basis_code` int(100) NOT NULL,
  `request_at` date NOT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `importdetail`
--

INSERT INTO `importdetail` (`id`, `product_code`, `amount`, `status_code`, `agent_code`, `basis_code`, `request_at`, `updated_at`) VALUES
(1, 3, 10, 1, 10, 2, '2022-12-08', '2022-12-24'),
(2, 4, 30, 1, 4, 4, '2022-12-13', '2022-12-24'),
(3, 4, 20, 0, 4, 4, '2022-12-23', NULL),
(4, 4, 10, 0, 13, 4, '2022-12-23', NULL),
(5, 4, 10, 1, 13, 4, '2022-12-23', NULL),
(6, 4, 10, 1, 13, 4, '2022-12-23', NULL),
(7, 3, 10, 1, 10, 2, '2022-12-08', '2022-12-30'),
(8, 4, 30, 1, 4, 2, '2022-12-13', '2022-12-24'),
(9, 4, 20, 0, 4, 3, '2022-12-23', NULL),
(10, 4, 10, 1, 13, 2, '2022-12-23', NULL),
(11, 1, 10, 1, 13, 4, '2022-12-23', NULL),
(12, 8, 10, 1, 13, 2, '2022-12-23', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `insuarancedetail`
--

CREATE TABLE `insuarancedetail` (
  `id` int(100) NOT NULL,
  `product_code` int(10) NOT NULL,
  `service_center_code` int(100) NOT NULL,
  `basis_code` int(100) NOT NULL,
  `agent_code` int(100) NOT NULL,
  `status` int(100) NOT NULL,
  `description_failure` longtext NOT NULL,
  `request_date` date NOT NULL,
  `completion_date` date NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `insuarancedetail`
--

INSERT INTO `insuarancedetail` (`id`, `product_code`, `service_center_code`, `basis_code`, `agent_code`, `status`, `description_failure`, `request_date`, `completion_date`, `amount`) VALUES
(2, 3, 13, 4, 9, 1, '', '2020-12-02', '2022-12-30', 5),
(3, 11, 19, 5, 19, 0, '', '2018-07-10', '2022-12-22', 4),
(5, 9, 14, 2, 4, 2, '', '2021-09-07', '2022-12-22', 7),
(6, 10, 3, 2, 19, 1, '', '2020-08-11', '2022-12-22', 10),
(7, 6, 6, 1, 19, 0, '', '2022-10-02', '2022-12-05', 10),
(8, 3, 13, 2, 9, 2, '', '2020-12-02', '2022-12-30', 5),
(9, 11, 19, 3, 19, 1, '', '2018-07-10', '2022-12-22', 4),
(11, 9, 14, 5, 4, 2, '', '2021-09-07', '2022-12-22', 7),
(12, 10, 3, 1, 19, 0, '', '2020-05-05', '2022-12-22', 10),
(13, 3, 13, 2, 9, 1, '', '2020-06-02', '2022-12-30', 5),
(14, 11, 19, 2, 19, 0, '', '2018-07-10', '2022-12-22', 4),
(16, 9, 14, 2, 4, 2, '', '2021-09-07', '2022-12-22', 7),
(17, 10, 3, 2, 19, 1, '', '2020-08-11', '2022-12-22', 10),
(18, 6, 6, 2, 19, 0, '', '2022-10-02', '0000-00-00', 10),
(19, 3, 13, 2, 9, 1, '', '2020-12-02', '2022-12-30', 5),
(20, 11, 19, 2, 19, 2, '', '2018-07-10', '2022-12-22', 4),
(22, 9, 14, 2, 4, 2, '', '2021-09-07', '2022-12-22', 7),
(23, 10, 3, 2, 19, 2, '', '2020-04-06', '2022-12-22', 10),
(24, 6, 6, 2, 19, 2, '', '2023-01-11', '2022-12-05', 10),
(25, 3, 13, 2, 9, 2, '', '2021-01-07', '2022-12-30', 5),
(26, 11, 19, 2, 19, 2, '', '2018-04-18', '2022-12-22', 4),
(27, 6, 1, 2, 19, 0, '', '2020-02-12', '2022-12-22', 3),
(28, 9, 14, 2, 4, 0, '', '2021-09-07', '2022-12-22', 7),
(29, 10, 3, 2, 19, 0, '', '2020-05-05', '2022-12-22', 10),
(30, 3, 13, 2, 9, 2, '', '2020-06-02', '2022-12-30', 5),
(31, 11, 19, 2, 19, 0, '', '2018-07-10', '2022-12-22', 4),
(32, 6, 1, 2, 19, 0, '', '2019-10-01', '2022-12-22', 3),
(33, 9, 14, 2, 4, 2, '', '2021-09-07', '2022-12-22', 7),
(34, 10, 3, 2, 19, 2, '', '2020-08-11', '2022-12-22', 10),
(35, 6, 6, 2, 19, 2, '', '2022-10-02', '0000-00-00', 10),
(36, 3, 13, 2, 9, 2, '', '2020-12-02', '2022-12-30', 5),
(37, 11, 19, 2, 19, 2, '', '2018-07-10', '2022-12-22', 4),
(38, 6, 1, 2, 19, 0, '', '2019-10-01', '2022-12-22', 3),
(39, 9, 14, 2, 4, 2, '', '2021-09-07', '2022-12-22', 7),
(40, 10, 3, 2, 19, 2, '', '2020-08-11', '2022-12-22', 10),
(41, 6, 6, 2, 19, 2, '', '2022-10-02', '0000-00-00', 10),
(42, 3, 13, 2, 9, 1, '', '2020-12-02', '2022-12-30', 5),
(43, 6, 1, 2, 19, 0, '', '2019-10-01', '2022-12-22', 3),
(44, 9, 14, 2, 4, 2, '', '2021-09-07', '2022-12-22', 7),
(45, 10, 3, 2, 19, 2, '', '2020-08-11', '2022-12-22', 10),
(47, 3, 13, 2, 9, 2, '', '2020-08-03', '2022-12-30', 5),
(48, 9, 14, 2, 4, 2, '', '2021-09-07', '2022-12-22', 7),
(49, 10, 3, 2, 19, 2, '', '2020-08-11', '2022-12-22', 10),
(51, 9, 14, 2, 4, 2, '', '2021-09-07', '2022-12-22', 7),
(52, 10, 3, 2, 19, 2, '', '2020-04-05', '2022-12-22', 10),
(54, 3, 13, 2, 9, 2, '', '2020-12-02', '2022-12-30', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(6, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(7, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(8, '2016_06_01_000004_create_oauth_clients_table', 2),
(9, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'YC233bJv94UTFbX0w2VHhIyVwDJlkCey975Xc5Kg', NULL, 'http://localhost', 1, 0, 0, '2022-12-27 10:30:24', '2022-12-27 10:30:24'),
(2, NULL, 'Laravel Password Grant Client', 'exRLdAxEShEnZjB8DKIwiY5j1jedEEWUwzs7ikpq', 'users', 'http://localhost', 0, 1, 0, '2022-12-27 10:30:24', '2022-12-27 10:30:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-12-27 10:30:24', '2022-12-27 10:30:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 141, 'Myapp', '7f9c7d736f3cee2eb3ca51efeddab14db07070f604beb38cd90655bbb7c4f8ea', '[\"*\"]', NULL, NULL, '2022-12-27 09:33:10', '2022-12-27 09:33:10'),
(2, 'App\\Models\\User', 142, 'Myapp', '61fb714159cefa7a7fe783246eee208fdb6cf7e00830ac4113c77d558820d62f', '[\"*\"]', NULL, NULL, '2022-12-27 09:48:52', '2022-12-27 09:48:52'),
(3, 'App\\Models\\User', 143, 'Myapp', '9294fccd7fe688150b8eb95967857f338a572290b219ff70b517f6e8815099f1', '[\"*\"]', NULL, NULL, '2022-12-27 10:03:00', '2022-12-27 10:03:00'),
(4, 'App\\Models\\User', 143, 'MyApp', 'd620147a0b4a52c6707dffb7e25e66e85e92931c8b89c3de2868b5c50abf0237', '[\"*\"]', NULL, NULL, '2022-12-27 10:09:35', '2022-12-27 10:09:35'),
(5, 'App\\Models\\User', 143, 'MyApp', '6e1726d25f1ac1aa994a8b1ee3b5bb271138f663677e9e64de78c12c60ed14be', '[\"*\"]', NULL, NULL, '2022-12-27 10:10:06', '2022-12-27 10:10:06'),
(6, 'App\\Models\\User', 1, 'MyApp', '1da3594bd7a08b520b456ae2f04eb2a9b6e951f5da653f67774b0c3b5a3a380c', '[\"*\"]', NULL, NULL, '2022-12-27 10:10:42', '2022-12-27 10:10:42'),
(7, 'App\\Models\\User', 144, 'Myapp', '0ce739fb650370a06361969d801226a32b298a640fc3ce07db9ddb37f3c4f953', '[\"*\"]', NULL, NULL, '2022-12-27 10:13:28', '2022-12-27 10:13:28'),
(8, 'App\\Models\\User', 144, 'MyApp', '4c3705dc6fb489cd71f3884357587e42946c8f654beb1dca3dfff3a89faf2a57', '[\"*\"]', NULL, NULL, '2022-12-27 10:14:43', '2022-12-27 10:14:43'),
(9, 'App\\Models\\User', 144, 'MyApp', '2eab07b3f62c9ffdad5268838ed9e71c07499177d612c9f6d00c31f79d1fe1b5', '[\"*\"]', NULL, NULL, '2022-12-27 10:15:28', '2022-12-27 10:15:28'),
(10, 'App\\Models\\User', 144, 'MyApp', 'fb5ff09ec8bf0326778478c85c9df63211a9a1f4f2691171e90ae54b6cd1eb73', '[\"*\"]', NULL, NULL, '2022-12-27 10:30:30', '2022-12-27 10:30:30'),
(11, 'App\\Models\\User', 144, 'MyApp', '5c33b6eb1d742ffcba684f8344fe5150f1c20147e87d4b847be75081bb0633ec', '[\"*\"]', NULL, NULL, '2022-12-27 10:35:40', '2022-12-27 10:35:40'),
(12, 'App\\Models\\User', 144, 'MyApp', '9ce39e80ecfade9508f582e8181c7b60bfe418d4da63fe385bca84b0cbf85111', '[\"*\"]', NULL, NULL, '2022-12-27 10:35:43', '2022-12-27 10:35:43'),
(13, 'App\\Models\\User', 144, 'MyApp', '1d22392b9c6ee83401635077dcc9074e5494c8f35e99358afb4e9cd235fecb10', '[\"*\"]', '2022-12-27 10:39:05', NULL, '2022-12-27 10:36:09', '2022-12-27 10:39:05'),
(14, 'App\\Models\\User', 1, 'MyApp', 'd9d75c8510a2c5214cb9f93ead91a3dbdd212434cd59c8ef4e236c0fcfdf5dff', '[\"*\"]', NULL, NULL, '2022-12-27 12:18:32', '2022-12-27 12:18:32'),
(15, 'App\\Models\\User', 1, 'MyApp', '21f3552f018d6a78662a6ec3c004f0448146799c500cea8937e320e31b5e7af8', '[\"*\"]', NULL, NULL, '2022-12-27 12:20:31', '2022-12-27 12:20:31'),
(16, 'App\\Models\\User', 1, 'MyApp', 'f8207e618a64afbaf62ee3d3467b95dee1f679f6547ec6c333276d83753ee1e7', '[\"*\"]', NULL, NULL, '2022-12-27 12:33:26', '2022-12-27 12:33:26'),
(17, 'App\\Models\\User', 1, 'MyApp', '53ecd6453a8e1672d2ae9c02094da6ce7b94d71b4779ecc609b287528f144108', '[\"*\"]', NULL, NULL, '2022-12-27 12:33:59', '2022-12-27 12:33:59'),
(18, 'App\\Models\\User', 1, 'MyApp', '97f29478b5b9b07394eb3ab215a84d3358ac6ce2bc0aed7d64da8ec248696f5b', '[\"*\"]', NULL, NULL, '2022-12-27 12:38:12', '2022-12-27 12:38:12'),
(19, 'App\\Models\\User', 1, 'MyApp', '523ab94b9ab60b99dd90faf352af266df65a0862d4ddca17360971139a0e860f', '[\"*\"]', NULL, NULL, '2022-12-27 12:38:46', '2022-12-27 12:38:46'),
(20, 'App\\Models\\User', 1, 'MyApp', 'a0461ac22660020ca5b323e1fa792f7b4869c18f696b5ce89e405d19ae8f6e69', '[\"*\"]', NULL, NULL, '2022-12-27 12:38:48', '2022-12-27 12:38:48'),
(21, 'App\\Models\\User', 1, 'MyApp', 'cbeb899fedab48489ea29eb56fff83bbf1a95ba863f8e0481996b9249f235b28', '[\"*\"]', NULL, NULL, '2022-12-27 12:38:49', '2022-12-27 12:38:49'),
(22, 'App\\Models\\User', 1, 'MyApp', 'adbd81af3bdac87319f4f353717a2167e60c80a5d635f9932711e552f7ba6d7c', '[\"*\"]', NULL, NULL, '2022-12-27 12:38:51', '2022-12-27 12:38:51'),
(23, 'App\\Models\\User', 1, 'MyApp', 'd44457a9cb8c4f5e49867575a1edd8f59312accd9b8714342fefb5882fb0df8e', '[\"*\"]', NULL, NULL, '2022-12-27 19:48:40', '2022-12-27 19:48:40'),
(24, 'App\\Models\\User', 1, 'MyApp', 'aeaeccc6819288e6f3c795bda5d5ba4739314a0b361ab47c683438888c6a8601', '[\"*\"]', NULL, NULL, '2022-12-27 19:56:19', '2022-12-27 19:56:19'),
(25, 'App\\Models\\User', 1, 'MyApp', '1d0e4b8aa9ece68b2ca9a0c2ccbd958593f520a295b98e340cbb2a794a7ae05f', '[\"*\"]', NULL, NULL, '2022-12-27 19:56:23', '2022-12-27 19:56:23'),
(26, 'App\\Models\\User', 1, 'MyApp', '5bc4c3fc4c524a0add5d696df199d9bfb4dfe4effe1caec94093e20704bd352a', '[\"*\"]', NULL, NULL, '2022-12-27 20:08:16', '2022-12-27 20:08:16'),
(27, 'App\\Models\\User', 1, 'MyApp', '33f3d68b97e2a435747f9038ef67d1d0e9b86702dd4b175b4f3fabaf9eae58ed', '[\"*\"]', NULL, NULL, '2022-12-28 13:54:44', '2022-12-28 13:54:44'),
(28, 'App\\Models\\User', 1, 'MyApp', 'b971ef2f3a51a55cf0d46aa3a9d6ef4e7b2d31ab16fb9f85b170471c7c694977', '[\"*\"]', NULL, NULL, '2022-12-28 13:55:18', '2022-12-28 13:55:18'),
(29, 'App\\Models\\User', 1, 'MyApp', 'dd2f823fd85ef72c8008f1626ef4763c8cde80dc482098acb9371bc9fdbb0a53', '[\"*\"]', NULL, NULL, '2022-12-29 01:52:16', '2022-12-29 01:52:16'),
(30, 'App\\Models\\User', 1, 'MyApp', '1436edffe9aa97266c2bdfc8a7835da77bb8e8842425c7ab32993945b4a29844', '[\"*\"]', NULL, NULL, '2022-12-29 01:52:58', '2022-12-29 01:52:58'),
(31, 'App\\Models\\User', 1, 'MyApp', 'afb90a7a81dba8af263ee2ccba6d01046f695a854b85bfd72fe875f00795542c', '[\"*\"]', NULL, NULL, '2022-12-29 01:53:35', '2022-12-29 01:53:35'),
(32, 'App\\Models\\User', 1, 'MyApp', '4b3e6f5c39949acf40076d0a1a4df2a45bc50d15d3d729a1acea76d48244f0fa', '[\"*\"]', NULL, NULL, '2022-12-29 01:55:09', '2022-12-29 01:55:09'),
(33, 'App\\Models\\User', 1, 'MyApp', 'e88780b9b7e5d8924d15c8c3838150f1b8599f27ec5814d7088604b27c15935f', '[\"*\"]', NULL, NULL, '2022-12-29 01:55:37', '2022-12-29 01:55:37'),
(34, 'App\\Models\\User', 1, 'MyApp', '9b5f126c6021f6324348b891f43dec7249933816c1d3b33804d514bd3e43d0fe', '[\"*\"]', NULL, NULL, '2022-12-29 01:58:35', '2022-12-29 01:58:35'),
(35, 'App\\Models\\User', 1, 'MyApp', 'fd363d945ea9197fa5abfec5cb1790d18b1a026165751c538bede01620b4314f', '[\"*\"]', NULL, NULL, '2022-12-29 01:59:13', '2022-12-29 01:59:13'),
(36, 'App\\Models\\User', 1, 'MyApp', '1941f8dfd48466b543cebe78b04e2b5bd7c935796cf1b004e5f348937d3bb37e', '[\"*\"]', NULL, NULL, '2022-12-29 01:59:26', '2022-12-29 01:59:26'),
(37, 'App\\Models\\User', 1, 'MyApp', '0a9264bf23254dd4700fe14dd1e87d7ebdda4d8ca9902be21e4c3f3495843e31', '[\"*\"]', NULL, NULL, '2022-12-29 02:02:11', '2022-12-29 02:02:11'),
(38, 'App\\Models\\User', 1, 'MyApp', '8937e4637ed0428eca5ea5a5b1ddb291863cfe28a0912cde09a59e8930b0eb9d', '[\"*\"]', NULL, NULL, '2022-12-29 02:03:04', '2022-12-29 02:03:04'),
(39, 'App\\Models\\User', 1, 'MyApp', '194c70a15ba8d31a2d5ee4667569456a34abb21f86971e87640c6179f95d5883', '[\"*\"]', NULL, NULL, '2022-12-29 02:07:53', '2022-12-29 02:07:53'),
(40, 'App\\Models\\User', 1, 'MyApp', '7852ec1bc8e656479484c458331666f7d436ebb78e94209392e058260c331f34', '[\"*\"]', NULL, NULL, '2022-12-29 02:08:27', '2022-12-29 02:08:27'),
(41, 'App\\Models\\User', 1, 'MyApp', 'fb8a1b760b60246d5b302f02c6e09f76fda37c6b1e5fc393171c5e702cbad1da', '[\"*\"]', NULL, NULL, '2022-12-29 06:23:55', '2022-12-29 06:23:55'),
(42, 'App\\Models\\User', 1, 'MyApp', '0f6313a9cda4bc74324b75e021bf113b60c17b2db27dcb0060dde04cc212cc14', '[\"*\"]', NULL, NULL, '2022-12-29 07:29:25', '2022-12-29 07:29:25'),
(43, 'App\\Models\\User', 145, 'Myapp', '145260db19c98d8e98ac69ba6ae716cc5d57738e625ca9a544a8bb145bbb0d5b', '[\"*\"]', NULL, NULL, '2022-12-29 12:55:05', '2022-12-29 12:55:05'),
(44, 'App\\Models\\User', 147, 'Myapp', '7da0070e61a7444885b50ac80ad5f1f428aad8611e8cc87c059bd66a1601003b', '[\"*\"]', NULL, NULL, '2022-12-30 05:14:14', '2022-12-30 05:14:14'),
(45, 'App\\Models\\User', 1, 'MyApp', '5bc50226452bc8f868585c3df6588b544c5f96a7fe2c82513aab787a8bee04aa', '[\"*\"]', NULL, NULL, '2022-12-30 05:33:50', '2022-12-30 05:33:50'),
(46, 'App\\Models\\User', 1, 'MyApp', '786398c5a182b57a2899563274b3d6b9edba628ad04371d27e564246a7e96ded', '[\"*\"]', NULL, NULL, '2022-12-30 06:00:54', '2022-12-30 06:00:54'),
(47, 'App\\Models\\User', 1, 'MyApp', 'b9f02605f9403cb9b599e3d7b8963400e9f79f50549c16897c9341c53ef63ecc', '[\"*\"]', NULL, NULL, '2022-12-30 06:01:44', '2022-12-30 06:01:44'),
(48, 'App\\Models\\User', 1, 'MyApp', '51f50e1233e074749a4d6048f6b1ccd5fcb735db967d2656eadf1f5c26904675', '[\"*\"]', NULL, NULL, '2022-12-30 07:04:52', '2022-12-30 07:04:52'),
(49, 'App\\Models\\User', 1, 'MyApp', '899febd0a5a1d30df4918c15c78e5d0c060bb4a325f656749acd2a7adc590a52', '[\"*\"]', NULL, NULL, '2022-12-30 07:07:35', '2022-12-30 07:07:35'),
(50, 'App\\Models\\User', 149, 'Myapp', '7c9d890c6809918a2e86f62ba3f5f956d31b4d015a738823a58a45fb2bdc0c59', '[\"*\"]', NULL, NULL, '2022-12-30 07:09:43', '2022-12-30 07:09:43'),
(51, 'App\\Models\\User', 2, 'MyApp', '0495ab0b3a7cc8632cee730dcddae3a97d3712f43945dd28939b2320f33b8bdb', '[\"*\"]', NULL, NULL, '2022-12-30 07:14:46', '2022-12-30 07:14:46'),
(52, 'App\\Models\\User', 1, 'MyApp', '5833f3d8482e4d6811fb594154096c6e650b2d56e862bb8539a394a7d960f49f', '[\"*\"]', NULL, NULL, '2022-12-30 07:18:50', '2022-12-30 07:18:50'),
(53, 'App\\Models\\User', 1, 'MyApp', '7dc02aa1ad6447f50f634c2207debc3183cf0c19da41a890f05b422e62bf7fb1', '[\"*\"]', NULL, NULL, '2022-12-30 08:39:46', '2022-12-30 08:39:46');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `producedetail`
--

CREATE TABLE `producedetail` (
  `id` int(10) NOT NULL,
  `product_code` int(10) NOT NULL,
  `production_address` int(10) NOT NULL,
  `amount` int(100) NOT NULL,
  `import_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `producedetail`
--

INSERT INTO `producedetail` (`id`, `product_code`, `production_address`, `amount`, `import_date`) VALUES
(1, 5, 2, 2, '2022-12-01'),
(2, 2, 2, 3, '2020-01-09'),
(3, 12, 2, 3, '2019-02-13'),
(4, 6, 2, 4, '2020-03-12'),
(5, 8, 2, 5, '2022-04-05'),
(6, 2, 2, 1, '2020-05-07'),
(7, 13, 2, 4, '2019-06-06'),
(8, 4, 2, 2, '2022-07-13'),
(9, 2, 2, 1, '2022-08-03'),
(10, 10, 1, 5, '2022-01-04'),
(11, 11, 3, 2, '2022-12-22'),
(12, 2, 2, 0, '2022-12-22'),
(13, 2, 2, 1, '2019-10-17'),
(14, 12, 2, 7, '2020-11-19'),
(15, 11, 3, 1, '2018-12-14'),
(16, 4, 1, 4, '2022-01-10'),
(17, 5, 3, 1, '2023-12-01'),
(18, 2, 3, 1, '2023-12-01'),
(19, 12, 3, 3, '2023-12-08'),
(20, 6, 3, 1, '2023-12-07'),
(21, 8, 4, 1, '2023-12-08'),
(22, 2, 3, 1, '2023-12-01'),
(23, 13, 2, 1, '2021-12-18'),
(24, 4, 4, 3, '2021-12-11'),
(25, 2, 4, 2, '2020-12-04'),
(26, 10, 3, 2, '2022-06-02'),
(27, 11, 3, 3, '2019-07-11'),
(28, 2, 3, 2, '2022-06-06'),
(29, 2, 3, 1, '2022-12-22'),
(30, 12, 3, 1, '2020-12-16'),
(31, 11, 3, 1, '2021-12-01'),
(32, 4, 3, 1, '2020-08-06'),
(33, 5, 3, 1, '2023-06-07'),
(34, 2, 3, 1, '2020-12-02'),
(35, 12, 3, 1, '2021-08-06'),
(36, 6, 3, 1, '2021-07-02'),
(37, 8, 3, 2, '2021-12-16'),
(38, 2, 3, 1, '2020-06-17'),
(39, 13, 3, 1, '2021-12-01'),
(40, 4, 3, 1, '2018-12-12'),
(41, 2, 3, 1, '2019-12-05'),
(42, 10, 3, 1, '2020-12-03'),
(43, 11, 3, 1, '2020-01-01'),
(44, 2, 3, 1, '2021-12-01'),
(45, 2, 3, 1, '2022-11-04'),
(46, 12, 3, 1, '2022-11-02'),
(47, 11, 3, 1, '2022-12-22'),
(48, 4, 3, 1, '2022-12-22'),
(49, 5, 3, 1, '2022-12-22'),
(50, 2, 3, 1, '2022-12-22'),
(61, 1, 2, 3, '2022-12-06'),
(62, 1, 2, 3, '2022-12-06'),
(63, 2, 2, 4, '2022-11-30'),
(64, 1, 2, 4, '2022-11-30'),
(65, 3, 2, 5, '2022-12-10'),
(66, 3, 2, 12, '2022-01-05'),
(67, 3, 2, 12, '2022-01-05'),
(68, 3, 2, 2, '2022-12-01'),
(69, 1, 2, 6, '2022-11-30'),
(70, 1, 2, 6, '2022-11-30'),
(71, 8, 2, 4, '2022-12-30'),
(72, 2, 2, 3, '2022-12-01'),
(73, 2, 2, 2, '2022-12-02'),
(74, 2, 2, 3, '2022-11-29'),
(75, 2, 2, 3, '2022-11-29'),
(76, 2, 2, 3, '2022-12-01'),
(77, 3, 2, 1, '2023-01-07'),
(78, 4, 2, 2, '2022-12-31'),
(79, 6, 2, 123, '2023-01-01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `productionbasis`
--

CREATE TABLE `productionbasis` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `productionbasis`
--

INSERT INTO `productionbasis` (`id`, `name`, `address`, `status`, `updated_at`) VALUES
(1, 'Cơ sở Bắc Ninh', 'Xóm Lòng Tâm, Thôn Phú Mẫn, Đường An Dương Vương, Thị Trấn Chờ, Huyện Yên Phong, Bắc Ninh', 0, NULL),
(2, 'Cơ sở Bình Dương', 'Tổ 15, Khu phố Long Thới, phường Lái Thiêu, TX Thuận An, Tỉnh Bình Dương', 0, NULL),
(3, 'Cơ sở Tuyên Quang', 'Tổ 10, P. Phan Thiết, TP. Tuyên Quang', 0, NULL),
(4, 'Cơ sở Bắc Giang', 'Số 57 Quang Trung, Bắc Giang', 0, NULL),
(5, 'Cơ sở Tp Hồ Chí Minh', 'Số 161F Đường Dạ Nam, Phường 3, Quận 8, Thành phố Hồ Chí Minh', 0, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `productlines`
--

CREATE TABLE `productlines` (
  `id` int(10) NOT NULL,
  `productline_name` varchar(100) NOT NULL,
  `image` varchar(50) NOT NULL,
  `textDescription1` longtext NOT NULL,
  `textDescription2` longtext NOT NULL,
  `textDescription3` longtext NOT NULL,
  `textDescription4` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `productlines`
--

INSERT INTO `productlines` (`id`, `productline_name`, `image`, `textDescription1`, `textDescription2`, `textDescription3`, `textDescription4`) VALUES
(1, 'Coupe', '', 'Với thiết kế nhỏ gọn, sử dụng động cơ mạnh mẽ mang đến ưu điểm cho chiếc xe này đó chính là hiệu xuất tăng tốc cực nhanh không thể bàn cãi, đúng như vẻ ngoài thể thao của nó.', '3.0L 6 xy lanh thẳng hàng', '300/6500', ''),
(2, 'Crossover', '', 'Crossover là một kiểu xe đa năng, phù hợp với xu hướng hiện đại ngày nay. Nó là sự kết hợp khá toàn diện giữa một chiếc xe Sedan và SUV, nên sẽ có cả ưu điểm của 2 mẫu xe trên.', 'DOHC 4-cylinder, NSE 1.5L', '112 /6000', ''),
(3, 'Hatchback', '', 'Một trong những thước đo sự thành công của sản phẩm và thương hiệu đó là sự hài lòng, ghi nhận từ khách hàng. Hatchback đã rất phổ biến tại thị trường Việt Nam, điều đó chứng minh cho những ưu điểm nổi bật của xe ô tô hatchback.', ' Xăng 1.2L 3 xy lanh, 12 van, DOHC', '120/8000', ''),
(4, 'Pickup', '', 'Xe Pickup còn được gọi là xe bán tải nổi bật với chức năng đa dụng khi chở người thì sang mà chở hàng hóa vẫn tiện. Ngoài việc sở hữu thùng hàng rộng phía sau thì khoang cabin chở người cũng được trang bị tiện nghi và thiết kế không thua gì các chiếc SUV.', 'Diesel 5 xi-lanh 3.2L 9 (bản Ranger Wildtrak)', '200/4000', ''),
(5, 'Sedans', '', 'Sedan là loại xe với khung gầm liền khối, 4 cửa, có 4 chỗ hoặc hơn và quan trọng nhất là có vùng cốp xe chứa đồ tách rời với khoang hành khách. Trong khi trần khoang khách nhô cao thì nắp ca-pô và cốp hạ thấp, tạo thành ba khối riêng biệt khoang máy - khoang lái và khoang chứa đồ.', 'MIVEC 1.2 I3', '110/6000', ''),
(6, 'Suv/Xe địa hình', '', 'SUV có khả năng chạy đường dài, off-road nhiều hơn là di chuyển phố. Cũng vì thế, SUV thường có thiết kế vuông vức, đường nét đơn giản, nam tính. ', '2ZR-FE, 2ZR-FXE', '138/6400', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `image` varchar(50) NOT NULL,
  `productline` int(10) NOT NULL,
  `des1` mediumtext NOT NULL,
  `des2` mediumtext NOT NULL,
  `des3` longtext NOT NULL,
  `product_name` longtext NOT NULL,
  `text1` longtext NOT NULL,
  `text2` longtext NOT NULL,
  `text3` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `image`, `productline`, `des1`, `des2`, `des3`, `product_name`, `text1`, `text2`, `text3`) VALUES
(1, '\\img\\vf5.png', 5, 'Công suất tối đa:210hp', 'Thời gian tăng tốc từ 0-100km: 7.4s', 'Thời gian nạp pin nhanh nhất (10%-70%) 30 phút', 'VinFast VF5', 'VinFast VF 5 Plus được trang bị đầy đủ những công nghệ tiên tiến bậc nhất:  Giám sát hành trình cơ bản:Cảnh báo giao thông phía sau, cảnh báo điểm mù, hỗ trợ đỗ xe phía sau, hỗ trợ phanh khẩn cấp..', 'September 14, 2016', '1,550,500VND'),
(2, '\\img\\a1.0.png', 5, 'Công suất tối đa: 188HP', 'Động cơ: 2.0L', 'Hộp số tự động: ZF 8 cấp', 'VinFast LUX A1.0', 'Tiện nghi tân tiến:Sạc không dây, điều hòa tự động 2 vùng độc lập kiểm soát chất lượng không khí bằng ion, rèm che nắng chỉnh điện, màn hình giải trí 10.4 inch cùng dàn âm thanh 13 loa. Hỗ trợ kết nối Apple Carplay.', 'May 14, 2015', '2,000,554VND'),
(3, '\\img\\president1.png', 6, 'Công suất tối đa: 420HP', 'Động cơ V8: 4.2L', 'Hộp số tự động: ZF 8 cấp', 'VinFast President', 'Là một trong những mẫu xe thương mại mạnh nhất thị trường, President sở hữu động cơ V8 6.2L đạt 420 mã lực mang lại trải nghiệm vận hành uy lực mà êm ái. Cùng với những công nghệ an toàn tân tiến, President sẽ đồng hành cùng chủ nhân bứt phá & chinh phục hành trình đi tới thành công.', 'January 07, 2017', '2,500,122VND'),
(4, '\\img\\sa2.0.png', 5, 'Công suất tối đa: 228HP', 'Động cơ: 2.0L', 'Hộp số tự động: ZF 8 cấp', 'VinFast LUX SA2.0', 'Đột phá trong từng đường nét thiết kế, đón đầu xu hướng thời thượng nhưng vẫn mang đậm bản sắc Việt, LUX SA2.0 hứa hẹn trở thành một hiện tượng mới trên đường phố, chinh phục mọi ánh nhìn', 'February 04, 2010', '2,342,344VND'),
(5, '\\img\\e34.png', 4, 'Công suất tối đa: 110kW-147hp', 'Mô men xoắn cực đại: 242 Nm', 'Quãng đường di chuyển 1 lần sạc đầy: 285km', 'VF E34', 'Không gian thoáng đãng nhờ động cơ điện và hệ thống pin tinh giản đặt dưới sàn xe, đảm bảo sự thoải mái cho hành khách trên xe.', 'November 01, 2015', '1,234,563'),
(6, '\\img\\vf8.webp', 5, 'Công suất tối đa: 300kW-402hp', 'Thời gian tăng tốc từ 0-100km: <5.5s', 'Quãng đường di chuyển 1 lần sạc đầy: 400km', 'VF 8', 'Tỉ lệ thiết kế hiện đại định hình bởi triết lý “Cân bằng động”. Những khối cong mềm mại chấm phá bởi các đường cắt sắc nét tạo nên ấn tượng mạnh mẽ, mang đầy hơi thở của tương lai.', 'October 14, 2011', '1,242,455VND'),
(7, '\\img\\vf9.webp', 6, 'Công suất tối đa: 300kW-402hp', 'Thời gian tăng tốc từ 0-100km: 5.5s', 'Quãng đường di chuyển 1 lần sạc đầy: 423km', 'VF 9', 'VF 9 là mẫu xe SUV 7 chỗ hàng đầu của VinFast. Với kiểu dáng tinh tế, công nghệ tiên tiến nhất và sự tỉ mỉ trong từng chi tiết, VF 9mang đến trải nghiệm đặc biệt cao cấp cho người sở hữu.', 'September 14, 2010', '2,123,345VND'),
(8, '\\img\\fadil.png', 5, 'Công suất tối đa: 98HP', 'Động cơ: 1.4L', 'Hộp số: Biến thiên vô cấp(CVT)', 'VinFast Fadil', 'Chú trọng trải nghiệm của người dùng, Fadil mang đến khoang ngồi thoải mái bên trong một kích cỡ nhỏ gọn và đậm chất đô thị. Đồng thời tích hợp hệ thống tiện ích tiện dụng, hỗ trợ tối đa cho hành khách trên xe.', 'December 14, 2016', '2,134,664VND'),
(9, '\\img\\a2.0.png', 5, 'Công suất tối đa: 228HP', 'Động cơ: 2.0L', 'Hộp số tự động: ZF 8 cấp', 'VinFast LUX A2.0', 'Sức mạnh 228 mã lực từ khối động cơ 2.0L tăng áp, kết hợp cùng hộp số tự động 8 cấp ZF và hàng loạt công nghệ an toàn tiên tiến, LUX A 2.0 mang đến khả năng vận hành chắc chắn, tự tin cùng chủ nhân chinh phục những cột mốc thành công.', 'June 14, 2015', '2,113,554VND'),
(10, '\\img\\president2.png', 6, 'Công suất tối đa: 420HP', 'Động cơ V8: 4.2L', 'Hộp số tự động: ZF 8 cấp', 'VinFast President 2.0', 'President là chiếc SUV bề thế với thiết kế sang trọng cùng những đường gân dập nổi, lưới tản nhiệt hình kim cương ấn tượng và 18 lựa chọn màu sơn độc đáo để khẳng định khí chất riêng biệt của chủ nhân.', 'August 14, 2016', '1,999,332VND'),
(11, '\\img\\fadil2.png', 5, 'Công suất tối đa: 118HP', 'Động cơ: 2.0L', 'Hộp số: Biến thiên vô cấp(CVT)', 'VinFast Fadil 2.0', 'Các đường nét thiết kế mang hơi thở châu Âu hòa quyện cùng những điểm nhấn đặc trưng của tinh thần Việt tạo nên một mẫu hatchback lý tưởng cho đô thị, nhỏ gọn và thông minh, sẵn sàng chinh phục mọi cung đường thành phố.', 'November 14, 2016', '2,456,344VND'),
(12, '\\img\\e342.png', 4, 'Công suất tối đa: 130kW-157hp', 'Mô men xoắn cực đại: 242 Nm', 'Quãng đường di chuyển 1 lần sạc đầy: 305km', 'VF E34 2.0', 'Ứng dụng công nghệ và trang thiết bị hiện đại nhất, hệ thống trợ lái nâng cao VinFast đem lại trải nghiệm lái thư thái, dễ dàng để bạn an tâm tận hưởng cuộc sống.', 'July14, 2016', '2,456,344VND'),
(13, '\\img\\vf82.webp', 5, 'Công suất tối đa: 300kW-422hp', 'Thời gian tăng tốc từ 0-100km: 4.5s', 'Quãng đường di chuyển 1 lần sạc đầy: 420km', 'VF 8 2.0', 'Không gian nội thất tinh tế được thiết kế bởi studio danh tiếng Pininfarina, tích hợp loạt công nghệ tiên tiến giúp cho mỗi chuyến đi của bạn là một trải nghiệm đầy ấn tượng.', 'July 14, 2019', '2,345,345VND'),
(14, '\\img\\vf92.webp', 6, 'Công suất tối đa: 300kW-422hp', 'Thời gian tăng tốc từ 0-100km: 6.5s', 'Quãng đường di chuyển 1 lần sạc đầy: 500km', 'VF 9 2.0', 'Thiết kế tối giản mang hơi hướng tương lai nhưng không kém phần tinh tế từ studio danh tiếng Pininfarina đem lại trải nghiệm ấn tượng và cuốn hút từ cái nhìn đầu tiên.', 'September 14, 2016', '2,355,345VND');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `servicecenters`
--

CREATE TABLE `servicecenters` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `servicecenters`
--

INSERT INTO `servicecenters` (`id`, `name`, `address`, `status`) VALUES
(1, 'VIN3S Tôn Đức Thắng', '127-129 Tôn Đức Thắng, P. Hàng Bột, Đống Đa, Hà Nội', 0),
(2, 'VIN3S Thanh Hóa', 'Lô A1 và Lô A20 khu dân cư Khách sạn Sầm Sơn, phường Trường Sơn, TP. Sầm Sơn, Thanh Hóa', 0),
(3, 'VIN3S Vĩnh Phúc ', '288 đường Hai Bà Trưng, tổ 4, P. Hùng Vương, TP. Phúc Yên, Vĩnh Phúc', 0),
(4, 'VIN3S Hải Phòng', 'Thôn Cẩm La, xã Thanh Sơn, Huyện Kiến Thụy, TP. Hải Phòng', 0),
(5, 'VIN3S Phạm Văn Đồng', 'Số 166 Phạm Văn Đồng, Phường Xuân Đỉnh, Quận Bắc Từ Liêm, Thành phố Hà Nội', 0),
(6, 'VIN3S Bà Rịa', '50 Cách Mạng Tháng Tám, phường Long Hương, TP Bà Rịa, Bà Rịa Vũng Tàu', 0),
(7, 'VIN3S Bình Định', 'Khối Phú Xuân, Thị Trấn Phú Phong, Huyện Tây Sơn, Bình Định', 0),
(8, 'VIN3S Hồ Chí Minh', 'Tầng 1, TTTM Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, Phường Hiệp Phú, Quận 9, TP. Hồ Chí Minh', 0),
(9, 'VIN3S Bình Dương', '121 Đường DT747, Tổ 3A ấp 1, P. Hội Nghĩa, Tân Uyên, Bình Dương', 0),
(10, 'VIN3S Thái Nguyên', 'Phố Đình, Thị Trấn Hùng Sơn, Huyện Đại Từ, Thái Nguyên', 0),
(11, 'VIN3S Tôn Đức Thắng', '127-129 Tôn Đức Thắng, P. Hàng Bột, Đống Đa, Hà Nội', 0),
(12, 'VIN3S Thanh Hóa', 'Lô A1 và Lô A20 khu dân cư Khách sạn Sầm Sơn, phường Trường Sơn, TP. Sầm Sơn, Thanh Hóa', 0),
(13, 'VIN3S Vĩnh Phúc ', '288 đường Hai Bà Trưng, tổ 4, P. Hùng Vương, TP. Phúc Yên, Vĩnh Phúc', 0),
(14, 'VIN3S Hải Phòng', 'Thôn Cẩm La, xã Thanh Sơn, Huyện Kiến Thụy, TP. Hải Phòng', 0),
(15, 'VIN3S Phạm Văn Đồng', 'Số 166 Phạm Văn Đồng, Phường Xuân Đỉnh, Quận Bắc Từ Liêm, Thành phố Hà Nội', 0),
(16, 'VIN3S Bà Rịa', '50 Cách Mạng Tháng Tám, phường Long Hương, TP Bà Rịa, Bà Rịa Vũng Tàu', 0),
(17, 'VIN3S Bình Định', 'Khối Phú Xuân, Thị Trấn Phú Phong, Huyện Tây Sơn, Bình Định', 0),
(18, 'VIN3S Hồ Chí Minh', 'Tầng 1, TTTM Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, Phường Hiệp Phú, Quận 9, TP. Hồ Chí Minh', 0),
(19, 'VIN3S Bình Dương', '121 Đường DT747, Tổ 3A ấp 1, P. Hội Nghĩa, Tân Uyên, Bình Dương', 0),
(20, 'VIN3S Thái Nguyên', 'Phố Đình, Thị Trấn Hùng Sơn, Huyện Đại Từ, Thái Nguyên', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role_code` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`, `role_code`) VALUES
(1, 'admin', 'admin@gmail.com', NULL, '$2y$10$o8Tg03Vy.JGD9qsk45Fmm.JHDa7.SBQCANu.U9hAt7NKrZIEz.l1e', 'Ban điều hành', '', '2022-12-25 00:02:00', NULL, 0),
(2, 'VinFast-Hà Nội', 'agent@gmail.com', NULL, '$2y$10$DoN5rwokp6.0Lb.cJkAtAuBzTYMXNVNBdQSpWXGjJprPbxrMtsUT2', 'Đại lý phân phối', NULL, '2022-12-29 19:55:05', '2022-12-29 12:55:05', NULL),
(147, 'VIN3S Mỹ Đình', 'center@gmai.com', NULL, '$2y$10$c0bjxNohfXjEbMkDDXXNdOf.fUrUnMCEpN6gbdRZkt64xZxnscmEC', 'Trung tâm bảo hành', NULL, '2022-12-30 12:14:14', '2022-12-30 05:14:14', NULL),
(148, 'VIN3S ', 'basis@gmai.com', NULL, '$2y$10$c0bjxNohfXjEbMkDDXXNdOf.fUrUnMCEpN6gbdRZkt64xZxnscmEC', 'Cơ sở sản xuất', NULL, '2022-12-30 12:14:14', '2022-12-30 05:14:14', NULL),
(149, 'VinFast-Chevrolet Hà Nội', 'vinfast5@gmail.com', NULL, '$2y$10$xARmJ78AGL34ucYqUjOL.ODVCHUqcRTaj0zHiYy/xSEBq1slq3C.K', NULL, NULL, '2022-12-30 14:09:43', '2022-12-30 07:09:43', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `exportdetail`
--
ALTER TABLE `exportdetail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exportdetail1` (`product_code`),
  ADD KEY `exportdetail2` (`customer_code`),
  ADD KEY `FK_exportdetail_agents` (`agent_code`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `importdetail`
--
ALTER TABLE `importdetail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `importdetail1` (`product_code`),
  ADD KEY `importdetail2` (`basis_code`),
  ADD KEY `importdetail3` (`agent_code`);

--
-- Chỉ mục cho bảng `insuarancedetail`
--
ALTER TABLE `insuarancedetail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `insuarancedetail1` (`product_code`),
  ADD KEY `insuarancedetail2` (`basis_code`),
  ADD KEY `insuarancedetail3` (`agent_code`),
  ADD KEY `insuarancedetail4` (`service_center_code`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Chỉ mục cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `producedetail`
--
ALTER TABLE `producedetail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producedetail_ibfk_1` (`product_code`),
  ADD KEY `producedetail_ibfk_2` (`production_address`);

--
-- Chỉ mục cho bảng `productionbasis`
--
ALTER TABLE `productionbasis`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `productlines`
--
ALTER TABLE `productlines`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_ibfk_1` (`productline`);

--
-- Chỉ mục cho bảng `servicecenters`
--
ALTER TABLE `servicecenters`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `agents`
--
ALTER TABLE `agents`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `exportdetail`
--
ALTER TABLE `exportdetail`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `importdetail`
--
ALTER TABLE `importdetail`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `insuarancedetail`
--
ALTER TABLE `insuarancedetail`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT cho bảng `producedetail`
--
ALTER TABLE `producedetail`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT cho bảng `productlines`
--
ALTER TABLE `productlines`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `servicecenters`
--
ALTER TABLE `servicecenters`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `exportdetail`
--
ALTER TABLE `exportdetail`
  ADD CONSTRAINT `FK_exportdetail_agents` FOREIGN KEY (`agent_code`) REFERENCES `agents` (`id`),
  ADD CONSTRAINT `exportdetail1` FOREIGN KEY (`product_code`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `exportdetail2` FOREIGN KEY (`customer_code`) REFERENCES `customers` (`id`);

--
-- Các ràng buộc cho bảng `importdetail`
--
ALTER TABLE `importdetail`
  ADD CONSTRAINT `importdetail1` FOREIGN KEY (`product_code`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `importdetail2` FOREIGN KEY (`basis_code`) REFERENCES `productionbasis` (`id`),
  ADD CONSTRAINT `importdetail3` FOREIGN KEY (`agent_code`) REFERENCES `agents` (`id`);

--
-- Các ràng buộc cho bảng `insuarancedetail`
--
ALTER TABLE `insuarancedetail`
  ADD CONSTRAINT `insuarancedetail1` FOREIGN KEY (`product_code`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `insuarancedetail2` FOREIGN KEY (`basis_code`) REFERENCES `productionbasis` (`id`),
  ADD CONSTRAINT `insuarancedetail3` FOREIGN KEY (`agent_code`) REFERENCES `agents` (`id`),
  ADD CONSTRAINT `insuarancedetail4` FOREIGN KEY (`service_center_code`) REFERENCES `servicecenters` (`id`);

--
-- Các ràng buộc cho bảng `producedetail`
--
ALTER TABLE `producedetail`
  ADD CONSTRAINT `producedetail_ibfk_1` FOREIGN KEY (`product_code`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `producedetail_ibfk_2` FOREIGN KEY (`production_address`) REFERENCES `productionbasis` (`id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`productline`) REFERENCES `productlines` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
