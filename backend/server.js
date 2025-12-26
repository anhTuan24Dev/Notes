import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import noteRoutes from "./routes/noteRoute.js";

// Cấu hình biến môi trường
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối database MongoDB
connectDB();

// Middleware để parse JSON từ request body
app.use(express.json());
app.use(cors()); // Cho phép truy cập từ origin khác (CORS)

// Route kiểm tra backend
app.get("/", (_req, res) => {
  res.send("Server đã sẵn sàng");
});

// Kết nối router cho các route liên quan đến ghi chú
app.use("/api/notes", noteRoutes);

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
