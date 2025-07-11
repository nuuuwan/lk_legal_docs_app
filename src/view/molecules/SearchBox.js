import { Box, TextField } from "@mui/material";
import SearchBoxInfo from "../atoms/SearchBoxInfo";
export default function SearchBox({ searchKey, docList, onChange }) {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <TextField
        variant="outlined"
        placeholder="Search Documents"
        value={searchKey}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
      />
      <SearchBoxInfo searchKey={searchKey} docList={docList} />
    </Box>
  );
}
