;
(function () {
    'use strict';
    var result = prompt('Кто пришел?');
    if (result === 'Админ') {
        result = prompt('Пароль?');
        if (result === 'Чёрный Властелин')
            alert('Добро пожаловать!');
        else {
            if (result === null)
                alert('Вход отменён');
            else
                alert('Пароль неверен');
        }
    } else {
        if (result === null)
            alert('Вход отменён');
        else
            alert('Я вас не знаю');
    }
})();