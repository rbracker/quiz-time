function saveHighscore() {
    const initials = document.getElementById('submit').value.trim();
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