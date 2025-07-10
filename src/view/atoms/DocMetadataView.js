import { Box, Stack, Typography } from "@mui/material";
import { STYLE } from "../../nonview/constants";
export default function DocMetadataView({ doc }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="subtitle2" color={STYLE.COLOR.LIGHT}>
        {doc.date}
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="subtitle1">{doc.docType.emoji}</Typography>
        <Typography variant="subtitle1" color={STYLE.COLOR.LIGHT}>
          {doc.docType.name}
        </Typography>
        <Typography variant="subtitle1" color={STYLE.COLOR.LIGHTER}>
          {doc.id}
        </Typography>
      </Stack>
      <Typography variant="h6">{doc.description}</Typography>
    </Box>
  );
}
