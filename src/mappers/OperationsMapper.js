import AdditionToken from '../models/operators/binary/AdditionToken';
import SubtractionToken from '../models/operators/binary/SubtractionToken';
import MultiplicationToken from '../models/operators/binary/MultiplicationToken';
import DivisionToken from '../models/operators/binary/DivisionToken';
import OpenBracketToken from '../models/operators/brackets/OpenBracketToken';
import ClosedBracketToken from '../models/operators/brackets/ClosedBracketToken';

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
