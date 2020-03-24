export default class AbstractToken {
  constructor(type) {
    this.type = type;
    // this.value = value;
  }

  getType() {
    return this.type;
  }

  getValue() {
    return this.value;
  }
}
