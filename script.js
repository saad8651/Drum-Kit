const sounds = {
  q: "tom-1",
  w: "tom-2",
  e: "tom-3",
  r: "tom-4",
  t: "snare",
  y: "crash",
  u: "kick-bass"
};

document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function () {
    const key = this.innerHTML;
    makeSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  if (sounds[key]) {
    new Audio("sounds/" + sounds[key] + ".mp3").play();
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  }
}
