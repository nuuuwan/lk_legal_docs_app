import { Box } from "@mui/material";

import { DocMetadataView } from "../atoms";
import DocRemoteMetadataView from "./DocRemoteMetadataView";
export default function DocView({ doc }) {
  return (
    <Box>
      <DocMetadataView doc={doc} />
      <DocRemoteMetadataView doc={doc} />
    </Box>
  );
}
