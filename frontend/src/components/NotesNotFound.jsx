import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

// Component NotesNotFound - Hiển thị khi không có notes nào
const NotesNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 mx-auto py-16 max-w-md text-center">
      {/* Container icon với background primary/10 và bo tròn */}
      <div className="bg-primary/10 p-8 rounded-full">
        {/* Icon notebook với màu primary */}
        <NotebookIcon className="size-10 text-primary" />
      </div>
      {/* Tiêu đề */}
      <h3 className="font-bold text-2xl">Chưa có ghi chú nào</h3>
      {/* Mô tả */}
      <p className="text-base-content/70">
        Sẵn sàng để tổ chức suy nghĩ của bạn? Tạo ghi chú đầu tiên để bắt đầu
        hành trình của bạn.
      </p>
      {/* Link đến trang tạo note mới */}
      <Link className="btn btn-primary" to="/create">
        Tạo ghi chú đầu tiên
      </Link>
    </div>
  );
};

export default NotesNotFound;
