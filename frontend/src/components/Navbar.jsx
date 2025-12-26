import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

// Component Navbar - Thanh điều hướng chính của ứng dụng
const Navbar = () => {
  return (
    // Header với background màu base-300 và border phía dưới
    <header className="bg-base-300 border-base-content/10 border-b">
      {/* Container chính với padding và max-width để giới hạn chiều rộng */}
      <div className="mx-auto p-4 max-w-6xl">
        {/* Flex container để căn chỉnh các phần tử theo chiều ngang */}
        <div className="flex justify-between items-center">
          {/* Tiêu đề ứng dụng với font mono, màu primary và kích thước lớn */}
          <h1 className="font-mono font-bold text-primary text-3xl tracking-tight">
            Bảng Ghi Chú
          </h1>
          {/* Container cho các nút điều hướng */}
          <div className="flex items-center gap-4">
            {/* Link đến trang tạo note mới với style button primary */}
            <Link className="btn btn-primary" to={"/create"}>
              {/* Icon dấu cộng với kích thước 5 */}
              <PlusIcon className="size-5" />
              {/* Text hiển thị "New Note" */}
              <span>Ghi chú mới</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
