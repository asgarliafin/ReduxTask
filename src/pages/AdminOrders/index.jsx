import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import Row from "./Row";
import createData from "./createData";

export default function AdminOrders() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("orders"));
  const RowsData = dataFromLocalStorage?.map((e) =>
    createData(e.user, e.address, e.order)
  );
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(RowsData);
  }, [dataFromLocalStorage]);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Users</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
