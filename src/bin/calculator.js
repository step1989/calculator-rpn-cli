#!/usr/bin/env node

import readlinesync from 'readline-sync';
import Calculator from '../Calculator';

const fractionDigits = 2;

const expression = readlinesync.question('Введите выражение \n');
try {
  const calc = new Calculator(expression);
  console.log('Результат:', calc.calculate().toFixed(fractionDigits));
} catch (e) {
  console.log('Обнаружена ошибка\n', e.message);
  process.exit(-1);
}
