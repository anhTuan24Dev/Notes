# Giai đoạn 1: Giới thiệu & Khởi tạo Backend

## Mục lục
1. [Giới thiệu về MERN Stack](#1-giới-thiệu-về-mern-stack)
2. [Thiết lập môi trường và Dự án](#2-thiết-lập-môi-trường-và-dự-án)
3. [Cài đặt các thư viện Backend cơ bản](#3-cài-đặt-các-thư-viện-backend-cơ-bản)
4. [Xây dựng Server đầu tiên](#4-xây-dựng-server-đầu-tiên)
5. [Cấu hình Script chạy dự án](#5-cấu-hình-script-chạy-dự-án)

---

## 1. Giới thiệu về MERN Stack

### 1.1. Định nghĩa

**MERN Stack** là một bộ công nghệ phổ biến để xây dựng ứng dụng web full-stack, bao gồm:

- **MongoDB**: Cơ sở dữ liệu NoSQL, lưu trữ dữ liệu dưới dạng document (tài liệu)
- **Express.js**: Framework web cho Node.js, giúp xây dựng API và xử lý các request HTTP
- **React**: Thư viện JavaScript phía frontend để xây dựng giao diện người dùng động
- **Node.js**: Môi trường runtime JavaScript phía server, cho phép chạy JavaScript trên máy chủ

### 1.2. Mô hình hoạt động

```
┌─────────────┐         HTTP Request/Response         ┌─────────────┐
│   Client    │ ◄──────────────────────────────────► │   Server    │
│   (React)   │                                       │ (Node.js/   │
│             │                                       │  Express)   │
└─────────────┘                                       └──────┬──────┘
                                                              │
                                                              │ Database
                                                              │ Queries
                                                              │
                                                      ┌───────▼───────┐
                                                      │   MongoDB     │
                                                      │   Database   │
                                                      └───────────────┘
```

**Luồng hoạt động:**

1. **Client (React)** gửi HTTP request đến **Server (Node.js/Express)**
2. **Server** nhận request, xử lý logic nghiệp vụ
3. **Server** tương tác với **Database (MongoDB)** để lấy/lưu dữ liệu
4. **Server** trả về HTTP response cho **Client**
5. **Client** nhận response và cập nhật giao diện

**Ví dụ luồng dữ liệu:**
- Client gửi GET request: `GET /api/notes`
- Server nhận request và truy vấn MongoDB
- MongoDB trả về danh sách notes
- Server format dữ liệu và gửi JSON response về Client
- Client hiển thị danh sách notes trên giao diện

---

## 2. Thiết lập môi trường và Dự án

### 2.1. Cài đặt Node.js

**Bước 1:** Kiểm tra Node.js đã được cài đặt

Mở terminal/command prompt và chạy lệnh:

```bash
node --version
npm --version
```

Nếu hiển thị số phiên bản (ví dụ: `v20.10.0`), nghĩa là Node.js đã được cài đặt.

**Bước 2:** Nếu chưa có Node.js

- Truy cập [nodejs.org](https://nodejs.org/)
- Tải và cài đặt phiên bản LTS (Long Term Support)
- Sau khi cài đặt, khởi động lại terminal và kiểm tra lại

**Lưu ý:** npm (Node Package Manager) được cài đặt tự động cùng với Node.js.

### 2.2. Khởi tạo dự án

**Bước 1:** Tạo thư mục gốc cho dự án

```bash
mkdir Notes
cd Notes
```

**Bước 2:** Tạo thư mục backend

```bash
mkdir backend
cd backend
```

**Bước 3:** Khởi tạo dự án Node.js

```bash
npm init -y
```

Lệnh này sẽ tạo file `package.json` với cấu trúc mặc định:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**Giải thích:**
- `package.json` là file quản lý thông tin dự án và các thư viện phụ thuộc
- `-y` flag tự động chấp nhận các giá trị mặc định

### 2.3. Cấu hình ES Modules

**Thay đổi cấu hình trong `package.json`:**

Thêm dòng `"type": "module"` vào `package.json`:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**Lợi ích của ES Modules:**
- Sử dụng cú pháp `import/export` hiện đại thay vì `require/module.exports`
- Hỗ trợ tốt hơn cho tree-shaking và tối ưu hóa
- Chuẩn JavaScript hiện đại

**Ví dụ so sánh:**

```javascript
// CommonJS (cũ)
const express = require('express');
module.exports = app;

// ES Modules (mới)
import express from 'express';
export default app;
```

---

## 3. Cài đặt các thư viện Backend cơ bản

### 3.1. Express

**Cài đặt:**

```bash
npm install express
```

**Giải thích:**
- Express là framework web phổ biến nhất cho Node.js
- Cung cấp các tính năng mạnh mẽ để xây dựng API và web server
- Hỗ trợ routing, middleware, template engine, và nhiều tính năng khác

**Sau khi cài đặt:**
- Express được thêm vào `dependencies` trong `package.json`
- Thư mục `node_modules` được tạo để chứa các package đã cài đặt
- File `package-lock.json` được tạo để khóa phiên bản các package

### 3.2. Nodemon

**Cài đặt:**

```bash
npm install --save-dev nodemon
```

**Giải thích:**
- `--save-dev` flag cài đặt package vào `devDependencies` (chỉ dùng trong quá trình phát triển)
- Nodemon tự động khởi động lại server khi phát hiện thay đổi trong code
- Tiết kiệm thời gian vì không cần dừng và khởi động lại server thủ công

**Cách hoạt động:**
1. Bạn chạy server bằng nodemon
2. Khi bạn lưu file `.js`, nodemon phát hiện thay đổi
3. Nodemon tự động khởi động lại server
4. Thay đổi được áp dụng ngay lập tức

### 3.3. Dotenv

**Cài đặt:**

```bash
npm install dotenv
```

**Giải thích:**
- Dotenv giúp quản lý các biến môi trường từ file `.env`
- Bảo mật: Không lưu thông tin nhạy cảm (mật khẩu, API keys) trong code
- Linh hoạt: Dễ dàng thay đổi cấu hình giữa các môi trường (development, production)

**Cách sử dụng:**

1. Tạo file `.env` trong thư mục backend:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notes
JWT_SECRET=your-secret-key
```

2. Load biến môi trường trong code:

```javascript
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
```

**Lưu ý quan trọng:**
- Thêm `.env` vào `.gitignore` để không commit file này lên Git
- Tạo file `.env.example` để làm mẫu cho các developer khác

---

## 4. Xây dựng Server đầu tiên

### 4.1. Tạo file server.js

Tạo file `server.js` trong thư mục backend. Đây là điểm khởi đầu (entry point) của ứng dụng.

### 4.2. Thiết lập mã nguồn

**Bước 1:** Import thư viện Express

```javascript
import express from 'express';
import dotenv from 'dotenv';
```

**Bước 2:** Cấu hình biến môi trường

```javascript
dotenv.config();
```

**Bước 3:** Khởi tạo ứng dụng Express

```javascript
const app = express();
```

**Giải thích:**
- `express()` tạo một instance của ứng dụng Express
- Instance này được sử dụng để định nghĩa routes và middleware

**Bước 4:** Định nghĩa cổng (Port)

```javascript
const PORT = process.env.PORT || 5000;
```

**Giải thích:**
- Ưu tiên lấy PORT từ biến môi trường (nếu có)
- Nếu không có, sử dụng giá trị mặc định là 5000
- Cho phép linh hoạt cấu hình port giữa các môi trường khác nhau

### 4.3. Tạo Route kiểm tra

**Định nghĩa route GET cơ bản:**

```javascript
app.get('/', (_req, res) => {
  res.send('Server đã sẵn sàng');
});
```

**Giải thích:**
- `app.get()` định nghĩa route xử lý GET request
- Tham số đầu tiên `'/'` là đường dẫn (path) của route
- Tham số thứ hai là callback function nhận 2 tham số:
  - `_req` (request): Thông tin về HTTP request (dấu `_` cho biết không sử dụng)
  - `res` (response): Object để gửi response về client
- `res.send()` gửi text response về client

**Kiểm tra route:**

Sau khi khởi động server, mở trình duyệt và truy cập:
```
http://localhost:5000
```

Bạn sẽ thấy dòng chữ "Server đã sẵn sàng" - điều này xác nhận backend đang hoạt động bình thường.

### 4.4. Lắng nghe kết nối

**Khởi chạy server:**

```javascript
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
```

**Giải thích:**
- `app.listen()` bắt đầu lắng nghe các kết nối đến server
- Tham số đầu tiên là PORT mà server sẽ lắng nghe
- Tham số thứ hai là callback function chạy khi server đã sẵn sàng
- `console.log()` in thông báo ra terminal để xác nhận server đã khởi động

**Kết quả:**

Khi chạy server, bạn sẽ thấy thông báo trong terminal:
```
Server đang chạy tại http://localhost:5000
```

### 4.5. Code hoàn chỉnh của server.js

```javascript
import dotenv from 'dotenv';
import express from 'express';

// Cấu hình biến môi trường
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Route kiểm tra backend
app.get('/', (_req, res) => {
  res.send('Server đã sẵn sàng');
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
```

---

## 5. Cấu hình Script chạy dự án

### 5.1. Chỉnh sửa package.json

Thêm script `dev` vào phần `scripts` trong `package.json`:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "dotenv": "^17.2.3",
    "express": "^5.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}
```

**Giải thích các scripts:**

- **`dev`**: Chạy server với nodemon (tự động restart khi có thay đổi) - dùng cho development
- **`start`**: Chạy server với node thông thường - dùng cho production
- **`test`**: Script mặc định cho testing (có thể cấu hình sau)

### 5.2. Chạy dự án

**Chạy ở chế độ development:**

```bash
npm run dev
```

**Kết quả:**
- Server khởi động và chạy tại `http://localhost:5000`
- Nodemon theo dõi các file `.js` trong thư mục
- Khi bạn lưu file, server tự động restart
- Terminal hiển thị thông báo mỗi khi server restart

**Chạy ở chế độ production:**

```bash
npm start
```

**Lưu ý:**
- Trong production, không nên dùng nodemon
- Sử dụng process manager như PM2 để quản lý ứng dụng Node.js

### 5.3. Kiểm tra hoạt động

1. **Kiểm tra server đã chạy:**
   - Mở trình duyệt và truy cập `http://localhost:5000`
   - Bạn sẽ thấy: "Server đã sẵn sàng"

2. **Kiểm tra auto-reload:**
   - Thay đổi nội dung trong `server.js` (ví dụ: đổi message)
   - Lưu file
   - Quan sát terminal - server sẽ tự động restart
   - Refresh trình duyệt để thấy thay đổi

---

## Tổng kết

Sau khi hoàn thành giai đoạn này, bạn đã:

- Hiểu về kiến trúc MERN Stack
- Thiết lập môi trường phát triển với Node.js
- Khởi tạo dự án backend với ES Modules
- Cài đặt các thư viện cần thiết (Express, Nodemon, Dotenv)
- Xây dựng server Express đầu tiên với route cơ bản
- Cấu hình script để chạy dự án dễ dàng

---

## Tài liệu tham khảo

- [Node.js Documentation](https://nodejs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [React Documentation](https://react.dev/)

