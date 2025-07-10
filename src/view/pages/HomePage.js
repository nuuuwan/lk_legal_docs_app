import { Component } from "react";

import { URLContext } from "../../nonview/utils";
import { Doc } from "../../nonview/core";
import { DocView, SearchView } from "../organisms";
import { CircularProgress } from "@mui/material";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docID: undefined,
      doc: undefined,
      docList: [],
      searchKey: "",
    };
  }

  async componentDidMount() {
    const docList = await Doc.listAllAsync("");
    const { docID } = URLContext.get();
    const newState = await this.updateDoc(docList, docID);
    this.setState({ docList, ...newState });
  }

  async updateDoc(docList, docID) {
    if (!docID) {
      return {};
    }
    const doc = docList.find((doc) => doc.id === docID);
    if (!doc) {
      console.error(`Invalid docID: ${docID}`);
      return {};
    }
    const context = { docID };
    URLContext.set(context);
    return { docID, doc };
  }

  async onClickDoc(docID) {
    const newState = await this.updateDoc(this.state.docList, docID);
    this.setState(newState);
  }

  async onChangeSearchKey(searchKey) {
    const docList = await Doc.listAllAsync(searchKey);
    this.setState({ searchKey, docList });
  }

  render() {
    const { docList, doc } = this.state;

    if (!docList || docList.length === 0) {
      return <CircularProgress />;
    }

    if (doc) {
      return <DocView doc={doc} />;
    }

    return (
      <SearchView
        docList={this.state.docList}
        searchKey={this.state.searchKey}
        onChangeSearchKey={this.onChangeSearchKey.bind(this)}
        onClickDoc={this.onClickDoc.bind(this)}
      />
    );
  }
}
