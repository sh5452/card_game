let playerPoints = 0;
let computerPoints = 0;

function put() {
    if (playerPoints < 5 && computerPoints < 5) {
        const playerCard = Math.floor(Math.random() * 13) + 2;
        const computerCard = Math.floor(Math.random() * 13) + 2;

        const playerCardImg = document.getElementById('player-card');
        const computerCardImg = document.getElementById('computer-card');

        playerCardImg.src = `images/${playerCard}.png`;
        computerCardImg.src = `images/${computerCard}.png`;

        let resultText;
        if (playerCard > computerCard) {
            playerPoints++;
            resultText = `Player's card: ${playerCard} - Player Won!`;
            playerCardImg.classList.add('flipped');
            setTimeout(() => playerCardImg.classList.remove('flipped'), 1000);  
        } else if (computerCard > playerCard) {
            computerPoints++;
            resultText = `Computer's card: ${computerCard} - Computer Won!`;
        } else {
            resultText = `Player's card: ${playerCard} - Computer's card: ${computerCard} - Tie!`;
        }

        document.getElementById('player-points').innerText = playerPoints;
        document.getElementById('computer-points').innerText = computerPoints;
        document.getElementById('result').innerText = resultText;
    }

 if (playerPoints === 5) {
    const playerCardImg = document.getElementById('player-card');
    playerCardImg.classList.add('final-win');
    document.getElementById('result').innerText = `Player wins the game!`;
} else if (computerPoints === 5) {
    document.getElementById('result').innerText = `Computer wins the game!`;
}
}

