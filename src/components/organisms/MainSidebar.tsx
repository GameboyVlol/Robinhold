import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { tokens } from "../../themes/theme";
import {
  Book,
  DashboardOutlined,
  MenuOutlined,
  PeopleOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const map_navigation = [
  { name: "Dashboard", path: "/dashboard", icon: <DashboardOutlined /> },
  { name: "Portfolio", path: "/portfolio", icon: <PeopleOutline /> },
  { name: "Order Book", path: "/orderbook", icon: <Book /> },
];

function MainSidebar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Sidebar
      rootStyles={{
        [`.ps-sidebar-container`]: {
          backgroundColor: colors.primary[400],
          height: "100vh",
          position: 'fixed'
        },
      }}
      collapsed={isCollapsed}
    >
      <Menu
        menuItemStyles={{
          button: {
            backgroundColor: `${colors.primary[400]}`,
            color: colors.grey[100],
            "&:hover": {
              backgroundColor: `${colors.primary[200]}`,
              color: colors.redAccent[500],
            },
          },
        }}
      >
        <MenuItem
          icon={isCollapsed ? <MenuOutlined /> : undefined}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {!isCollapsed && (
            <Box sx={{ display: "flex" }}>
              <Typography variant="h2">Robinhold</Typography>
              <IconButton
                size="small"
                onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
              >
                <MenuOutlined />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {map_navigation.map((nav, id) => (
          // <Link to={nav.path} key={id} style={{ textDecoration: "none" }}>
            <MenuItem key={id} style={{textDecoration: 'none'}} component={<Link to={nav.path}/>}>
              {isCollapsed ? (
                <Tooltip title={nav.name}>{nav.icon}</Tooltip>
              ) : (
                <Box
                  to={nav.href}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    gap: "10px",
                  }}
                >
                  {nav.icon}
                  <Typography variant="p">{nav.name}</Typography>
                </Box>
              )}
            </MenuItem>
          // </Link>
        ))}
      </Menu>
    </Sidebar>
  );
}
export default MainSidebar;
