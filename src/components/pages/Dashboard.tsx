import React from "react";
import { Box, styled, useTheme } from "@mui/material";
import { tokens } from "../../themes/theme";
import Layout from "../templates/Layout";
import Barchart from "../atoms/shapes/BarChart";



const StyledHeader = styled("span")(({ theme }) => ({
  lineHeight: 1,
  fontSize: theme.fontSizes.smallerBody,
  color: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: "auto",
}));

const StyledValue = styled("span")(({ theme }) => ({
  fontSize: "1.0 rem",
  lineHeight: 1,
  lineClamp: `1`,
  WebkitLineClamp: 1,
  display: "-webkit-box",
  textOverflow: "ellipsis",
  overflow: "hidden",
  alignItems: "flex-start",
  wordBreak: "break-word",
  maxWidth: "100%",
  fontWeight: theme.typography.fontWeightBold,
}));

const StyledValueBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  margin: theme.spacing(0, 0, 0, 1),
}));
export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const { currentUser, logout } = useAuth();

  // async function handleLogout() {
  //   try {
  //     await logout();
  //   } catch {
  //     console.error("Failed to log out");
  //   }
  // }

  return (
    <Layout>
      <>
        <Box m="20px">
          <Box>
            <Box>Custom Projection</Box>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="60px"
            gap="20px"
          >
            <Box
              gridColumn="span 6"
              backgroundColor={colors.primary[400]}
              display="grid"
              gridTemplateColumns="repeat(3, 1fr)"
              borderRadius={2}
              alignItems="center"
              padding="0px 30px"
            >
              <StyledValueBox>
                <StyledHeader>Portofio-start-state</StyledHeader>
                <StyledValue>$9000.90</StyledValue>
              </StyledValueBox>
              <StyledValueBox>
                <StyledHeader>Portolio-start-state</StyledHeader>
                <StyledValue>$8827.72</StyledValue>
              </StyledValueBox>
              <StyledValueBox>
                <StyledHeader>Health factor</StyledHeader>
                <StyledValue>$8827.72</StyledValue>
              </StyledValueBox>
            </Box>
          </Box>
          <Barchart />
        </Box>
      </>
    </Layout>

    // </div>
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
