import { Box, Alert, List, ListItemButton } from "@mui/material";
import { DocMetadataView } from "../atoms";

const MAX_N_DOCS_DISPLAY = 100;

export default function DocListView({ docList, onClickDoc }) {
  const n = docList.length;
  return (
    <Box>
      <List sx={{ pb: 3 }}>
        {docList.slice(0, MAX_N_DOCS_DISPLAY).map(function (doc) {
          const onClick = function (e) {
            onClickDoc(doc.id);
          };
          return (
            <ListItemButton key={doc.id} onClick={onClick}>
              <DocMetadataView doc={doc} />
            </ListItemButton>
          );
        })}
      </List>{" "}
      {n > MAX_N_DOCS_DISPLAY && (
        <Alert severity="warning">
          <Box>
            Only the latest {MAX_N_DOCS_DISPLAY} documents are displayed.
          </Box>
        </Alert>
      )}
    </Box>
  );
}
