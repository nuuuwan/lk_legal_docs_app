import { Component } from "react";
import { Box } from "@mui/material";
import { DocMetadata } from "../../nonview/core";
import { SearchBox, DocListView } from "../cumulative";

import DocView from "./DocView";
import SearchView from "./SearchView";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docID: undefined,
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
    this.setState({ docID: doc.id });
  }

  renderSearchView() {
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

  renderDocView() {
    const doc = this.state.docList.find((doc) => doc.id === this.state.docID);
    return JSON.stringify(doc, null, 2);
  }

  render() {
    const { docID } = this.state;
    const doc = this.state.docList.find((doc) => doc.id === docID);
    if (docID) {
      return <DocView doc={doc} />;
    }
    return (
      <SearchView
        docList={this.state.docList}
        searchKey={this.state.searchKey}
        onChangeSearchKey={this.update.bind(this)}
        onClickDoc={this.onClickDoc.bind(this)}
      />
    );
  }
}
