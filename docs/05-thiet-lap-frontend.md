# Giai đoạn 5: Thiết lập Frontend

Thiết lập React với Vite và các thư viện cần thiết để giao tiếp với backend.

## 1. Khởi tạo dự án React + Vite

```bash
cd frontend
npm create vite@latest . -- --template react
```

## 2. Cài đặt các thư viện

```bash
npm install react-router-dom axios tailwindcss @tailwindcss/vite daisyui react-hot-toast
```

- `react-router-dom`: Routing giữa các trang
- `axios`: Gọi API
- `tailwindcss` + `daisyui`: Styling nhanh gọn
- `react-hot-toast`: Thông báo

## 3. Cấu trúc thư mục dự án

```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── lib/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 4. Cấu hình Routing (`App.jsx` ví dụ):

```javascript
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CreatePage />} path="/create" />
        <Route element={<UpdatePage />} path="/edit/:id" />
      </Routes>
    </div>
  );
}
```

## 5. Cấu hình Tailwind CSS

**vite.config.js:**
```javascript
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

**index.css:**
```css
@import url("https://fonts.googleapis.com/css2?family=Inter");
@import "tailwindcss";
@plugin "daisyui";
```

## 6. Scripts trong package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```
Chạy dev server:
```bash
npm run dev
```

## 7. Kết nối Backend

Tạo file `.env` trong thư mục `frontend`:
```env
VITE_API_URL=http://localhost:5000/api
```
Truy cập qua `import.meta.env.VITE_API_URL` trong code.

## Tổng kết

Bạn đã:
- Khởi tạo React + Vite
- Cài các thư viện cần thiết
- Cấu trúc thư mục rõ ràng
- Routing & cấu hình Tailwind CSS, DaisyUI
- Sẵn sàng kết nối API

