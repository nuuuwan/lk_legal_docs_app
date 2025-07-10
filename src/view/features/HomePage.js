import { Component } from "react";
import { Box } from "@mui/material";
import { DocMetadata } from "../../nonview/core";
import { SearchBox, DocListView } from "../cumulative";

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

  async onClickDoc(doc) {
    console.debug(doc);
  }

  render() {
    const { docList, searchKey } = this.state;
    return (
      <Box>
        <SearchBox
          docList={docList}
          searchKey={searchKey}
          onChange={this.update.bind(this)}
        />

        <DocListView
          docList={docList}
          onClickDoc={this.onClickDoc.bind(this)}
        />
      </Box>
    );
  }
}
