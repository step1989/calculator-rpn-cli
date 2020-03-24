import AbstractToken from './AbstractToken';

export default class NumberToken extends AbstractToken {
  constructor(type, value) {
    super(type);
    this.value = value;
  }

  calculation(stack) {
    stack.push(this.value);
  }
}
