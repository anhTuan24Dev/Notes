// Hàm formatDate - Chuyển đổi đối tượng Date thành chuỗi định dạng ngày tháng
export const formatDate = (date) => {
  // Tạo đối tượng Intl.DateTimeFormat với locale tiếng Việt và các tùy chọn định dạng
  return new Intl.DateTimeFormat("vi-VN", {
    day: "numeric", // Hiển thị ngày
    month: "long", // Hiển thị tên tháng đầy đủ
    year: "numeric", // Hiển thị năm đầy đủ
  }).format(date);
};
