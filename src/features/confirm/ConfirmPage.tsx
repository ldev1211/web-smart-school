import WebSideBar from "../../components/sidebar/SideBar";
import WebTableUnConfirm from "../../components/table/TableUnConfirm";

function ConfirmPage() {
  return (
    <div>
      <div
        style={{
          display: "inline-grid",
          width: "20%",
        }}
      >
        {WebSideBar(1)}
      </div>
      <div style={{ display: "inline-grid", width: "80%" }}>
        <h1>Danh sách điểm danh chưa được xác nhận</h1>
        <WebTableUnConfirm />
      </div>
    </div>
  );
}

export default ConfirmPage;
