import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Lang } from "../../nonview/utils";

export default function LangSourcesView({ langCodeToSourceUrl }) {
  return (
    <List>
      {Lang.listAll().map(function (lang) {
        const sourceUrl = langCodeToSourceUrl[lang.code];
        if (!sourceUrl) {
          return null;
        }
        return (
          <ListItem key={lang.code}>
            <ListItemButton
              href={sourceUrl}
              target="_blank"
              rel="noopener"
              sx={{ textDecoration: "none", color: lang.color }}
            >
              <Typography variant="body1">{lang.name} Full-Text</Typography>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
