import { List, ListItem } from "@mui/material";
import DocView from "./DocView";
export default function DocListView({ docList }) {
  return (
    <List>
      {docList.map((doc) => (
        <ListItem key={doc.id}>
          <DocView doc={doc} />
        </ListItem>
      ))}
    </List>
  );
}
