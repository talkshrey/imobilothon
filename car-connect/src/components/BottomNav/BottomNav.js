import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{ position: "fixed", bottom: 0, width: "100%" }}
      onChange={(_, newValue) => {
        setValue(newValue);
        if (newValue === 0) window.history.back();
        if (newValue === 1) navigate("/");
      }}
    >
      <BottomNavigationAction label="Back" icon={<KeyboardBackspaceIcon />} />
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
    </BottomNavigation>
  );
}
