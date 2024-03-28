import { useEffect, useState } from "react";

import WebSideBar from "../../components/sidebar/SideBar";
import WebTable from "../../components/table/Table";

function HomePage() {
  return (
    <div>
      <div
        style={{
          display: "inline-grid",
          width: "20%",
        }}
      >
        <WebSideBar />
      </div>
      <div style={{ display: "inline-grid", width: "80%" }}>
        <h1>Danh sách điểm danh</h1>
        <WebTable />
      </div>
    </div>
  );
}

export default HomePage;
