export default class AbstractToken {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}
