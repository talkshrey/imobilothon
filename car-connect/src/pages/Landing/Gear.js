import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./Landing.css";

export default function GearToggleButton() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      size="large"
      aria-label="Platform"
    >
      <ToggleButton sx={{ paddingInline: 3, fontWeight: "bold" }} value="park">
        P
      </ToggleButton>
      <ToggleButton
        sx={{ paddingInline: 3, fontWeight: "bold" }}
        value="neutral"
      >
        N
      </ToggleButton>
      <ToggleButton sx={{ paddingInline: 3, fontWeight: "bold" }} value="drive">
        D
      </ToggleButton>
      <ToggleButton
        sx={{ paddingInline: 3, fontWeight: "bold" }}
        value="reverse"
      >
        R
      </ToggleButton>
      <ToggleButton sx={{ paddingInline: 3, fontWeight: "bold" }} value="sport">
        S
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
