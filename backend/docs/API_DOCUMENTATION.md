# API Documentation - Notes Management

**Base URL:** `http://localhost:5000`

---

## 1. Lấy danh sách tất cả ghi chú

**Method:** `GET`  
**URL:** `http://localhost:5000/api/notes`

**Response 200:**
```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Tiêu đề ghi chú",
      "content": "Nội dung ghi chú",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "message": "Lấy danh sách ghi chú thành công"
}
```

---

## 2. Lấy một ghi chú theo ID

**Method:** `GET`  
**URL:** `http://localhost:5000/api/notes/:id`

**Parameters:**
- `id` (path): ID của ghi chú (MongoDB ObjectId)

**Response 200:**
```json
{
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Tiêu đề ghi chú",
    "content": "Nội dung ghi chú",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "message": "Lấy ghi chú thành công"
}
```

**Response 400 (ID không hợp lệ):**
```json
{
  "message": "ID không hợp lệ"
}
```

**Response 404 (Không tìm thấy):**
```json
{
  "message": "Không tìm thấy ghi chú"
}
```

---

## 3. Tạo ghi chú mới

**Method:** `POST`  
**URL:** `http://localhost:5000/api/notes`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Tiêu đề ghi chú",
  "content": "Nội dung ghi chú"
}
```

**Response 201:**
```json
{
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Tiêu đề ghi chú",
    "content": "Nội dung ghi chú",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "message": "Tạo ghi chú mới thành công"
}
```

**Response 400 (Thiếu thông tin):**
```json
{
  "message": "Vui lòng nhập đầy đủ thông tin"
}
```

---

## 4. Cập nhật ghi chú

**Method:** `PUT`  
**URL:** `http://localhost:5000/api/notes/:id`

**Parameters:**
- `id` (path): ID của ghi chú (MongoDB ObjectId)

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Tiêu đề đã cập nhật",
  "content": "Nội dung đã cập nhật"
}
```

**Response 200:**
```json
{
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Tiêu đề đã cập nhật",
    "content": "Nội dung đã cập nhật",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-02T00:00:00.000Z"
  },
  "message": "Cập nhật ghi chú thành công"
}
```

**Response 400:**
```json
{
  "message": "ID không hợp lệ"
}
```
hoặc
```json
{
  "message": "Vui lòng điền đầy đủ tiêu đề và nội dung"
}
```

**Response 404:**
```json
{
  "message": "Không tìm thấy ghi chú để cập nhật"
}
```

---

## 5. Xóa ghi chú

**Method:** `DELETE`  
**URL:** `http://localhost:5000/api/notes/:id`

**Parameters:**
- `id` (path): ID của ghi chú (MongoDB ObjectId)

**Response 200:**
```json
{
  "message": "Xóa thành công"
}
```

**Response 400:**
```json
{
  "message": "ID không hợp lệ"
}
```

**Response 404:**
```json
{
  "message": "Không tìm thấy ghi chú để xóa"
}
```

---

## Mã trạng thái HTTP

- `200` - Thành công
- `201` - Tạo mới thành công
- `400` - Lỗi dữ liệu đầu vào
- `404` - Không tìm thấy
- `500` - Lỗi server

---

## Lưu ý

- Tất cả các request POST và PUT cần header `Content-Type: application/json`
- ID phải là MongoDB ObjectId hợp lệ
- Ghi chú được sắp xếp theo thời gian tạo mới nhất (createdAt: -1)

