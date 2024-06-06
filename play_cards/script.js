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

    if (playerPoints === 5 || computerPoints === 5) {
        const winner = playerPoints === 5 ? 'Player' : 'Computer';
        document.getElementById('result').innerText = `${winner} wins the game!`;
        if (playerPoints === 5) {
            document.getElementById('player-card').classList.add('winning');
        }
        document.getElementById('player-card').onclick = null;
    }
}