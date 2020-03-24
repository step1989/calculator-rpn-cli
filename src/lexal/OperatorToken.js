import AbstractToken from "./AbstractToken";

export default class OperatorToken extends AbstractToken {
  constructor(type, value, bindingPower, mathFunc) {
    super(type, value);
    this.bindingPower = bindingPower;
    this.mathFunc = mathFunc;
  }
}
