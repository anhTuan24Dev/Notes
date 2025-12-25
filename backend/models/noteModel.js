import mongoose from "mongoose";

/**
 * Schema định nghĩa cấu trúc dữ liệu cho Note
 * Sử dụng timestamps để tự động quản lý createdAt và updatedAt
 */
const noteSchema = new mongoose.Schema(
  {
    // Nội dung của note, bắt buộc phải có
    content: {
      required: true,
      type: String,
    },
    // Tiêu đề của note, bắt buộc phải có
    title: {
      required: true,
      type: String,
    },
  },
  {
    // Tự động tạo và quản lý createdAt và updatedAt
    timestamps: true,
  },
);

/**
 * Model Note được xuất để sử dụng trong Controller
 * MongoDB sẽ tự động tạo collection có tên là "notes" (số nhiều của "Note")
 */
const Note = mongoose.model("Note", noteSchema);

export default Note;
