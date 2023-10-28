import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Battery80Icon from "@mui/icons-material/Battery80";
import { Typography } from "@mui/material";

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="transparent" sx={{ height: 50 }}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Battery80Icon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton size="small" color="inherit">
              <SignalCellularAltIcon />
            </IconButton>
            <Typography> 9:41 AM </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
