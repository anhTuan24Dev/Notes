# Giai đoạn 2: Xây dựng cấu trúc API & Controller

Giai đoạn này tập trung vào việc định hình cách ứng dụng xử lý yêu cầu và tổ chức mã nguồn chuyên nghiệp.

## 1. Kiến trúc Client-Server & REST API
- **Mô hình:** Client (Frontend) gửi Request -> Server (Backend) trả về Response.
- **HTTP Methods:**
  - `GET`: Lấy dữ liệu.
  - `POST`: Tạo mới dữ liệu.
  - `PUT`: Cập nhật dữ liệu.
  - `DELETE`: Xóa dữ liệu.
- **Status Codes:** `200` (Success), `201` (Created), `400` (Bad Request), `404` (Not Found), `500` (Server Error).

## 2. Cấu trúc thư mục
Tách biệt mã nguồn để dễ quản lý:
- `routes/`: Định nghĩa các đường dẫn URL (Endpoints).
- `controllers/`: Chứa logic xử lý thực tế cho các routes.

## 3. Quy trình thực hiện
1. **Routing:** Tạo `routes/noteRoute.js`, sử dụng `express.Router()` định nghĩa các endpoint giả (Mock Endpoints) để test.
2. **Controller:** Tạo `controllers/noteController.js`, tách các hàm xử lý (`getNotes`, `createNote`, `updateNote`, `deleteNote`) từ file route sang đây.
3. **Kết nối:** Import và sử dụng middleware trong `server.js`: `app.use('/api/notes', noteRoutes)`.
4. **Kiểm tra:** Sử dụng Postman hoặc Thunder Client để test các phương thức GET, POST, PUT, DELETE.
