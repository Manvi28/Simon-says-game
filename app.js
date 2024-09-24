let gameseql = [];
let userseql = [];
let gamestarted = false;
let level = 0;
let h3 = document.querySelector("h3");
let btn = ["one", "two", "three", "four"];
document.addEventListener("keypress", function () {
    if (gamestarted == false) {
        console.log("game started");
        gamestarted = true;
        levelup();

    }
});
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 125);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 125);
}

function levelup() {
    userseql=[];
    console.log("game started");
    level++;
    h3.innerText = `Level ${level}`;
    let rindex = Math.floor(Math.random() * 3);
    let rcolor = btn[rindex];
    let rbutton = document.querySelector(`.${rcolor}`);
    console.log(rbutton);
    gameseql.push(rcolor);
    console.log(gameseql);
    btnflash(rbutton);
}

function checkcolor(idx){
    //let idx=level-1;
    if(userseql[idx]===gameseql[idx]){
        if(userseql.length==gameseql.length){
            setTimeout(levelup(),1000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        h3.innerHTML=`Game over!!!! Your score is <b>${level}</b> <br> Press any key to restart`;
        reset();
    }
}
function btnpress() {
    console.log(this);
    let btn = this;
    userflash(btn);
    usercolor=btn.getAttribute("type");
    console.log(usercolor);
    userseql.push(usercolor);
    checkcolor(userseql.length-1);
}

let allbtns=document.querySelectorAll("#hi");
for (hi of allbtns){
    hi.addEventListener("click", btnpress);
}
function reset(){
    gamestarted=false;
    gameseql=[];
    userseql=[];
    level=0;
}