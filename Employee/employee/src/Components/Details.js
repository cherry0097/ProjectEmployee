import React, { useState, useMemo, useEffect } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./Columns";

function Details() {
  const [mockdata, setMockData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    getData();
  }, []);

  async function getData() {
    const url = "http://localhost:3000/details";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setMockData(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockdata, [mockdata]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Details;
