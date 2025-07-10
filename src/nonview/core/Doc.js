import { WWW } from "../utils/index.js";
import DocType from "./DocType.js";
export default class Doc {
  static URL_DOCS_ALL =
    "https://raw.githubusercontent.com" +
    "/nuuuwan/lk_legal_docs_data/refs/heads/main" +
    "/latest-100.json";

  constructor(docTypeName, id, date, description) {
    this.docTypeName = docTypeName;
    this.id = id;
    this.date = date;
    this.description = description;
  }

  get docType() {
    return DocType.fromDocTypeName(this.docTypeName);
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
}
