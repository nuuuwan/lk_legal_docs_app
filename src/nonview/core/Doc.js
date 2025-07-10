import { WWW } from "../utils/index.js";
import DocType from "./DocType.js";
export default class Doc {
  static URL_DOCS_ALL =
    "https://raw.githubusercontent.com" +
    "/nuuuwan/lk_legal_docs_data/refs/heads/main" +
    "/all.json";

  constructor(docTypeName, id, date, description) {
    this.docTypeName = docTypeName;
    this.id = id;
    this.date = date;
    this.description = description;
  }

  static fromDict(d) {
    return new Doc(d["doc_type_name"], d["id"], d["date"], d["description"]);
  }

  static async listAllAsync(searchKey) {
    const data = await new WWW(Doc.URL_DOCS_ALL).json();
    let docList = data.map(Doc.fromDict);
    if (searchKey && searchKey.length >= 3) {
      docList = docList.filter((doc) =>
        doc.description.toLowerCase().includes(searchKey.toLowerCase())
      );
    }

    return docList;
  }
  get docType() {
    return DocType.fromDocTypeName(this.docTypeName);
  }

  get year() {
    return this.date.substring(0, 4);
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
  get remoteDataURLBase() {
    return (
      "https://raw.githubusercontent.com" +
      "/nuuuwan/lk_legal_docs_data/refs/heads/main" +
      `/data/${this.docTypeName}/${this.year}/${this.id}`
    );
  }

  async getRemoteTxt(langCode) {
    const urlTxt = this.remoteDataURLBase + `/${langCode}.txt`;
    return await new WWW(urlTxt).text();
  }

  get remoteDataDirUrl() {
    return (
      "https://github.com" +
      "/nuuuwan/lk_legal_docs_data/tree/main" +
      `/data/${this.docTypeName}/${this.year}/${this.id}`
    );
  }
}
