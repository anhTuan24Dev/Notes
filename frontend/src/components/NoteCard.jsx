import { PenSquareIcon, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import api from "../lib/axios";
import { formatDate } from "../lib/utils";

// Component NoteCard - Hiển thị thông tin của một note trong dạng card
const NoteCard = ({ note, setNotes }) => {
  // Hàm handleDelete - Xử lý việc xóa note
  const handleDelete = async (e, id) => {
    e.preventDefault(); // Ngăn chặn hành vi điều hướng mặc định của Link

    // Hiển thị hộp thoại xác nhận trước khi xóa
    if (!window.confirm("Bạn có chắc chắn muốn xóa ghi chú này không?")) return;

    try {
      // Gọi API để xóa note
      await api.delete(`/notes/${id}`);
      // Cập nhật danh sách notes bằng cách loại bỏ note đã xóa
      setNotes((prev) => prev.filter((note) => note._id !== id));
      // Hiển thị thông báo thành công
      toast.success("Xóa ghi chú thành công");
    } catch (error) {
      console.log("Error in handleDelete", error);
      // Hiển thị thông báo lỗi
      toast.error("Xóa ghi chú thất bại");
    }
  };

  return (
    // Link đến trang chi tiết note với các class styling
    <Link
      className="bg-base-100 hover:shadow-lg border-[#00FF9D] border-t-4 border-solid transition-all duration-200 card"
      to={`/note/${note._id}`}
    >
      {/* Card body chứa nội dung của note */}
      <div className="card-body">
        {/* Tiêu đề note */}
        <h3 className="text-base-content card-title">{note.title}</h3>
        {/* Nội dung note, giới hạn hiển thị 3 dòng */}
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        {/* Container cho các action và thông tin ngày tạo */}
        <div className="justify-between items-center mt-4 card-actions">
          {/* Hiển thị ngày tạo note đã được format */}
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          {/* Container cho các icon action */}
          <div className="flex items-center gap-1">
            {/* Icon chỉnh sửa */}
            <PenSquareIcon className="size-4" />
            {/* Nút xóa với style ghost và màu error */}
            <button
              className="text-error btn btn-ghost btn-xs"
              onClick={(e) => handleDelete(e, note._id)}
              type="button"
            >
              {/* Icon thùng rác */}
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;
