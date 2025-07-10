import { Component } from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  TextField,
  Alert,
} from "@mui/material";
import { DocMetadata } from "../../nonview/core";

function ListItemDocView({ doc }) {
  return (
    <ListItem>
      <Box sx={{ bgcolor: "#eee", p: 1, borderRadius: 1, width: "100%" }}>
        <Typography variant="subtitle2">{doc.date}</Typography>
        <Typography variant="subtitle1">
          {doc.docType.emoji + " " + doc.docType.name}
        </Typography>
        <Typography variant="h6">{doc.description}</Typography>
      </Box>
    </ListItem>
  );
}

function DocListView({ docList }) {
  return (
    <List>
      {docList.map((doc) => (
        <ListItemDocView key={doc.id} doc={doc} />
      ))}
    </List>
  );
}
function SearchBoxInfo({ searchKey, docList }) {
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
        {n} Legal Document(s) matched "{searchKey}".
      </Alert>
    </Box>
  );
}

function SearchBox({ searchKey, docList, onChange }) {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <TextField
        variant="outlined"
        placeholder="Search Legal Documents..."
        value={searchKey}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
      />
      <SearchBoxInfo searchKey={searchKey} docList={docList} />
    </Box>
  );
}

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docList: [],
      searchKey: "",
    };
  }

  async componentDidMount() {
    await this.update("");
  }

  async update(searchKey) {
    const docList = await DocMetadata.listAllAsync(searchKey);
    this.setState({ docList, searchKey });
  }

  renderInfo() {}

  render() {
    const { docList, searchKey } = this.state;
    return (
      <Box>
        <SearchBox
          docList={docList}
          searchKey={searchKey}
          onChange={this.update.bind(this)}
        />
        {this.renderInfo()}
        <DocListView docList={docList} />
      </Box>
    );
  }
}
