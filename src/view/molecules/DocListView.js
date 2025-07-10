import { List, ListItemButton } from "@mui/material";
import { DocMetadataView } from "../atoms";
export default function DocListView({ docList, onClickDoc }) {
  return (
    <List>
      {docList.map(function (doc) {
        const onClick = function (e) {
          onClickDoc(doc.id);
        };
        return (
          <ListItemButton key={doc.id} onClick={onClick}>
            <DocMetadataView doc={doc} />
          </ListItemButton>
        );
      })}
    </List>
  );
}
