import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import WebColors from "../../assets/colors";
function WebSideBar() {
  const userRaw = localStorage.getItem("user") ?? "{}";
  const user = JSON.parse(userRaw);
  const fullName = user["user"]["fullName"];
  const [indexSelect, setIndexSelect] = useState(0);
  const menus = [
    { label: "Danh sách điểm danh", to: "/home" },
    { label: "Xác nhận điểm danh", to: "/home" },
  ];
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar style={{ width: "20%" }}>
        <Menu>
          <MenuItem className="menu1" style={{ height: "150px" }}>
            <h3>
              Xin chào thầy/cô <br />
              <div style={{ color: WebColors.colorMain }}>{fullName}</div>
            </h3>
          </MenuItem>
          {menus.map((item, index) => (
            <MenuItem
              style={{
                backgroundColor:
                  index == indexSelect ? WebColors.colorMain : undefined,
                color: index == indexSelect ? "white" : "black",
              }}
              component={<Link to={item.to} />}
              onClick={() => {
                setIndexSelect(index);
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
}
export default WebSideBar;
