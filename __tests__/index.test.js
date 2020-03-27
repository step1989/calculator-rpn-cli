import getResult from '../src/index';

const testData = [
  ['3', 3, 'simple test'],
  ['1+2-3', 0, 'two operation'],
  ['6 - 3 + 2 * 4', 11, 'binding power'],
  ['12/2-6+2*2', 4, 'binding power 2'],
  ['((1 + 2)/3) - 4', -3, 'brackets 1'],
  ['( 1+ 2) / 3 + 4 ', 5, 'brackets 2'],
  ['2*(1+1) ', 4, 'brackets 3'],
  ['( 11+ 2.33) / 3.3 + 3 ', 7.03939393939394, 'float expression'],
  ['sin(100)', -0.5063656411097588, 'function expression'],
  ['sin(100) / 10 - 20 *5 +10', -90.05063656411097, 'function expression'],
];

const testDataError = [
  ['sin() + 20 - 30', 'Проверьте выражение. Для одной из операций не хватает аргументов', 'Missing arguments'],
  ['(5+5)+(5', 'Проверьте выражение. Отсутствует закрывающая скобка', 'Missing closing bracket'],
  ['1/0', 'Обнаружено деление на ноль. Проверьте выражение', 'Division by zero'],
  ['1@2', 'Введен не поддерживаемый символ - "@"', 'Unsupported the symbol'],
  ['nis(20)', 'Введена не поддерживаемая операция - "nis"', 'Unsupported operation'],
];


describe.each(testData)('test expression', (expression, expected, description) => {
  test(`${description}`, () => {
    const received = getResult(expression);
    expect(received).toEqual(expected);
  });
});

describe.each(testDataError)('test error', (expression, expected, description) => {
  test(`${description}`, () => {
    const received = () => getResult(expression);
    expect(received).toThrow(expected);
  });
});
