import { Box, Stack, Typography, Avatar } from "@mui/material";
import { STYLE } from "../../nonview/constants";
export default function DocMetadataView({ doc, largeTitle }) {
  return (
    <Box sx={{ width: "100%", pb: 1 }}>
      <Typography variant="caption" color={STYLE.COLOR.LIGHT}>
        {doc.date}
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar sx={{ bgcolor: STYLE.COLOR.LIGHTEST }}>
          {doc.docType.emoji}
        </Avatar>

        <Typography variant="subtitle1" color={STYLE.COLOR.LIGHT}>
          {doc.docType.name}
        </Typography>

        <Typography variant="subtitle1" color={STYLE.COLOR.LIGHTER}>
          {doc.id}
        </Typography>
      </Stack>
      <Typography variant={largeTitle ? "h4" : "body1"}>
        {doc.description}
      </Typography>
    </Box>
  );
}
