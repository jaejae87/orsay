gsap.to(".green", {rotation: 360, x: 100, duration: 1})

$('.p-1').hover(function(){
	$('.cursor').css({backgroundImage:"url(img/moving.png)"})
})

let cursor = $('.cursor');
let overlay = $('.project-overlay');

overlay.mousemove(function(e){
gsap.to(cursor,{opacity:1, scale:1, duration:0.5})
gsap.to(cursor,{left:e.clientX, top:e.clientY, delay:0.03})
})

$('.wrapper').mouseleave(function(){
gsap.to(cursor,{opacity:0,scale:0.1})

})

// 자막 슬라이드를 위한 변수들
const subtitleContainer = document.getElementById('subtitleContainer');
const subtitles = document.getElementsByClassName('subtitle');
let currentIndex = 0;

// 자막 순차적으로 보여주는 함수
function showSubtitle(index) {
  subtitles[index].style.opacity = '1';

  // 일정 시간 후에 자막 숨기기
  setTimeout(function () {
    subtitles[index].style.opacity = '0';

    // 다음 자막 보여주기 (순환)
    currentIndex = (currentIndex + 1) % subtitles.length;
    showSubtitle(currentIndex);
  }, 3000); // 1초 후에 숨기기
}

// 첫 번째 자막 보여주기
showSubtitle(currentIndex);




