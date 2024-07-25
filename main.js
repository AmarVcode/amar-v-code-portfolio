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
  container: document.getElementById('animation-container-arrow-1'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './json/arrow1.json' // the path to the animation json
});


let animation2 = lottie.loadAnimation({
  container: document.getElementById('animation-container-arrow-2'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './json/arrow2.json' // the path to the animation json
});




//scroll code

        
const stickySections = [...document.querySelectorAll('.sticky_wrap')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section) {

  const offsetTop = section.parentElement.offsetTop;

  const scrollSection = section.querySelector('.horizontal_scroll')

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

  percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}




