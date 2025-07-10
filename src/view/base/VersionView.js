import { Box, Typography } from "@mui/material";
import { VERSION } from "../../nonview/constants";
export default function VersionView() {
  return (
    <Box sx={{ textAlign: "center", m: 1 }}>
      <Typography variant="caption" color="#888">
        App Version-{VERSION.DATETIME_STR}
      </Typography>
    </Box>
  );
}
