function saveHighscore() {
  console.log('saveHighscore function called');
  const initials = document.getElementById('submit').value.trim();
  console.log('Initials:', initials);

  if (initials !== '') {
    const scoreData = {
      initials: initials,
      score: score, 
    };

    const storedHighscores = localStorage.getItem('highscores');
    const parsedHighscores = JSON.parse(storedHighscores) || [];


    parsedHighscores.push(scoreData);

    parsedHighscores.sort((a, b) => b.score - a.score);

    localStorage.setItem('highscores', JSON.stringify(parsedHighscores));

    window.location.href = './highscores.html';
    
  } else {
    alert('Please enter your initials.');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const highscores = getHighscores();

  displayHighscores(highscores);

  const backToQuizButton = document.getElementById('back-to-quiz-btn');
  if (backToQuizButton) {
    backToQuizButton.addEventListener('click', function () {
      // Redirect to the quiz page
      window.location.href = './index.html'; // Adjust the path based on your file structure
    });
  }
});

function getHighscores() {
  const storedHighscores = localStorage.getItem('highscores');
  return JSON.parse(storedHighscores) || [];
}

function displayHighscores(highscores) {
  const highscoresList = document.getElementById('list-of-highscores');

  highscoresList.innerHTML = '';

  highscores.forEach(function (scoreData) {
    const listItem = document.createElement('li');
    listItem.textContent = `${scoreData.initials}: ${scoreData.score}`;
    highscoresList.appendChild(listItem);
  });
}
submitButton.addEventListener('click', saveHighscore);