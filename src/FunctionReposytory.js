export default class FunctionReposytory {
  static FUNCTION_MAPPER = {
    sin: { test: null },
  }

  static letters = 'abcdefghijklmnopqrstuvwxyz';

  static isLettarls = (el) => this.letters.includes(el);

  static getToken(operation) {
    return this.FUNCTION_MAPPER[operation];
  }
}
