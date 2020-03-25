import AbstractToken from '../AbstractToken';

export default class OperatorToken extends AbstractToken {
  constructor(type) {
    super(type);
    this.bindingPower = null;
  }

  getBindingPower() {
    return this.bindingPower;
  }
}
