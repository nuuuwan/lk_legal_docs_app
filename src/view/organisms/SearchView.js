import { Box } from "@mui/material";
import { SearchBox, DocListView } from "../molecules";

export default function SearchView({
  docList,
  searchKey,
  onChangeSearchKey,
  onClickDoc,
}) {
  return (
    <Box>
      <SearchBox
        docList={docList}
        searchKey={searchKey}
        onChange={onChangeSearchKey}
      />

      <DocListView docList={docList} onClickDoc={onClickDoc} />
    </Box>
  );
}
