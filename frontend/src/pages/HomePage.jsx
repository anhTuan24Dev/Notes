import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
import api from "../lib/axios";

// Component HomePage - Trang chủ hiển thị danh sách tất cả các notes
const HomePage = () => {
  // State quản lý danh sách notes
  const [notes, setNotes] = useState([]);
  // State quản lý trạng thái loading
  const [loading, setLoading] = useState(true);

  // useEffect để fetch danh sách notes khi component mount
  useEffect(() => {
    // Hàm fetchNotes - Gọi API để lấy danh sách notes
    const fetchNotes = async () => {
      try {
        // Gọi API GET /notes để lấy danh sách notes
        const res = await api.get("/notes");

        // Xử lý dữ liệu trả về - kiểm tra nếu là array hoặc object có property data/notes
        let notesData = res.data;
        if (!Array.isArray(notesData)) {
          // Nếu không phải array, thử lấy từ các property phổ biến
          notesData = res.data?.data || res.data?.notes || [];
        }

        // Cập nhật state notes với dữ liệu từ API
        setNotes(Array.isArray(notesData) ? notesData : []);
      } catch {
        // Hiển thị thông báo lỗi khi không thể tải notes
        toast.error("Không thể tải danh sách ghi chú");
        // Đặt notes về mảng rỗng khi có lỗi
        setNotes([]);
      } finally {
        // Đặt loading về false sau khi hoàn thành (thành công hoặc thất bại)
        setLoading(false);
      }
    };

    // Gọi hàm fetchNotes khi component mount
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Container chính với max-width và padding */}
      <div className="mx-auto mt-6 p-4 max-w-7xl">
        {/* Hiển thị loading state */}
        {loading && (
          <div className="py-10 text-primary text-center">
            Đang tải ghi chú...
          </div>
        )}

        {/* Hiển thị NotesNotFound khi không có notes và không đang loading */}
        {!loading && notes.length === 0 && <NotesNotFound />}

        {/* Hiển thị grid các NoteCard khi có notes */}
        {!loading && notes.length > 0 && (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
