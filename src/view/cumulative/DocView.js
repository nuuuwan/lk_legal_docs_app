import { Box, Typography } from "@mui/material";

export default function DocView({ doc }) {
  return (
    <Box sx={{ bgcolor: "#eee", p: 1, borderRadius: 1, width: "100%" }}>
      <Typography variant="subtitle2">{doc.date}</Typography>
      <Typography variant="subtitle1">
        {doc.docType.emoji + " " + doc.docType.name}
      </Typography>
      <Typography variant="h6">{doc.description}</Typography>
    </Box>
  );
}
