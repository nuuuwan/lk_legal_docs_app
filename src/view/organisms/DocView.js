import { Box } from "@mui/material";

import { DocMetadataView, ReturnToSearchButton } from "../atoms";
import DocRemoteMetadataView from "./DocRemoteMetadataView";

export default function DocView({ doc }) {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <ReturnToSearchButton />
      <Box sx={{ m: 1 }}>
        <DocMetadataView doc={doc} />
        <DocRemoteMetadataView doc={doc} />
      </Box>
    </Box>
  );
}
