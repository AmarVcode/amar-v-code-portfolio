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