// variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let FinalJogo = false;

// Clique botão 1
function clickBtn1() {
    let btn = document.getElementById('btn1');

    if (btn.value == " " && !FinalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X"
            btn1 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn1 = "O";
        }
    }
    VerificaGanhador();
}

// Clique botão 2
function clickBtn2() {
    let btn = document.getElementById('btn2');

    if (btn.value == " " && !FinalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X"
            btn2 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn2 = "O";
        }
    }
    VerificaGanhador();
}

// Clique botão 3
function clickBtn3() {
    let btn = document.getElementById('btn3');

    if (btn.value == " " && !FinalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X"
            btn3 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn3 = "O";
        }
    }
    VerificaGanhador();
}

// Clique botão 4
function clickBtn4() {
    let btn = document.getElementById('btn4');

    if (btn.value == " " && !FinalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X"
            btn4 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn4 = "O";
        }
    }
    VerificaGanhador();
}

// Clique botão 5
function clickBtn5() {
    let btn = document.getElementById('btn5');

    if (btn.value == " " && !FinalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X"
            btn5 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn5 = "O";
        }
    }
    VerificaGanhador();
}

// Clique botão 6
function clickBtn6() {
    let btn = document.getElementById('btn6');

    if (btn.value == " " && !FinalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X"
            btn6 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn6 = "O";
        }
    }
    VerificaGanhador();
}

// Clique botão 7
function clickBtn7() {
    let btn = document.getElementById('btn7');

    if (btn.value == " " && !FinalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X"
            btn7 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn7 = "O";
        }
    }
    VerificaGanhador();
}

// Clique botão 8
function clickBtn8() {
    let btn = document.getElementById('btn8');

    if (btn.value == " " && !FinalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X"
            btn8 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn8 = "O";
        }
    }
    VerificaGanhador();
}

// Clique botão 9
function clickBtn9() {
    let btn = document.getElementById('btn9');

    if (btn.value == " " && !FinalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X"
            btn9 = "X";
        } else {
            controle = 0;
            btn.value = "O";
            btn9 = "O";
        }
    }
    VerificaGanhador();
}

//Verifica Ganhador
function VerificaGanhador() {
    let LblJogador = document.getElementById("lblJogador");
    let LblJogadas = document.getElementById("lblJogadas");

    //Verifica se Jogador X Ganhou
    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador X ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador X ganhou!');
    }

    if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador X ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador X ganhou!');
    }

    if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador X ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador X ganhou!');

    }

    if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador X ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador X ganhou!');
    }

    if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador X ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador X ganhou!');
    }

    if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador X ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador X ganhou!');
    }

    if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador X ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador X ganhou!');
    }

    if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador X ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador X ganhou!');
    }

    // Agora o O

    if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador O ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador O ganhou!');
    }

    if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador O ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador O ganhou!');
    }

    if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador O ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador O ganhou!');
    }

    if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador O ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador O ganhou!');
    }

    if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador O ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador O ganhou!');
    }

    if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador O ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador O ganhou!');
    }

    if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador O ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador O ganhou!');
    }

    if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') {
        FinalJogo = true;
        LblJogador.innerText = 'O Jogador O ganhou';
        LblJogadas.innerText = '';
        // alert( 'O jogador O ganhou!');
    }
}
