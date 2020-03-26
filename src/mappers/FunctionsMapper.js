import SinusToken from '../tokens/operators/functions/prefixfunctions/SinusToken';

export default class FunctionsMapper {
  static mapper = {
    sin: new SinusToken(),
  }

  static getToken(operation) {
    return this.mapper[operation];
  }
}
