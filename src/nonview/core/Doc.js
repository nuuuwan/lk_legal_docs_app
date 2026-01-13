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
    return new Doc(d["doc_type"], d["id"], d["date"], d["description"]);
  }

  static getBranchForDecade(decade) {
    return `data_${decade}`;
  }

  static getURLAll() {
    const docTypeName = "lk_acts";
    return (
      "https://raw.githubusercontent.com" +
      "/nuuuwan/lk_legal_docs/refs/heads" +
      `/data_${docTypeName}/data/${docTypeName}/docs_all.tsv`
    );
  }

  static async listAllAsync(searchKey) {
    const url = Doc.getURLAll();
    const data = await new WWW(url).tsv();
    let docList = data.filter((d) => d["lang"] === "en").map(Doc.fromDict);
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

  get decade() {
    return this.year.substring(0, 3) + "0s";
  }

  // Remote Metadata

  get remoteMetadataURL() {
    return (
      "https://raw.githubusercontent.com" +
      "/nuuuwan/lk_legal_docs" +
      "/refs/heads/" +
      `data_${this.docTypeName}/data/${this.docTypeName}` +
      `/${this.decade}/${this.year}/${this.id}/doc.json`
    );
  }

  async getRemoteMetadata() {
    return await new WWW(this.remoteMetadataURL).json();
  }

  // Remote Data
  get commonUrlTail() {
    const branch = Doc.getBranchForDecade(this.decade);
    return `/${branch}/data/${this.docTypeName}/${this.year}/${this.id}`;
  }

  get remoteDataDirUrl() {
    return (
      "https://github.com" +
      "/nuuuwan/lk_legal_docs_data" +
      "/tree" +
      this.commonUrlTail
    );
  }

  get remoteRawDataDirUrl() {
    return (
      "https://raw.githubusercontent.com" +
      "/nuuuwan/lk_legal_docs_data" +
      "/refs/heads" +
      this.commonUrlTail
    );
  }

  async getRemoteTxt(langCode) {
    const urlTxt = this.remoteRawDataDirUrl + `/${langCode}.txt`;
    console.debug(urlTxt);
    return await new WWW(urlTxt).text();
  }
}
