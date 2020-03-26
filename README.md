[![Node.js CI](https://github.com/step1989/calculator/workflows/Node.js%20CI/badge.svg)](https://github.com/step1989/calculator/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/ff248ccc7148796becf8/maintainability)](https://codeclimate.com/github/step1989/calculator-rpn-cli/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ff248ccc7148796becf8/test_coverage)](https://codeclimate.com/github/step1989/calculator-rpn-cli/test_coverage)

# Калькулятор

### Описание
Консольный калькулятор, реализованный на обратной польской нотации.

Поддерживает целые и десятично-дробные числа, знаки +, -, *, /, скобки и функцию sin


  ### Локальная установка
  Cклонируйте проект

  `git clone https://github.com/step1989/calculator-rpn-cli`

  В папке с проектом выполните команды

  * `make install`
  * `make build`
  * `make publish`
  * `make link`

  Дополнительные команды make

  Тесты:
   * `make test` - запуск тестов
   * `make test-coverage` - запуск тестов с выводом покрытия

  Команды линтера(используются правила airbnb-base):
   * `make lint` - запуск ESLint
   * `make lintfix` - запуск ESLint с опцией --fix(eslint исправит замечания, которые поддерживают автоисправление)

   `make start` - выполняет команды `build` `test-coverage` `lintfix`

  ### Использование
  `calculator`

  `Введите выражение`

  `1+2-3`

  `Результат: 0`
