//checkBox selectAll
function selectAll(selectAll) {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}

//jukeBox
const songs = document.querySelectorAll(".albuumSong");

for (let song of songs) {
  const play = document.querySelector(".fa-caret-right");
  const pause = document.querySelector(".fa-pause");

  play.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}
