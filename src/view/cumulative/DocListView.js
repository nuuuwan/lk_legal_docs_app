import { List, ListItemButton } from "@mui/material";
import DocView from "./DocView";
export default function DocListView({ docList, onClickDoc }) {
  return (
    <List>
      {docList.map(function (doc) {
        const onClick = function (e) {
          onClickDoc(doc);
        };
        return (
          <ListItemButton key={doc.id} onClick={onClick}>
            <DocView doc={doc} />
          </ListItemButton>
        );
      })}
    </List>
  );
}
