import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../themes/theme";

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>{subtitle}</Typography>
    </Box>
  );
}

export default Header;
