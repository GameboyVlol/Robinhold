import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { tokens } from "../../themes/theme";
import { MenuOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function MainSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Sidebar
      rootStyles={{
        background: colors.primary[400],
        height: '100%',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      }}
      collapsed={isCollapsed}
    >
      <Menu
        menuItemStyles={{
          button: {
            backgroundColor: `${colors.primary[400]}`,
            color: colors.grey[100],
            '&:hover': {
              backgroundColor: `${colors.primary[400]}`,
            },
          },
        }}
      >
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlined /> : undefined}
          style={{
            color: colors.grey[100],
            marginBottom: '20px',
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                Robinhold
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlined />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        <MenuItem component={<Link to="/dashboard"/>}>Dashboard</MenuItem>
        <MenuItem component={<Link to="/portfolio"/>}>Portfolio</MenuItem>
        <MenuItem component={<Link to="/orderbook"/>}>OrderBook</MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default MainSidebar;