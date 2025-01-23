import React from 'react'; 
import {Box} from '@mui/material';
import MainSidebar from "../organisms/MainSidebar";
import Topbar from "../organisms/Topbar";

function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className="app">
      <main className="content">
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <MainSidebar />
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Topbar />
            {/* <Suspense fallback={<div>Loading...</div>}> */}
                {children}
            {/* </Suspense> */}
            </Box>
        </Box>
      </main>
    </div>
  );
}

export default Layout;
