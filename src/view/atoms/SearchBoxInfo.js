import { Box, Alert } from "@mui/material";

export default function SearchBoxInfo({ searchKey, docList }) {
  if (searchKey.length === 0) {
    return <Box />;
  }
  if (searchKey.length < 3) {
    return (
      <Box sx={{ m: 1 }}>
        <Alert severity="warning">Type at least 3 characters to search.</Alert>
      </Box>
    );
  }
  const n = docList ? docList.length : 0;
  return (
    <Box sx={{ m: 1 }}>
      <Alert severity="info">
        {n} Legal Document(s) matched "{searchKey}".{" "}
        {n > 0 ? "Click for details." : ""}
      </Alert>
    </Box>
  );
}
