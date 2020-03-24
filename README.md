[![Node.js CI](https://github.com/step1989/calculator/workflows/Node.js%20CI/badge.svg)](https://github.com/step1989/calculator/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/01d103841c31ffdb9ec2/maintainability)](https://codeclimate.com/github/step1989/calculator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/01d103841c31ffdb9ec2/test_coverage)](https://codeclimate.com/github/step1989/calculator/test_coverage)

# Калькулятор

### Описание
Консольный калькулятор.
Поддерживает целые и десятично-дробные числа, знаки +, -, *, / и скобки.


  ### Локальная установка
  Cклонируйте проект

  `git clone https://github.com/step1989/calculator.git`

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
  ### Примеры использования
  [![asciicast](https://asciinema.org/a/z0WOwPUS99znJ5tkjL1XjJ7bu.svg)](https://asciinema.org/a/z0WOwPUS99znJ5tkjL1XjJ7bu)
