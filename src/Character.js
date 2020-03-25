export default class Character {
  static operators = '+-*/()';

  static isOperator = (el) => this.operators.includes(el);

  static NUMBERS = '0123456789.';

  static isNumbers = (el) => this.NUMBERS.includes(el);

  static letters = 'abcdefghijklmnopqrstuvwxyz';

  static isLetters = (el) => this.letters.includes(el);
}
