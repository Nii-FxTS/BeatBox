let buttons = document.getElementsByClassName('drum');
//click function
function clickSound() {
  let clickButton = this.innerHTML;
  theSwitch(clickButton);
  animation(clickButton);
}
//keyboard event function
function keySounds(event) {
  theSwitch(event.key);
  animation(event.key);
}
//switch statement function
function theSwitch(keyButton) {
  switch (keyButton) {
    case 'w':
      const crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      const kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;
    case 's':
      const snare = new Audio('/sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      const tom1 = new Audio('/sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      const tom2 = new Audio('/sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      const tom3 = new Audio('/sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      const tom4 = new Audio('/sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      alert(`You pressed ${keyButton} which is a wrong key`);
      break;
  }
}
//button animation
function animation(lightUp) {
  let newButton = `.${lightUp}`;
  if (
    newButton !== '.j' &&
    newButton !== '.a' &&
    newButton !== '.w' &&
    newButton !== '.s' &&
    newButton !== '.k' &&
    newButton !== '.d' &&
    newButton !== '.l'
  ) {
    console.log(newButton);
  } else {
    let activeButton = document.querySelector(newButton);
    activeButton.classList.add('pressed');
    setTimeout(function () {
      activeButton.classList.remove('pressed');
    }, 100);
  }
}

//add event listener to every button element
for (const i of buttons) {
  i.addEventListener('click', clickSound);
}

document.addEventListener('keydown', keySounds);
