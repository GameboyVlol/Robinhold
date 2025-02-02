import { Box, Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import UserAvatar from "../atoms/avatar/UserAvatar";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import UserProfileContent from "./UserProfileContent";

const StyledProfileContainer = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: theme.spacing(2),
  cursor: "pointer",
}));

function UserProfile() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <StyledProfileContainer>
      <Button
        sx={{ display: "flex", alignItems: "center" }}
        onClick={() => setShowProfile((prev) => !prev)}
      >
        <UserAvatar />
        <Box sx={{ mar: 3 }}>
          <Typography>Name</Typography>
        </Box>
        {showProfile ? <ExpandMore /> : <ExpandLess />}
      </Button>
      <UserProfileContent showProfile={showProfile} />
    </StyledProfileContainer>
  );
}

export default UserProfile;
