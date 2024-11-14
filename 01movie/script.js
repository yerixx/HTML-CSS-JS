// const items = document.querySelectorAll(".slide_card_items li");
// console.log(items);

// items.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     console.log("over");
//     // item.style.transform = "translateY(-30px)";
//     // item.style.transition = "all 0.3s";
//   });
//   item.addEventListener("mouseout", () => {
//     item.style.transform = "translateY(0)";
//   });
// });

// slide
//버튼
const slideArrow = document.querySelector(".slide_arrow");
const slideArrowLeft = document.querySelector(".slide_arrow_left");
const slideArrowRight = document.querySelector(".slide_arrow_right");
//슬라이드
const slides = document.querySelector(".slide_card_items");
const slide = document.querySelectorAll(".slide_card_items ul");
// 배열 사이즈 재측정
const slideCount = slide.length;
const slideWidth = 240;
const slideMargin = 30;
// 인덱스 0부터 시작하게
let currentIdx = 0;

//복제한 5개의 li node를 왼쪽으로 이동시키기 위한 함수(1)
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slide_card_items ul");
  const newSlideCount = currentSlides.length;
  // 복제본까지 width,hegiht 알아야함
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.computedStyleMap.width = newWidth;
};

//복제한 5개의 li node를 왼쪽으로 이동시키기 위한 함수 (2)
const setInitialPos = () => {
  const initialTraslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTraslateValue}px)`;
};

// li node를 복제하기 위한 코드
// 슬라이드 개수만큼 복사본 만들어서 증가
// 선언한 함수 실행
const makeClone = () => {
  // 초기값 0 으로세팅 후 5전까지 반복
  for (let i = 0; i < slideCount; i++) {
    // slide[i]원본을 복제해서 cloneSlide에 넣겠다
    const cloneSlide = slide[i].cloneNode(true);
    // 클론임을 식별 시키기
    cloneSlide.classList.add("clone");
    // 특정 node 뒤에 값 넣기
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i > 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

// 함수 선언
makeClone();
// 버튼 클릭을 통해서 실제 슬라이드를 출력시켜주는 함수 정의
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
  // console.log(currentIdx, slideCount);
};

// 버튼을 누를 때 인덱스가 바꾸게 하고싶음
// 버튼 클릭 이벤트 함수를 컴퓨터가 인식하게 해야함
slideArrowLeft.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});
slideArrowRight.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

//자동슬라이드 기능 및 정지 기능 함수
let timer = undefined;

const autoSlide = () => {
  // 타이머가 원래 초기값과 같다면
  if (timer === undefined) {
    // 주기적 시간을 가지고 움직였으면 좋겠어 3초에 한번씩
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide();

// 자동으로 슬라이드 되는 기능을 없애라
const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseover", () => {
  stopSlide();
});
slides.addEventListener("mouseout", () => {
  autoSlide();
});

slideArrow.addEventListener("mouseover", () => {
  stopSlide();
});
slideArrow.addEventListener("mouseout", () => {
  autoSlide();
});

// 1. card_item 각 요소에 마우스를 오버하면, 각 item들이 위쪽으로 올라오도록 하고 싶다

slide.forEach((item) => {
  item.addEventListener("mouseover", function () {
    slide.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
  });
  item.addEventListener("mouseout", function () {
    slide.forEach((item) => {
      item.classList.remove("active");
    });
  });
});
const cloneNode = document.querySelectorAll(".clone");
cloneNode.forEach((item) => {
  item.addEventListener("mouseover", function () {
    cloneNode.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
  });
  item.addEventListener("mouseout", function () {
    cloneNode.forEach((item) => {
      item.classList.remove("active");
    });
  });
});

//1.컴퓨터에게 상단 nav ul & li 태그를 인지시켜줘야 한다
// 2. 상단 nav요소에 마우스를 오버하면 이벤트가 실행된다
// 2-1 마우스 오버시 active 가상 클래스가 실행된다 [텍스트 화이트]
// 2-2 하단 lnb 요소의 opacity value값이 1이 되어야 한다
// 3. mouseleave||mouseout 기능을 활용해 마우스가 옆에 있는 li태그로 이동하면 기존 이벤트는 제거가 되고 || 신규 이벤트가 2번기능을 그대로 구현해야한다

const gnbLi = document.querySelectorAll(".navigation_gnb li");
console.log(gnbLi);

gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});
