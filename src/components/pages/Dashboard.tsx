import React from "react";
// import { useAuth } from "../contexts/AuthContext";
import Topbar from "../organisms/Topbar";
import Sidebar from "../organisms/Sidebar";
import BarChart from "../atoms/shapes/Barchart";
import { Box } from "@mui/material";

export default function Dashboard() {
  // const { currentUser, logout } = useAuth();

  // async function handleLogout() {
  //   try {
  //     await logout();
  //   } catch {
  //     console.error("Failed to log out");
  //   }
  // }

  return (
    <div className="app">
      <main className="content">
        <Topbar />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <BarChart />
        </Box>
      </main>
    </div>
    // <div className="max-w-4xl mx-auto p-6">
    //   Dashboard
    //   <div className="w-[300] bg-blue-500">
    //     <h1>Dashboard</h1>
    //   </div>
    //   <div className="bg-white rounded-lg shadow-xl p-6">
    //     <div className="flex justify-between items-center mb-6">
    //       <div className="flex items-center space-x-4">
    //         <div className="bg-blue-100 p-3 rounded-full">
    //           <User className="h-6 w-6 text-blue-500" />
    //         </div>
    //         <div>
    //           <h2 className="text-2xl font-bold text-gray-800">Welcome!</h2>
    //           <p className="text-gray-600">{currentUser?.email}</p>
    //         </div>
    //       </div>
    //       <button
    //         onClick={handleLogout}
    //         className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
    //       >
    //         <LogOut className="h-5 w-5 mr-2" />
    //         Sign Out
    //       </button>
    //     </div>

    //     <div className="bg-gray-50 rounded-lg p-6">
    //       <h3 className="text-lg font-semibold text-gray-800 mb-4">
    //         Account Details
    //       </h3>
    //       <div className="space-y-3">
    //         <div className="flex items-center justify-between">
    //           <span className="text-gray-600">Email</span>
    //           <span className="font-medium">{currentUser?.email}</span>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <span className="text-gray-600">Account Created</span>
    //           <span className="font-medium">
    //             {currentUser?.metadata.creationTime
    //               ? new Date(
    //                   currentUser.metadata.creationTime
    //                 ).toLocaleDateString()
    //               : "N/A"}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
