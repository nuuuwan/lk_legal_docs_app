import { Box, TextField, Typography } from "@mui/material";
import SearchBoxInfo from "../atoms/SearchBoxInfo";
import { STYLE } from "../../nonview/constants";
export default function SearchBox({ searchKey, docList, onChange }) {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <Typography
        variant="body1"
        sx={{ mb: 1, textAlign: "center" }}
        color={STYLE.COLOR.LIGHTER}
      >
        🇱🇰 Sri Lanka - Legal Document Search
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={searchKey}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
      />
      <SearchBoxInfo searchKey={searchKey} docList={docList} />
    </Box>
  );
}
