let myheroname = "Hello, I'm Amar";
let mydytextcon = document.getElementById('mydytext');

let counterhero = 0;

function writethehero(){
mydytextcon.innerText = mydytextcon.innerText + myheroname[counterhero];
counterhero++;
if(counterhero < myheroname.length ){
  setTimeout(writethehero, 100);
}
else{
  
  setTimeout(removeherotext, 3000);

}
}

function removeherotext(){
  mydytextcon.innerText = mydytextcon.innerText.slice(0, -1);
  counterhero--;
  if(counterhero === 0 ){
    setTimeout(writethehero, 100);
  }
  else{
    setTimeout(removeherotext, 100);

  
  }


}



writethehero()
















//follow eye code

window.addEventListener("mousemove", (e) => {
  let mouseX = e.pageX;
  let mouseY = e.pageY;
  document.querySelectorAll(".eye").forEach((eye) => {
    let eyeX = eye.offsetLeft;
    let eyeY = eye.offsetTop;
    var dx = mouseX - eyeX;
    var dy = mouseY - eyeY;
    let dir = Math.atan2(dy, dx) ;
    eye.style.transform = `rotate(${dir}rad)`;
  });
});



//code for first arrow in hero section

let animation = lottie.loadAnimation({
  container: document.getElementById('animation-container'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'path/to/your/animation.json' // the path to the animation json
});
