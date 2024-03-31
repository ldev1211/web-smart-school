import { useLocation, useNavigate } from "react-router-dom";
import WebTableStudent from "../../components/table/TableStudent";

function StudentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  let students = location.state.students;
  return (
    <div style={{ padding: "24px" }}>
      <div
        onClick={() => {
          navigate(-1);
        }}
        style={{
          display: "inline-block",
          fontSize: "40px",
          alignSelf: "center",
          margin: "24px",
        }}
      >
        {"<"}
      </div>
      <h3 style={{ display: "inline-block" }}>Danh sách điểm danh</h3>
      {WebTableStudent(students)}
    </div>
  );
}

export default StudentPage;
