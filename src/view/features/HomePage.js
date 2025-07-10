import { Component } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { DocMetadata } from "../../nonview/core";

function ListItemDocView({ doc }) {
  return (
    <ListItem>
      <Box>
        <Typography variant="subtitle1">{doc.doc_type_name}</Typography>
        <Typography variant="h6">{doc.description}</Typography>
        <Typography variant="subtitle1">{doc.date}</Typography>
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

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docList: [],
    };
  }

  async componentDidMount() {
    const docList = await DocMetadata.listAllAsync();
    this.setState({ docList });
  }

  render() {
    if (this.state.docList.length === 0) {
      return <div>Loading...</div>;
    }
    return <DocListView docList={this.state.docList} />;
  }
}
