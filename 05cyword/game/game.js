//game1
const gameAform = document.querySelector("form");
const gameAbtn = document.querySelector("input[type='button']");

const gameStart = (e) => {
  e.preventDefault();

  let myword = document.querySelector("#myword").innerText;
  let userword = document.querySelector("#word").value;

  let lastMyword = myword[myword.length - 1];
  let firstUserword = userword[0];

  if (lastMyword === firstUserword) {
    document.querySelector(".result").innerText = "정답이에요~!";
    document.querySelector("#myword").innerText = userword;
    document.querySelector(".result").style.color = "#000";
    document.querySelector("#word").value = "";
  } else {
    document.querySelector(".result").innerText = "다시해보세요~~";
    document.querySelector(".result").style.color = "#fa822e";
    document.querySelector("#word").value = "";
  }
};

gameAform.addEventListener("submit", gameStart);
gameAbtn.addEventListener("click", gameStart);

//Lotto Game

// 1. 클릭! 버튼이 무엇인지 컴퓨터에게 알려줘야함
// 1-1 부터 45까지의 6개의 숫자가 중복없이 랜덤으로 동시에 추출되어야 함

//2.클릭! 버튼 클릭시, 숫자가 생성되어야함 *이벤트

//3. js에는 내장 객체가 있음 > 숫자를 랜덤으로 생성해주는 함수가 있음 (함수는 객체 안에 포함되어있는 것)
//3-1 random() => 0~1 미만의 실수를 난수의 형태로 생성

//0.9999999999999 * 45(floor 사용) || 44 (ceil 사용)
//*소수점을 없애야 하는 필요가 있음
//방법 1 floor() => 소수점을 버림 : 0이 나올 수 있음 +1 해줘야함
//방법 2 ceil () => 소수점을 올림
//방법 3 round() => 소수점을 반올림

//4. 숫자가 중복되서는 안됨
//4-1 set() 클래스 함수 사용 => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정인데 만약 중복된 값이 생성된 경우 1개로 합쳐주는 역할
//4-2 6개의 숫자 완성
// => 2번째 & 4번째 숫자 같은 경우 합쳐져서 5개 숫자만 나옴
//조건문 사용 => 재추첨을 하겠습니다 알려주고 => 재추첨

const lottoBtn = document.querySelector(".gameContentTitle > button");

const lottoBox = {
  countNumber: 6,
  maxNumber: 45,
};

const startLotto = () => {
  const { countNumber, maxNumber } = lottoBox;

  let lottoNumber = new Set();

  for (let i = 0; i < countNumber; i++) {
    lottoNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (lottoNumber.size === 6) {
    document.querySelector("#lottoNum").innerText = `⭐️${[...lottoNumber]}⭐️`;
  } else {
    document.querySelector("#lottoNum").innerText = `다시 뽑아 보세요~~`;
  }
};

lottoBtn.addEventListener("click", startLotto);
