import {
  List,
  ListItem,
  ListItemButton,
  Typography,
  Stack,
} from "@mui/material";
import { Lang } from "../../nonview/utils";

function ButtonRemoteData({ doc }) {
  const remoteDataDirUrl = doc.remoteDataDirUrl;
  return (
    <List>
      <ListItem>
        <ListItemButton
          href={remoteDataDirUrl}
          target="_blank"
          rel="noopener"
          sx={{ textDecoration: "none" }}
        >
          <Stack direction="column">
            <Typography variant="body1">All Data</Typography>
            <Typography variant="caption">{remoteDataDirUrl}</Typography>
          </Stack>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default function LangSourcesView({ doc, langCodeToSourceUrl }) {
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
              <Stack direction="column">
                <Typography variant="body1">
                  {lang.name} PDF (Original)
                </Typography>
                <Typography variant="caption">{sourceUrl}</Typography>
              </Stack>
            </ListItemButton>
          </ListItem>
        );
      })}{" "}
      <ButtonRemoteData doc={doc} />
    </List>
  );
}
