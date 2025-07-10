import { Component } from "react";

import { Doc } from "../../nonview/core";
import { DocView, SearchView } from "../organisms";

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
    const docList = await Doc.listAllAsync(searchKey);
    this.setState({ docList, searchKey });
  }

  async onClickDoc(doc) {
    this.setState({ docID: doc.id });
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
