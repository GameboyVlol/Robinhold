import { Circle } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../themes/theme";

function StatusBox({ icon, title }: { title: string; icon: React.ReactNode }) {
  const themes = useTheme();
  const colors = tokens(themes.palette.mode);
    
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h3">{title}</Typography>
        </Box>
        <Box>
          <Circle />
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" justifyContent="space-between" mt="2px">
          "subtitle"
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          'value'
        </Typography>
      </Box>
    </Box>
  );
}

export default StatusBox;
