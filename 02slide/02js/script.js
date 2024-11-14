const tabs = document.querySelectorAll(".content");

tabs.forEach((item, index) => {
  item.addEventListener("click", function () {
    const pics = document.querySelectorAll(".pic");

    pics.forEach((img) => {
      img.classList.remove("active");
    });

    pics[index].classList.add("active");
  });
});
