import { WWW } from "../base";
export default class DocMetadata {
  static URL_DOCS_ALL =
    "https://raw.githubusercontent.com" +
    "/nuuuwan/lk_legal_docs_data/refs/heads/main" +
    "/latest-100.json";

  constructor(doc_type_name, id, date, description) {
    this.doc_type_name = doc_type_name;
    this.id = id;
    this.date = date;
    this.description = description;
  }
  toDict() {
    return {
      doc_type_name: this.doc_type_name,
      id: this.id,
      date: this.date,
      description: this.description,
    };
  }

  static fromDict(dict) {
    return new DocMetadata(
      dict.doc_type_name,
      dict.id,
      dict.date,
      dict.description
    );
  }

  static async listAllAsync() {
    const data = await new WWW(DocMetadata.URL_DOCS_ALL).json();
    return data.map(DocMetadata.fromDict);
  }
}
