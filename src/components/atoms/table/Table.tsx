import React from "react";
import { Table as MUITable } from "@mui/material";

export const Table = ({
  rowHeight = "auto",
  children,
}: {
  rowHeight: "auto" | "standard" | "compact" | "dense";
  children: React.ReactNode;
}) => (
  <MUITable
    sx={{
      position: "relative",
      backgroundColor: "black",
      "& tbody tr": {
        height: (theme) =>
          ({
            auto: "auto",
            standard: theme.shape.tableRowHeight,
            compact: theme.shape.tableRowHeightCompact,
            dense: theme.shape.tableRowHeightDense,
          }[rowHeight] ?? rowHeight),
      },
    }}
  >
    {children}
  </MUITable>
);

export default Table;
