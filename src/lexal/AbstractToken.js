export default class AbstractToken {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  getType() {
    return this.type;
  }
}
