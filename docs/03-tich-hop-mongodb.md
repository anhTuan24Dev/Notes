# Giai đoạn 3: Tích hợp Cơ sở dữ liệu (MongoDB)

Chuyển ứng dụng từ dữ liệu tạm thời sang lưu trữ vĩnh viễn với MongoDB.

## 1. Thiết lập MongoDB Atlas
- **Khởi tạo:** Tạo tài khoản, tạo Shared Cluster miễn phí.
- **Bảo mật:** 
  - Tạo Database User (User/Pass).
  - Cấu hình Network Access (Allow Access from Anywhere).
- **Kết nối:** Lấy chuỗi `Connection String`.

## 2. Cấu hình Môi trường & Mongoose
- **Biến môi trường:** Lưu `MONGO_URI` vào file `.env`. Thêm `.env` vào `.gitignore`.
- **Cài đặt:** `npm install mongoose`.
- **Kết nối:** Viết hàm kết nối trong `config/db.js` (sử dụng `mongoose.connect`). Gọi hàm này trong `server.js`.

## 3. Schema & Model
Định nghĩa cấu trúc dữ liệu trong `models/noteModel.js`:
- **Fields:** `title` (String, required), `content` (String, required).
- **Options:** `{ timestamps: true }` để tự động quản lý `createdAt` và `updatedAt`.

## 4. Kiểm tra
- Chạy `npm run dev`.
- Kiểm tra log terminal: "MongoDB connected".
- Kiểm tra trên MongoDB Atlas để xác nhận dữ liệu đã được tạo.
