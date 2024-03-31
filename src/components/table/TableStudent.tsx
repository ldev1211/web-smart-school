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
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell>Mã sinh viên</TableCell>
            <TableCell>Họ và tên</TableCell>
            <TableCell>Lớp</TableCell>
            <TableCell>Ngày sinh</TableCell>
            <TableCell>Giới tính</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WebTableStudent;
