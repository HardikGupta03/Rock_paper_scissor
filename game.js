let mainGameCirle=document.querySelectorAll('.con');
let computer=document.querySelectorAll('.computer');
let triangle=document.querySelector('.triangle')
let computerPick=document.querySelector('.computerPick');
let userPick=document.querySelector('.userPick')
let winnerLoose=document.querySelector('.winner')
let winModel=document.querySelector('.win-model')
let play=document.querySelector('.play')
let scoreText=document.querySelector(".scoree")
let score=JSON.parse(localStorage.getItem("sc"))
let ruleBtn=document.querySelector(".btn-rule");
let ruleModel=document.querySelector(".rule-model");
let ruleImage=document.querySelector(".rule-img");
let close=document.querySelector(".close")

let count=0;
if(score){
scoreText.innerHTML=score;
}
let random=Math.floor(Math.random()*3);

mainGameCirle.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        userPick.style.opacity="1"
        triangle.style.display="none"
// to fetch all con dic divs and maken invisible and only 
//show clickable div
    mainGameCirle.forEach(item=>{
item.style.display="none";
    })
    element.style.display="block";
    element.classList.add("show")
    setTimeout(()=>{
computerPick.style.opacity="1";
setTimeout(()=>{
    computer[random].style.display="block"
    computer[random].classList.add('right')
},500)
   },500);
   setTimeout(()=>{
    if(index==0 && random==2 || index==1 && random==0||index==2 && random==1){
    winModel.style.display="flex"
    winnerLoose.innerHTML="You Win"
    count=score;
    count++;
    scoreText.innerText=count
    
    localStorage.setItem("sc",JSON.stringify(count))
    
    }
    else if(random==index){
        winModel.style.display="flex"
    winnerLoose.innerHTML="Match Tied"
    }
    else{
        winModel.style.display="flex"
    winnerLoose.innerHTML="You Loose"
    count=score;
    count--;
    scoreText.innerText=count
    if(count<0){
      count=0;
      scoreText.innerText=count;
          winModel.style.display="flex"
    winnerLoose.innerHTML="YOU LOOSE score can not be in negative so restart the game"
    }
     
    else{
        scoreText.innerText=count;
     
    }
    
    localStorage.setItem("sc",JSON.stringify(count))
    }
    },1500)
    })
})

play.addEventListener('click',()=>{
    window.location.reload()
    
})

ruleBtn.addEventListener("click",()=>{
ruleModel.style.display="flex";
setTimeout(()=>{
    ruleImage.style.transform="translateY(0)"
},500)
})

close.addEventListener("click",()=>{
     ruleImage.style.transform="translateY(-200%)"
    setTimeout(()=>{
        ruleModel.style.display="none";
    },500)
})