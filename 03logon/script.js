//1.웹 브라우저에게 클릭할 이벤트 대상을 알려준다
// queruselector()
// addEventListener()

// 2. 클릭을 했을 때 css로 정의해놓은 가상클래스를 원하는 요소에 적용시킨다
// classList
// add() || remove()
// button 의 기본 속성 무력화 시켜야함 ->preventDefault()

// 2-1.가상클래스 = filldeA & filldeB
//

// const femaleBtn = document.querySelector("#femalebtn");
//전체를 훑고 찾아주는

const femaleBtn = document.querySelector(".female_btn");
const maleBtn = document.querySelector(".man_btn");
console.log(femaleBtn, maleBtn);

femaleBtn.addEventListener("click", () => {
  event.preventDefault();
  femaleBtn.classList.toggle("filledA");
  maleBtn.classList.remove("filledB");
});

maleBtn.addEventListener("click", () => {
  event.preventDefault();
  maleBtn.classList.toggle("filledB");
  femaleBtn.classList.remove("filledA");
});
