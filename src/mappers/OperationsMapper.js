import AdditionToken from '../tokens/operators/binary/AdditionToken';
import SubtractionToken from '../tokens/operators/binary/SubtractionToken';
import MultiplicationToken from '../tokens/operators/binary/MultiplicationToken';
import DivisionToken from '../tokens/operators/binary/DivisionToken';
import OpenBracketToken from '../tokens/operators/brackets/OpenBracketToken';
import ClosedBracketToken from '../tokens/operators/brackets/ClosedBracketToken';

export default class OperationsMapper {
  static mapper = {
    '+': new AdditionToken(),
    '-': new SubtractionToken(),
    '*': new MultiplicationToken(),
    '/': new DivisionToken(),
    '(': new OpenBracketToken(),
    ')': new ClosedBracketToken(),
  };

  static getToken(operation) {
    return this.mapper[operation];
  }
}
