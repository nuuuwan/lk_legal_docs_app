class DocType {
  constructor(docTypeName, name, emoji) {
    this.DocType = docTypeName;
    this.name = name;
    this.emoji = emoji;
  }

  static listAll() {
    return [DocType.ACT, DocType.BILL, DocType.GAZETTE, DocType.EXTRA_GAZETTE];
  }

  static fromDocTypeName(docTypeName) {
    const docType = DocType.listAll().find(
      (docType) => docType.DocType === docTypeName,
    );
    if (!docType) {
      throw new Error(`DocType not found for name: ${docTypeName}`);
    }
    return docType;
  }
}

DocType.ACT = new DocType("acts", "Act", "🏛️");
DocType.BILL = new DocType("bills", "Bill", "✍️");
DocType.GAZETTE = new DocType("gazettes", "Gazette", "📢");
DocType.EXTRA_GAZETTE = new DocType(
  "extra-gazettes",
  "Extraordinary Gazette",
  "🚨",
);

export default DocType;
