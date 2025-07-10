import { STYLE } from "../constants";
class Lang {
  constructor(code, name, color) {
    this.code = code;
    this.name = name;
    this.color = color;
  }

  static listAll() {
    return [Lang.EN, Lang.SI, Lang.TA];
  }

  static fromCode(code) {
    return Lang.listAll().find((lang) => lang.code === code);
  }
}

Lang.SI = new Lang("si", "සිංහල", STYLE.COLOR.SL_FLAG.MAROON);
Lang.TA = new Lang("ta", "தமிழ்", STYLE.COLOR.SL_FLAG.ORANGE);
Lang.EN = new Lang("en", "English", STYLE.COLOR.SL_FLAG.GREEN);
export default Lang;
