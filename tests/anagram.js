'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			['барокко', 'коробка'],
			['кот', 'ток'],
			['липа', 'пила'],
			['пост', 'стоп']
		];

		assert.deepEqual(anagram(input), output);
	});
    QUnit.test('Функция работает правильно для пустоты', function (assert) {
        const input = [];

        const output = [];

        assert.deepEqual(anagram(input), output);
    });
    QUnit.test('Функция работает правильно при отстутствии аннограм', function (assert) {
        const input = ['фронтенд', 'бекенд', 'базаданных'];

        const output = [];

        assert.deepEqual(anagram(input), output);
    });
    QUnit.test('Функция работает правильно для не валидного входа', function (assert) {
        const input = {'Test': 'test'};

        const output = [];

        assert.deepEqual(anagram(input), output);
    });
    QUnit.test('Функция работает правильно для не полных наборов', function (assert) {
        const input = ['abcd','abcdd'];

        const output = [];

        assert.deepEqual(anagram(input), output);
    });
    QUnit.test('Функция работает правильно для различных регистров', function (assert) {
        const input = [
			'Кот', 'Пила', 'Барокко',
			'стоп', 'ток', 'кошка',
			'Липа', 'Коробка', 'Пост'
		];

		const output = [
			['барокко', 'коробка'],
			['кот', 'ток'],
			['липа', 'пила'],
			['пост', 'стоп']
		];


        assert.deepEqual(anagram(input), output);
    });
    QUnit.test('Функция работает правильно для одинаковых слов', function (assert) {
        const input = [
        	'барокко', 'барокко', 'коробка',
			'кот', 'кот',
			'стоп', 'пост'
		];

        const output = [
            ['барокко', 'коробка'],
            ['пост', 'стоп']
		];

        assert.deepEqual(anagram(input), output);
    });
});
