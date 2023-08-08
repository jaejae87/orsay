(function(){

  let stageEle = document.querySelector(".stage");
  let sectionTh=document.querySelector(".section_three")
let houseEle = document.querySelector(".house");
let maxScrollValue; //실제 스크롤이 움직이는 높이값
let mousePos = { x: 0, y: 0 };
let sectionOffset=sectionTh.offsetTop;
let scrollY; 

function resizeHandler() {
  maxScrollValue =sectionTh.offsetHeight - window.innerHeight; 
 // console.log(pageYOffset)

}
window.addEventListener("scroll", function () {
 // let scrollY=(pageYOffset - sectionOffset) - window.innerHeight;
  let scrollY=(pageYOffset - sectionOffset);
  let scrllPer = scrollY / maxScrollValue;
  console.log(scrllPer)
  if(scrllPer<0){scrllPer=0} 
  if(scrllPer>0.90){scrllPer=0.90} 
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

})()

