function test() {

    var password = document.getElementById('password').value;

    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/;
    var numeros = /[0-9]/;
    var caracteresEspeciais = /[!@#$%^&*()\-_]/;

    var test1 = document.getElementById('test1');
    var test2 = document.getElementById('test2');
    var test3 = document.getElementById('test3');
    var test4 = document.getElementById('test4');
    var test5 = document.getElementById('test5');

    if (password.length >= 8) {
        test1.src = 'assets/check.svg';
    } else {
        test1.src = 'assets/error.svg';
    }

    if (letrasMinusculas.test(password)) {
        test2.src = 'assets/check.svg';
    } else {
        test2.src = 'assets/error.svg';
    }

    if (letrasMaiusculas.test(password)) {
        test3.src = 'assets/check.svg';
    } else {
        test3.src = 'assets/error.svg';
    }

    if (caracteresEspeciais.test(password)) {
        test4.src = 'assets/check.svg';
    } else {
        test4.src = 'assets/error.svg';
    }
    
    if (numeros.test(password)) {
        test5.src = 'assets/check.svg';
    } else {
        test5.src = 'assets/error.svg';
    }
}

