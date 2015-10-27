var wins = 0;
var loss = 0;
var draws = 0;

function start() {
    var random = Math.floor(Math.random() * 3 + 1);
    var computerChoice = computerChoose(random);
    var userChoice = null;

    var radios = document.getElementsByName('option');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            userChoice = radios[i].value;
        }
    }

    if (userChoice === null) {
        document.getElementById('userChoice').innerHTML = 'Please choose an option!';
    } else {
        document.getElementById('userChoice').innerHTML = 'You chose: ' + userChoice;
        document.getElementById('aiChoice').innerHTML = 'The computer chose: ' + computerChoice;

        var winner = compare(userChoice, computerChoice);
        document.getElementById('res').innerHTML = winner;
        document.getElementById('win').innerHTML = wins;
        document.getElementById('loss').innerHTML = loss;
        document.getElementById('draw').innerHTML = draws;
    }

    return false;
}

function computerChoose(random) {
    if (random === 1) {
        return 'Rock';
    } else if (random === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function compare(choice1, choice2) {
    var txtDraw = "It's a draw";
    var txtWin = 'You won!';
    var txtLoss = 'The computer won. Try again';

    if (choice1 === choice2) {
        draws++;
        return txtDraw;
    } else if (choice1 === 'Rock' && choice2 === 'Scissors') {
        wins++;
        return txtWin;
    } else if (choice1 === 'Rock' && choice2 === 'Paper') {
        loss++;
        return txtLoss;
    } else if (choice1 === 'Paper' && choice2 === 'Rock') {
        wins++;
        return txtWin;
    } else if (choice1 === 'Paper' && choice2 === 'Scissors') {
        loss++;
        return txtLoss;
    } else if (choice1 === 'Scissors' && choice2 === 'Rock') {
        loss++;
        return txtLoss;
    } else {
        wins++;
        return txtWin;
    }
}
