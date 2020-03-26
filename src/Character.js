export default class Character {
  static #operators = '+-*/()';

  static isOperator = (el) => this.#operators.includes(el);

  static #numbers = '0123456789.';

  static isNumbers = (el) => this.#numbers.includes(el);

  static #letters = 'abcdefghijklmnopqrstuvwxyz';

  static isLetters = (el) => this.#letters.includes(el);
}
