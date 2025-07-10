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
}
