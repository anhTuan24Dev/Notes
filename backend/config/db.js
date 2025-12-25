import mongoose from "mongoose";

/**
 * Kết nối đến MongoDB database
 * Sử dụng MONGO_URI từ biến môi trường
 */
export const connectDB = async () => {
  try {
    // Kết nối đến MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB đã kết nối: ${conn.connection.host}`);
  } catch (error) {
    // Bắt và xử lý lỗi kết nối
    console.error(`Lỗi kết nối MongoDB: ${error.message}`);
    // Thoát process nếu không kết nối được database
    process.exit(1);
  }
};
