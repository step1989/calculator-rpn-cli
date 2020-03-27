import TokenBuilder from './TokenBuilder';
import Translator from './Translator';
import Calculator from './Calculator';

const getResult = (expression) => {
  const tokenBuilder = new TokenBuilder(expression);
  const tokens = tokenBuilder.getTokens();
  const translator = new Translator(tokens);
  const tokensInPostfixNotation = translator.translateTokensToPostfixNotation();
  const calculator = new Calculator(tokensInPostfixNotation);
  const result = calculator.calculate();
  return parseFloat(result);
};

export default getResult;
