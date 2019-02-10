let wantToPlay = confirm("Do you want to play a game?");
if (!wantToPlay) {
  alert("You did not become a millionaire, but can.");
} else {
  let range = 5;
  let prize = 0;
  let maxPrize = 10;
    while (wantToPlay) {
     let randomNumber = Math.floor(Math.random() * Math.floor(range+1));
    let userNumber;
    for (let i = 0; i <=2; i++) {
    userNumber = parseInt(prompt(`Enter a number from 0 to ${range}
Attempt left: ${3 - i}
Total prize: ${prize}
Possible prize on current attempt: ${Math.floor(maxPrize / (Math.pow(2,i)))}`));
      if (userNumber === randomNumber) {
        prize += Math.floor(maxPrize / (Math.pow(2,i)));
        wantToPlay = confirm(`Congratulation! Your prize is: ${prize}$. Do you want to continue?`);
        if (wantToPlay) {
          maxPrize = 3 * maxPrize;
          range = 2 * range;
          break;
        } else {
          alert(`Thank you for a game. Your prize is: ${prize}$`);
          wantToPlay = confirm('Do you want to play a game again?');
          if(wantToPlay) {
            range = 5;
            prize = 0;
            maxPrize = 10;
            break;
          }
        }
      }
    }
    if (userNumber !== randomNumber) {
      alert(`Thank you for a game. Your prize is: ${prize}$`);
      wantToPlay = confirm('Do you want to play a game again?');
      range = 5;
      prize = 0;
      maxPrize = 10;
    }
  }
}