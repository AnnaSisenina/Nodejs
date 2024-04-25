function generatePassword(length) {
    // Символы, используемые для генерации пароля
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";

    // Переменная для хранения сгенерированного пароля
    var password = "";

    // Генерация пароля заданной длины
    for (var i = 0; i < length; i++) {
        // Выбор случайного символа из charset и добавление его к паролю
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

// Экспорт функции generatePassword
module.exports = { generatePassword };