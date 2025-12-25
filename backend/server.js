import dotenv from "dotenv";
import express from "express";

// Cấu hình biến môi trường
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Route kiểm tra backend
app.get("/", (_req, res) => {
  res.send("Server đã sẵn sàng");
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
