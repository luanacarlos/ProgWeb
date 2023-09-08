function playGame() {
    const choices = ['Papel', 'Pedra', 'Tesoura'];
    let userWins = 0;
    let computerWins = 0;

    while (computerWins <= 0) {
        console.log('Escolha sua jogada: \n1 - Papel\n2 - Pedra\n3 - Tesoura');

        const userChoice = choices[parseInt(prompt()) - 1];
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        console.log(`O computador jogou ${computerChoice}`);

        if (result === 'Empate') {
            console.log('É um empate!');
        } else if (result === 'Você venceu') {
            console.log('Você venceu!');
            userWins++;
        } else {
            console.log(`Você perdeu! A sua pontuação foi de ${userWins}`);
            computerWins++;
        }
    }
}

function getComputerChoice() {
    const choices = ['Papel', 'Pedra', 'Tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Empate';
    } else if (
        (userChoice === 'Pedra' && computerChoice === 'Tesoura') ||
        (userChoice === 'Papel' && computerChoice === 'Pedra') ||
        (userChoice === 'Tesoura' && computerChoice === 'Papel')
    ) {
        return 'Você venceu';
    } else {
        return 'Computador venceu';
    }
}

playGame();