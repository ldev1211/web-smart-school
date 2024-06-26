import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import WebColors from "../../assets/colors";

var student: {
  id: string;
  password: string;
  fullName: string;
  birthDay: string;
  gioiTinh: number;
  avt: string;
  class: string;
}[] = [];

function WebTableStudent(
  students: {
    id: string;
    password: string;
    img: string;
    fullName: string;
    birthDay: string;
    gioiTinh: number;
    avt: string;
    class: string;
  }[]
) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: WebColors.colorMain }}>
          <TableRow>
            <TableCell style={{ color: "white" }}>STT</TableCell>
            <TableCell style={{ color: "white" }}>Mã sinh viên</TableCell>
            <TableCell style={{ color: "white" }}>Họ và tên</TableCell>
            <TableCell style={{ color: "white" }}>Lớp</TableCell>
            <TableCell style={{ color: "white" }}>Ngày sinh</TableCell>
            <TableCell style={{ color: "white" }}>Giới tính</TableCell>
            <TableCell style={{ color: "white" }}>Ảnh điểm danh</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students!.map((student, index) => (
            <TableRow
              key={student.id + student.fullName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell>{student.fullName}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.birthDay}</TableCell>
              <TableCell>{student.gioiTinh === 0 ? "Nam" : "Nữ"}</TableCell>
              <img
                src={student.img}
                alt="new"
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WebTableStudent;
