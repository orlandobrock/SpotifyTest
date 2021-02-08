const play = document.querySelector("#play");
let song = document.querySelector("#song");

let status = !false;
let repeat = false;
let suffle = false;

play.addEventListener("click", () => {
  if (status) {
    song.play();
    status = false;
    play.innerHTML = "pause_circle_outline";
  } else {
    song.pause();
    status = true;
    play.innerHTML = "play_circle_outline";
  }
});
