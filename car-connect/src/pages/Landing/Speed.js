import Box from "@mui/material/Box";

export default function SpeedCard(srcImg) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingBlock: 0.5 }}>
      <img src={srcImg.source} width="97%" alt="speedometer" />
    </Box>
  );
}
