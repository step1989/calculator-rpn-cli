export default class FunctionsMapper {
  static mapper = {
    sin: { test: null },
  }

  static getToken(operation) {
    return this.mapper[operation];
  }
}
