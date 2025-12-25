import mongoose from "mongoose";
import Note from "../models/noteModel.js";

/**
 * Lấy danh sách tất cả ghi chú
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const getNotes = async (_req, res) => {
  try {
    // Lấy tất cả ghi chú từ database, sắp xếp theo thời gian tạo mới nhất
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json({
      data: notes,
      message: "Lấy danh sách ghi chú thành công",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Lỗi khi lấy danh sách ghi chú",
    });
  }
};

/**
 * Lấy một ghi chú theo ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    // Kiểm tra ID có hợp lệ không
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "ID không hợp lệ",
      });
    }

    // Tìm ghi chú theo ID
    const note = await Note.findById(id);

    // Kiểm tra nếu không tìm thấy ghi chú
    if (!note) {
      return res.status(404).json({
        message: "Không tìm thấy ghi chú",
      });
    }

    res.status(200).json({
      data: note,
      message: "Lấy ghi chú thành công",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Lỗi khi lấy ghi chú",
    });
  }
};

/**
 * Tạo ghi chú mới
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!title || !content) {
      return res.status(400).json({
        message: "Vui lòng nhập đầy đủ thông tin",
      });
    }

    // Khởi tạo object mới từ Model
    const newNote = new Note({
      content,
      title,
    });

    // Lưu vào database
    const note = await newNote.save();

    res.status(201).json({
      data: note,
      message: "Tạo ghi chú mới thành công",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Lỗi khi tạo ghi chú",
    });
  }
};

/**
 * Cập nhật ghi chú theo ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // Kiểm tra ID có hợp lệ không
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "ID không hợp lệ",
      });
    }

    // Kiểm tra dữ liệu đầu vào
    if (!title || !content) {
      return res.status(400).json({
        message: "Vui lòng điền đầy đủ tiêu đề và nội dung",
      });
    }

    // Tìm và cập nhật ghi chú
    const note = await Note.findByIdAndUpdate(
      id,
      {
        content,
        title,
      },
      {
        new: true, // Trả về document sau khi cập nhật
        runValidators: true, // Chạy validation
      },
    );

    // Kiểm tra nếu không tìm thấy ghi chú
    if (!note) {
      return res.status(404).json({
        message: "Không tìm thấy ghi chú để cập nhật",
      });
    }

    res.status(200).json({
      data: note,
      message: "Cập nhật ghi chú thành công",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Lỗi khi cập nhật ghi chú",
    });
  }
};

/**
 * Xóa ghi chú theo ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    // Kiểm tra ID có hợp lệ không
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "ID không hợp lệ",
      });
    }

    // Tìm và xóa ghi chú
    const note = await Note.findByIdAndDelete(id);

    // Kiểm tra nếu không tìm thấy ghi chú
    if (!note) {
      return res.status(404).json({
        message: "Không tìm thấy ghi chú để xóa",
      });
    }

    res.status(200).json({
      message: "Xóa thành công",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Lỗi khi xóa ghi chú",
    });
  }
};
