import { WWW } from "../utils/index.js";
import DocType from "./DocType.js";
export default class Doc {
  static DECADES = ["2020s", "2010s", "2000s", "1990s", "1980s"];

  constructor(docTypeName, id, date, description) {
    this.docTypeName = docTypeName;
    this.id = id;
    this.date = date;
    this.description = description;
  }

  static fromDict(d) {
    return new Doc(d["doc_type_name"], d["id"], d["date"], d["description"]);
  }

  static getBranchForDecade(decade) {
    return `data_${decade}`;
  }

  static getURLAllForDecade(decade) {
    const branch = Doc.getBranchForDecade(decade);
    return (
      "https://raw.githubusercontent.com" +
      "/nuuuwan/lk_legal_docs_data" +
      `/refs/heads/${branch}` +
      "/all.json"
    );
  }

  static async listAllForDecadeAsync(searchKey, decade) {
    const url = Doc.getURLAllForDecade(decade);
    const data = await new WWW(url).json();
    let docList = data.map(Doc.fromDict);
    if (searchKey && searchKey.length >= 3) {
      docList = docList.filter((doc) =>
        doc.description.toLowerCase().includes(searchKey.toLowerCase())
      );
    }
    return docList;
  }

  static async listAllAsync(searchKey) {
    return await Promise.all(
      Doc.DECADES.map((decade) => Doc.listAllForDecadeAsync(searchKey, decade))
    ).then((lists) => {
      return lists.flat();
    });
  }
  get docType() {
    return DocType.fromDocTypeName(this.docTypeName);
  }

  get year() {
    return this.date.substring(0, 4);
  }

  get decade() {
    return this.year.substring(0, 3) + "0s";
  }

  // Remote Metadata

  get remoteMetadataURL() {
    return (
      "https://raw.githubusercontent.com" +
      "/nuuuwan/lk_legal_docs/refs/heads/main" +
      `/data/${this.docTypeName}/${this.year}/${this.id}/metadata.json`
    );
  }

  async getRemoteMetadata() {
    return await new WWW(this.remoteMetadataURL).json();
  }

  // Remote Data
  get remoteDataDirUrl() {
    const branch = Doc.getBranchForDecade(this.decade);
    return (
      "https://github.com" +
      "/nuuuwan/lk_legal_docs_data" +
      `/tree/${branch}` +
      `/data/${this.docTypeName}/${this.year}/${this.id}`
    );
  }

  async getRemoteTxt(langCode) {
    const urlTxt = this.remoteDataDirUrl + `/${langCode}.txt`;
    return await new WWW(urlTxt).text();
  }
}
