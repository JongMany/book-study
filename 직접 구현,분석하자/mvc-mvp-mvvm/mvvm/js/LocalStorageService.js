export default class LocalStorageService {
  constructor(key) {
    this.key = key;
  }

  save(data) {
    console.log(data);
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  load() {
    const storedData = localStorage.getItem(this.key);
    return storedData ? JSON.parse(storedData) : null;
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}
