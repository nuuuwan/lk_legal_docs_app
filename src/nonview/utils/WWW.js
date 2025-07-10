export default class WWW {
  constructor(url) {
    this.url = url;
  }

  async json() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching JSON:", error);
      throw error;
    }
  }
}
