import { List, ListItemButton } from "@mui/material";
import DocView from "./DocView";
export default function DocListView({ docList }) {
  return (
    <List>
      {docList.map((doc) => (
        <ListItemButton key={doc.id}>
          <DocView doc={doc} />
        </ListItemButton>
      ))}
    </List>
  );
}
