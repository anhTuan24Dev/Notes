# Giai đoạn 4: Hoàn thiện Logic Backend (CRUD)

Biến các "endpoint giả" thành các chức năng thực tế tương tác với MongoDB.

## 1. Middleware xử lý JSON
Trong `server.js`, thêm:
```javascript
app.use(express.json()); // Cho phép đọc dữ liệu JSON từ req.body
```

## 2. Logic Controller (`controllers/noteController.js`)

### GET - Lấy danh sách (Read)
- **Hàm:** `Note.find({}).sort({ createdAt: -1 })`.
- **Phản hồi:** 200 OK + mảng ghi chú.

### POST - Tạo mới (Create)
- **Dữ liệu:** Lấy `title`, `content` từ `req.body`.
- **Validation:** Trả về 400 nếu thiếu thông tin.
- **Lưu trữ:** `const newNote = new Note({ title, content }); await newNote.save();`.
- **Phản hồi:** 201 Created + thông tin ghi chú.

### PUT - Cập nhật (Update)
- **Xác định:** Lấy `id` từ `req.params.id` và dữ liệu từ `req.body`.
- **Hàm:** `Note.findByIdAndUpdate(id, data, { new: true })`.
- **Phản hồi:** 200 OK (hoặc 404 nếu không tìm thấy ID).

### DELETE - Xóa (Delete)
- **Hàm:** `Note.findByIdAndDelete(id)`.
- **Phản hồi:** 200 OK + Thông báo thành công (hoặc 404 nếu không tìm thấy ID).

## 3. Xử lý lỗi & Kiểm tra
- **Error Handling:** Bọc tất cả controller trong `try...catch`. Trả về 500 nếu có lỗi hệ thống.
- **Kiểm tra (Testing):** Sử dụng Postman/Thunder Client để test quy trình: `POST (tạo) -> GET (xem) -> PUT (sửa) -> DELETE (xóa)`.
