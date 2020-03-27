#!/usr/bin/env node

import readlinesync from 'readline-sync';
import getResult from '..';

const fractionDigits = 2;

const expression = readlinesync.question('Введите выражение \n');
try {
  console.log('Результат:', getResult(expression).toFixed(fractionDigits));
} catch (e) {
  console.log('Обнаружена ошибка\n', e.message);
  process.exit(-1);
}
