import { styled, Box, Divider, IconButton } from "@mui/material";
import React from "react";
import { useThemeContext } from "../../themes/theme";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import UserProfile from "../molecules/UserProfile";

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.background.application,
  justifyContent: "space-between",
  margin: "0 auto",
  width: "100%",
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));
const StyledUserContainer = styled("div")({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
});
const StyledNav = styled("nav")({
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
});

function Topbar() {
  const { toggleColorMode, mode } = useThemeContext();

  return (
    <StyledContainer>
      <Box>Logo</Box>
      <StyledNav>
        <StyledUserContainer>
          <IconButton onClick={toggleColorMode}>
            {mode === "dark" ? (
              <LightModeOutlined
                sx={{ color: (theme) => theme.palette.common.white }}
              />
            ) : (
              <DarkModeOutlined />
            )}
          </IconButton>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ ml: 1 }}
          />
          <UserProfile />
        </StyledUserContainer>
      </StyledNav>
    </StyledContainer>
  );
}

export default Topbar;
