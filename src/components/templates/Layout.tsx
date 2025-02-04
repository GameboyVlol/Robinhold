import React from "react";
import { Box } from "@mui/material";
import Topbar from "../organisms/Topbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <main className="content">
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Topbar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80rem",
              margin: "2rem auto",
            }}
          >
            <React.Suspense fallback={<div>Loading...</div>}>
              {children}
            </React.Suspense>
          </Box>
        </Box>
      </main>
    </div>
  );
}

export default Layout;
