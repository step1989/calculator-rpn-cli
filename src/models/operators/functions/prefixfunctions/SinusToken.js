/* eslint class-methods-use-this:
["error", { "exceptMethods": ["calc"] }] */
import PrefixFunctionToken from './PrefixFunctionToken';

export default class SinusToken extends PrefixFunctionToken {
  calc(a) {
    return Math.sin(a);
  }
}
