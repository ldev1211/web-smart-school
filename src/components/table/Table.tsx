import axios from "axios";
import WebColors from "../../assets/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function createData(
  id: string,
  name: string,
  day: string,
  img: string,
  date: string,
  time: string,
  room: string
) {
  return { id, name, day, img, date, time, room };
}
var rows: {
  id: string;
  name: string;
  day: string;
  img: string;
  date: string;
  time: string;
  room: string;
}[] = [];
function WebTable() {
  const [isLoading, setLoading] = useState(true);
  const userRaw = localStorage.getItem("user") ?? "{}";
  const user = JSON.parse(userRaw);
  const accessToken = user["accessToken"];
  const navigate = useNavigate();
  useEffect(() => {
    const userRaw = localStorage.getItem("user") ?? "{}";
    const user = JSON.parse(userRaw);
    const accessToken = user["accessToken"];
    axios({
      url: "http://localhost:3000/teacher/attendance/get_attendance",
      method: "GET",
      headers: {
        authorization: "Bearer " + accessToken,
      },
    }).then((response) => {
      rows = [];
      if (!response.data["error"]) {
        const attendances = response.data["data"];
        for (let i = 0; i < attendances.length; ++i) {
          const attendance = attendances[i];
          if (attendance.isConfirmed === 1) {
            rows.push(
              createData(
                attendance.idAttendance,
                attendance.subjectName,
                attendance.day,
                attendance.img,
                attendance.date,
                attendance.timeLearn,
                attendance.room
              )
            );
          }
        }
        setLoading(false);
      }
    });
  });
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tên môn học</TableCell>
            <TableCell align="center">Thứ</TableCell>
            <TableCell align="center">Ngày</TableCell>
            <TableCell align="center">Giờ học</TableCell>
            <TableCell align="center">Phòng</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        {isLoading ? (
          <CircularProgress style={{ color: WebColors.colorMain }} />
        ) : (
          <TableBody>
            {rows!.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.day}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">{row.room}</TableCell>
                <TableCell align="center">
                  <input
                    type="button"
                    value="Xem danh sách"
                    style={{
                      backgroundColor: WebColors.colorMain,
                      borderRadius: "8px",
                      color: "white",
                      border: "none",
                      padding: "8px 8px",
                    }}
                    onClick={() => {
                      axios({
                        method: "GET",
                        headers: {
                          authorization: "Bearer " + accessToken,
                        },
                        url:
                          "http://localhost:3000/teacher/attendance/get_detail_attendance/" +
                          row.id,
                      }).then((response) => {
                        if (!response.data["error"]) {
                          console.log(response.data["data"]);
                          navigate("/student", {
                            state: {
                              students: response.data["data"],
                            },
                          });
                        } else {
                          toast.error("Xác nhận danh sách thất bại.", {
                            position: "bottom-right",
                            autoClose: 2000,
                          });
                        }
                      });
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
export default WebTable;
