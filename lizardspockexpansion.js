var winsEx= 0;
var lossEx= 0;
var drawsEx = 0;

function startExpansion() {
    var randomEx = Math.floor(Math.random() * 5 + 1);
    var computerChoiceEx = computerChooseExpansion(randomEx);
    var userChoiceEx = null;

    var radiosEx = document.getElementsByName('expansion');
    for (var i = 0, length = radiosEx.length; i < length; i++) {
        if (radiosEx[i].checked) {
            userChoiceEx = radiosEx[i].value;
        }
    }

    if (userChoiceEx === null) {
        document.getElementById('userChoiceEx').innerHTML = 'Please choose an option!';
    } else {
        document.getElementById('userChoiceEx').innerHTML = 'You chose: ' + userChoiceEx;
        document.getElementById('aiChoiceEx').innerHTML = 'The computer chose: ' + computerChoiceEx;

        var winnerEx = compareExpansion(userChoiceEx, computerChoiceEx);
        document.getElementById('resEx').innerHTML = winnerEx;
        document.getElementById('winEx').innerHTML = winsEx;
        document.getElementById('lossEx').innerHTML = lossEx;
        document.getElementById('drawEx').innerHTML = drawsEx;
    }

    return false;
}

function computerChooseExpansion(random) {
    if (random === 1) {
        return 'Rock';
    } else if (random === 2) {
        return 'Paper';
    } else if (random === 3) {
        return 'Scissors';
    } else if(random === 4) {
        return 'Lizard';
    } else {
        return 'Spock';
    }

}

function compareExpansion(choice1, choice2) {
    var txtDrawEx = "It's a draw";
    var txtWinEx = 'You won!';
    var txtLossEx = 'The computer won. Try again';

    if (choice1 === choice2) {
        drawsEx++;
        return txtDrawEx;
    } else if ((choice1 === 'Rock' && choice2 === 'Scissors') || 
                    (choice1 === 'Rock' && choice2 === 'Lizard') ||
                    (choice1 === 'Paper' && choice2 === 'Rock') || 
                    (choice1 === 'Paper' && choice2 === 'Spock') ||
                    (choice1 === 'Scissors' && choice2 === 'Paper') ||
                    (choice1 === 'Scissors' && choice2 === 'Lizard') ||
                    (choice1 === 'Lizard' && choice2 === 'Spock') ||
                    (choice1 === 'Lizard' && choice2 === 'Paper') ||
                    (choice1 === 'Spock' && choice2 === 'Scissors') ||
                    (choice1 === 'Spock' && choice2 === 'Rock')
                ) {
        winsEx++;
        return txtWinEx;
    } else {
        lossEx++;
        return txtLossEx;
    }
}