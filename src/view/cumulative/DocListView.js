import { List, ListItemButton } from "@mui/material";
import DocMetadataView from "./DocMetadataView";
export default function DocListView({ docList, onClickDoc }) {
  return (
    <List>
      {docList.map(function (doc) {
        const onClick = function (e) {
          onClickDoc(doc);
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
