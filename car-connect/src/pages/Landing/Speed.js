import Box from "@mui/material/Box";
import speedimg from "../../assets/images/speed.png";

export default function SpeedCard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingBlock: 1 }}>
      <img src={speedimg} width="97%" alt="speedometer" />
    </Box>
  );
}
