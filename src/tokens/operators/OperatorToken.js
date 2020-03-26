import AbstractToken from '../AbstractToken';

export default class OperatorToken extends AbstractToken {
  constructor() {
    super();
    this.bindingPower = null;
  }

  getBindingPower() {
    return this.bindingPower;
  }
}
