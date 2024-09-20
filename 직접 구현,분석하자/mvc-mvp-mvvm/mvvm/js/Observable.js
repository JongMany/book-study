export default class Observable {
  constructor() {
    this.callbacks = [];
  }

  notify(value) {
    console.log(this.callbacks);
    this.callbacks.forEach((callback) => callback(value));
  }

  subscribe(callback) {
    this.callbacks.push(callback);
  }

  unsubscribe(callback) {
    this.callbacks = this.callbacks.filter((cb) => cb !== callback);
  }
}
