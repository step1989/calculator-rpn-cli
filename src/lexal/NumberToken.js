import AbstractToken from './AbstractToken';

export default class NumberToken extends AbstractToken {
  calculation(stack) {
    stack.push(this.value);
  }
}
