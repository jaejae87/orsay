(function() {
  let human;
  let bg;
  let text3d;
  let pipe;

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.009;

  window.addEventListener('load', function() {
    human = document.querySelectorAll('.human');
    text3d = document.querySelectorAll('.text3d');
   

    window.addEventListener("mousemove", mouseFunc);

    function mouseFunc(e) {
      x = (e.clientX - window.innerWidth / 2);
      y = (e.clientY - window.innerHeight / 2);
    }
    loop();
  });

  function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    human.forEach(function(elem) {
      elem.style.transform = `translate(${mx / 9}px,${my / 9}px)`;
    });

    text3d.forEach(function(elem) {
      elem.style.transform = `translate3d(${mx / 2}px,${my / 2}px,0) rotate3d(0,1,0, ${mx / 50}deg)`;
    });

    window.requestAnimationFrame(loop);
  }
})();

