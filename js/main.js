
var closeButton = document.querySelector(".close-button");
let img = document.querySelector(".millo");
closeButton.addEventListener("click", function () {
  var img = document.querySelector(".close");
  img.style.display = "none";
});




let text1 = document.querySelector(".image-container");
function areaClicked1(event) {
  if (event) {
    event.preventDefault();
  }
  console.log("실행");
  text1.classList.toggle("active");
}

let text2 = document.querySelector(".image-container2");
function areaClicked2(event) {
  if (event) {
    event.preventDefault();
  }
  console.log("실행");
  text2.classList.toggle("active");
}

let text3 = document.querySelector(".image-container3");
function areaClicked3(event) {
  if (event) {
    event.preventDefault();
  }
  console.log("실행");
  text3.classList.toggle("active");
}

var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',  // 슬라이드 방향 (수평: 'horizontal', 수직: 'vertical')
  loop: true,               // 무한 루프 여부
  effect: 'slide',          // 슬라이드 효과 ('slide', 'fade', 'cube', 'coverflow', 'flip')
  speed: 500,               // 슬라이드 속도 (밀리초)
  autoplay: {
    delay: 3000,            // 자동 슬라이드 간격 (밀리초)
    disableOnInteraction: false  // 사용자의 상호작용 후에도 자동 슬라이드 유지 여부
  },
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		780: {
			slidesPerView: 2,
		},
	},
  // 추가적인 옵션들...
});



let pTag1 = document.querySelector(".first-parallel");
 
    
    let textArr1='MuséedOrsay MuséedOrsay MuséedOrsay MuséedOrsay MuséedOrsay   '.split(' ');//띄어쓰기를 기준으로 잘라서 배열

 /*  console.log(textArr1) */

   
/*   console.log(textArr2) */

 /*  let arr=[];      결과가 어떤지 확인하는용
  arr.push(...textArr1)
  console.log(arr) */

let count1=0;
let count2=0;



initTexts(pTag1,textArr1)


function initTexts(element, textArry){
  textArry.push(...textArry)//8개의 배열에 동일한 배열을 복사하여 배열 뒤에 넣음
  /* console.log(textArry) */

  //\u00A0 자바스크립튿에서의 공백을 나타냄
  for(let i=0; i<textArry.length; i++){
    element.innerHTML+=`${ textArry[1]}\u00A0\u00A0\u00A0`;
        
  }
}
//글자입력
function animate(){
  count1++;
 

/* console.log(count1) */

count1 = marqueeText(count1,pTag1,-1)



window.requestAnimationFrame(animate) //setInterval의 업그레이드버젼
//animate라는 함수를 재귀함수처럼(재귀함수는렉걸림)다시 실행 
}
 animate(); 

function marqueeText(count, element, direction){
/*   console.log(element.scrollWidth) */
  if(count>element.scrollWidth/2){
    count=0;
    element.style.transform=`translate($0,0)`

  }

  //scrollWidth-->보이지 않는 공간일지라도 스크롤을 해서 확인할수 있는 
  //공간까지의 넓이를, 전체 넓이 
  element.style.transform=`translate(${count*direction}px,0)`
  return count;

}
function scrollHandler(){

count1 +=25;
count2 +=25;

}




animate();
window.addEventListener("scroll",scrollHandler)


// Cider Bottle Slider
$('.cider_bottle').slick({
  dots: true,
  centerMode: true,
  centerPadding: "30vw",
	
  // the magic
  responsive: [{
		
		breakpoint: 1200,
		settings: {
			slidesToShow: 1,
			infinite: true,
			centerMode: false,  
			centerPadding:0,
		
		}

	}, {

		breakpoint: 300,
		settings: "unslick" // destroys slick

	}]
});



var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

let acc =document.getElementsByClassName('accordion');

console.log(acc[1])
//console.log(acc.length)

for(let i=0; i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle("active")
        let panel=this.nextElementSibling;//나의 다음요소(동생)
        // 0 --> false
        // 0를제외한 숫자 --> true
        //scrollHeight :화면바깥으로 삐져나간 부분까지 포함해서 전체의 글의 높이
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }else{
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
    })
}

console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");

		currentBgImageEl.classList.remove("current--image");
		previousBgImageEl.classList.remove("previous--image");
		nextBgImageEl.classList.remove("next--image");

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";

			nextBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

			currentBgImageEl.classList.add("previous--image");
			previousBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image");
		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			previousBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

			currentBgImageEl.classList.add("next--image");
			previousBgImageEl.classList.add("current--image");
			nextBgImageEl.classList.add("previous--image");
		}
	}
}

function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
	let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

	gsap.timeline()
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 0.5,
		pointerEvents: "none",
	})
		.to(
		currentInfoEl.querySelectorAll(".text"),
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: "-120px",
			opacity: 0,
		},
		"-="
	)
		.call(() => {
		swapInfosClass(direction);
	})
		.call(() => initCardEvents())
		.fromTo(
		direction === "right"
		? nextInfoEl.querySelectorAll(".text")
		: previousInfoEl.querySelectorAll(".text"),
		{
			opacity: 0,
			translateY: "40px",
		},
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: "0px",
			opacity: 1,
		}
	)
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 1,
		pointerEvents: "all",
	});

	function swapInfosClass() {
		currentInfoEl.classList.remove("current--info");
		previousInfoEl.classList.remove("previous--info");
		nextInfoEl.classList.remove("next--info");

		if (direction === "right") {
			currentInfoEl.classList.add("previous--info");
			nextInfoEl.classList.add("current--info");
			previousInfoEl.classList.add("next--info");
		} else if (direction === "left") {
			currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("current--info");
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		delay: 0.5,
		duration: 0.4,
		stagger: 0.1,
		opacity: 1,
		translateY: 0,
	})
		.to(
		[buttons.prev, buttons.next],
		{
			duration: 0.4,
			opacity: 1,
			pointerEvents: "all",
		},
		"-=0.4"
	);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
						duration: 0.8,
						opacity: 0,
						pointerEvents: "none",
					})
						.call(() => init());
				}
			}
		});
	});
};

waitForImages();

let stageEle = document.querySelector(".stage");
let houseEle = document.querySelector(".house");
let maxScrollValue; //실제 스크롤이 움직이는 높이값
let mousePos = { x: 0, y: 0 };

function resizeHandler() {
  maxScrollValue = document.body.offsetHeight - window.innerHeight;
}
window.addEventListener("scroll", function () {
  let scrllPer = pageYOffset / maxScrollValue;
  //console.log(scrllPer)
  let zMove = scrllPer * 970 - 480;
  houseEle.style.transform = `translateZ(${zMove}vw)`;
});

window.addEventListener("mousemove", function (e) {
  //console.log(e.clientX)
  //e.clientX  : 현재화면에서 마우스의 x값을 추출
  //e.clientY  : 현재화면에서 마우스의 y값을 추출
  //window.innerWidth :현재화면의 넓이값
  //window.innerHeight :현재화면의 높이값
  mousePos.x = (e.clientX / window.innerWidth) * 5;
  mousePos.y = -(e.clientY / window.innerHeight) * 5;

  stageEle.style.transform = `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`;
});

window.addEventListener("resize", resizeHandler);
resizeHandler();


