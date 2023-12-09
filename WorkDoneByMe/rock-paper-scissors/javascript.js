const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};
updatescoreelement();

function playgame(playermove) {
    const computermove = pickcomputermove();
    let result = ' ';
    if (playermove === 'rock') {
        if (computermove === 'rock') {
            result = 'Tie.';
        } else if (computermove === 'paper') {
            result = 'You Lose.';
        } else if (computermove === 'scissors') {
            result = 'You Win.';
        }
    } else if (playermove === 'paper') {
        if (computermove === 'rock') {
            result = 'You Win.';
        } else if (computermove === 'paper') {
            result = 'Tie';
        } else if (computermove === 'scissors') {
            result = 'You Lose.';
        }
    } else if (playermove === 'scissors') {
        if (computermove === 'rock') {
            result = 'You Lose.';
        } else if (computermove === 'paper') {
            result = 'You Win.';
        } else if (computermove === 'scissors') {
            result = 'Tie.';
        }
    }
    if (result === 'You Win.') {
        score.wins += 1;
    } else if (result === 'You Lose.') {
        score.loses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    updatescoreelement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves')
        .innerHTML = `YOU <img src = "images/${playermove}-emoji.png" class="move-icon">
       <img src = "images/${computermove}-emoji.png" class="move-icon">COMPUTER`;
}



function updatescoreelement() {
    document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}`;
}



function pickcomputermove() {
    const randomenumber = Math.random();
    let computermove = ' ';
    if (randomenumber >= 0 && randomenumber < 1 / 3) {
        computermove = 'rock';
    } else if (randomenumber >= 1 / 3 && randomenumber < 2 / 3) {
        computermove = 'paper';
    } else if (randomenumber >= 2 / 3 && randomenumber < 1) {
        computermove = 'scissors';
    }
    return computermove;
}