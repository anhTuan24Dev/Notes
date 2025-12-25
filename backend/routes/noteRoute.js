import express from "express";
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
  updateNote,
} from "../controllers/noteController.js";

// Tạo router instance
const router = express.Router();

// Định nghĩa các endpoint cho ghi chú

// GET /api/notes - Lấy danh sách tất cả ghi chú
router.get("/", getNotes);

// GET /api/notes/:id - Lấy một ghi chú theo ID
router.get("/:id", getNoteById);

// POST /api/notes - Tạo ghi chú mới
router.post("/", createNote);

// PUT /api/notes/:id - Cập nhật ghi chú theo ID
router.put("/:id", updateNote);

// DELETE /api/notes/:id - Xóa ghi chú theo ID
router.delete("/:id", deleteNote);

export default router;
