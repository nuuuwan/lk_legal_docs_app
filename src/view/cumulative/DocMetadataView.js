import { Box, Typography } from "@mui/material";

export default function DocMetadataView({ doc }) {
  return (
    <Box>
      <Typography variant="subtitle2">{doc.date}</Typography>
      <Typography variant="subtitle1">
        {doc.docType.emoji + " " + doc.docType.name}
      </Typography>
      <Typography variant="h6">{doc.description}</Typography>
    </Box>
  );
}
