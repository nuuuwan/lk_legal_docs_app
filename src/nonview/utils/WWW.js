import Cache from "./Cache.js";
export default class WWW {
  constructor(url) {
    this.url = url;
  }

  async jsonHot() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching JSON:", error);
      return null;
    }
  }

  async json() {
    return await Cache.get(
      this.url + ".json",
      async () => await this.jsonHot(),
    );
  }

  async textHot() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      console.error("Error fetching text:", error);
      return null;
    }
  }

  async text() {
    return await Cache.get(
      this.url + ".text",
      async () => await this.textHot(),
    );
  }

  async tsvHot() {
    const text = await this.textHot();
    if (text === null) {
      return null;
    }
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    const headers = lines[0].split("\t");
    const data = lines.slice(1).map((line) => {
      const values = line.split("\t");
      const entry = {};
      headers.forEach((header, index) => {
        entry[header] = values[index];
      });
      return entry;
    });
    return data;
  }

  async tsv() {
    return await Cache.get(this.url + ".tsv", async () => await this.tsvHot());
  }
}
