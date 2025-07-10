import { WWW } from "../base";
import DocType from "../core/DocType.js";
export default class DocMetadata {
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
    return new DocMetadata(
      d["doc_type_name"],
      d["id"],
      d["date"],
      d["description"],
    );
  }

  static async listAllAsync(searchKey) {
    const data = await new WWW(DocMetadata.URL_DOCS_ALL).json();
    let docList = data.map(DocMetadata.fromDict);
    if (searchKey && searchKey.length >= 3) {
      docList = docList.filter((doc) =>
        doc.description.toLowerCase().includes(searchKey.toLowerCase()),
      );
    }

    return docList;
  }
}
