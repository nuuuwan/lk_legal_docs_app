import { Box, IconButton, Typography } from "@mui/material";
import { VERSION } from "../../nonview/constants";
import RefreshIcon from "@mui/icons-material/Refresh";
export default function VersionView() {
  const onClick = function () {
    localStorage.clear();
    window.location.reload();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ textAlign: "center", m: 2, mb: 20 }}>
      <IconButton onClick={onClick}>
        <RefreshIcon />
      </IconButton>
      <Typography variant="caption" color="#888">
        App Version-{VERSION.DATETIME_STR}
      </Typography>
    </Box>
  );
}
