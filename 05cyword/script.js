const navHome = document.querySelector("#navHome");
const navGame = document.querySelector("#navGame");
const navJukebox = document.querySelector("#navJukebox");

const contentFrame = document.querySelector("#frame");

const navItems = document.querySelectorAll(".navItem");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    const isActive = navItem.classList.contains("active");

    navItems.forEach((item) => item.classList.remove("active"));

    if (!isActive) {
      navItem.classList.add("active");
    }
  });
});

const homeChange = () => {
  contentFrame.setAttribute("src", "./home/home.html");
  navHome.style = "background: #fff; color: #55b2e4";
  navGame.style = "none";
  navJukebox.style = "none";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game/game.html");
  navHome.style = "none";
  navGame.style = "background: #fff; color: #55b2e4";
  navJukebox.style = "none";
};
const jukeChange = () => {
  contentFrame.setAttribute("src", "./jukebox/jukebox.html");
  navHome.style = "none";
  navGame.style = "none";
  navJukebox.style = "background: #fff; color: #55b2e4";
};
navHome.addEventListener("click", homeChange);
navGame.addEventListener("click", gameChange);
navJukebox.addEventListener("click", jukeChange);
