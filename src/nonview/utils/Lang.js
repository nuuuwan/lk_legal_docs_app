class Lang {
  constructor(code, name, color) {
    this.code = code;
    this.name = name;
    this.color = color;
  }

  static listAll() {
    return [Lang.SI, Lang.TA, Lang.EN];
  }

  static fromCode(code) {
    return Lang.listAll().find((lang) => lang.code === code);
  }
}

Lang.EN = new Lang("en", "English", "#080");
Lang.SI = new Lang("si", "සිංහල", "#800");
Lang.TA = new Lang("ta", "தமிழ்", "#f80");

export default Lang;
