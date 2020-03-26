import AdditionToken from './tokens/operators/binary/AdditionToken';
import SubtractionToken from './tokens/operators/binary/SubtractionToken';
import MultiplicationToken from './tokens/operators/binary/MultiplicationToken';
import DivisionToken from './tokens/operators/binary/DivisionToken';
import OpenBracketToken from './tokens/operators/brackets/OpenBracketToken';
import ClosedBracketToken from './tokens/operators/brackets/ClosedBracketToken';
import SinusToken from './tokens/operators/functions/prefixfunctions/SinusToken';

export default class Mapper {
  static #mapping = {
    '+': new AdditionToken(),
    '-': new SubtractionToken(),
    '*': new MultiplicationToken(),
    '/': new DivisionToken(),
    '(': new OpenBracketToken(),
    ')': new ClosedBracketToken(),
    sin: new SinusToken(),
  };

  static getToken(operation) {
    return this.#mapping[operation];
  }
}
