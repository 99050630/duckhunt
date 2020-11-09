var duck = document.getElementById("duck");
var body = document.getElementById("game")
var duckTop = 300;
var duckLeft = 500;

var screenW = screen.width - 175;
var screenH = 525;

console.log(screenW + " " + screenH);

var cMiss = 0;
var cHit = 0;
var counter = 0;

console.log(duckTop);
var dir = [
    "N",
    "NE",
    "E",
    "SE",
    "S",
    "SW",
    "W",
    "NW",
];

body.addEventListener('click', (e) => {
    if (e.target.classList.contains('img')) {
        e.stopPropagation();
        addHit();
    }else{
        addMiss();
    }
}, true);

function addHit(){
    if(cHit >= 20){
        alert("je hebt gewonnen, je hebt de eend " + cMiss + " keer gemist");
        location.reload();
    }
    cHit++;
    document.getElementById("counterHit").innerHTML = cHit;
}
function addMiss(){
    cMiss++;
    document.getElementById("counterMiss").innerHTML = cMiss;
    if(cMiss >= 20){
        alert("verloren je had " + cHit + " punten");
        location.reload();
    }
}

function fly(direction){
    switch(dir[direction]){
        case "N":
            duckTop = (parseInt(duckTop) - 75);
            if(duckTop < screenH && duckTop > 0){
                duck.style.top = duckTop + "px";
            }else{
                duckTop += 75;
            }
            break;
        case "NE":
            duckTop = (parseInt(duckTop) - 75);
            duckLeft = (parseInt(duckLeft) + 75);
            if(duckLeft > 0 && duckLeft < screenW && duckTop > 0 && duckTop < screenH){
                duck.style.top = duckTop + "px";
                duck.style.left = duckLeft + "px";
            }else{
                duckTop += 75;
                duckLeft -= 75;
            }
            break;
        case "E":
            duckLeft = (parseInt(duckLeft) + 75);
            if(duckLeft > 0 && duckLeft < screenW){
                duck.style.left = duckLeft + "px";
            }else{
                duckLeft -= 75;
            }
            break;
        case "SE":
            duckTop = (parseInt(duckTop) + 75);
            duckLeft = (parseInt(duckLeft) - 75);
            if(duckLeft > 0 && duckLeft < screenW && duckTop > 0 && duckTop < screenH){
                duck.style.top = duckTop + "px";
                duck.style.left = duckLeft + "px";
            }else{
                duckTop -= 75;
                duckLeft += 75;
            }
            break;
        case "S":
            duckTop = (parseInt(duckTop) + 75);
            if(duckTop < screenH && duckTop > 0){
                duck.style.top = duckTop + "px";
            }else{
                duckTop -= 75;
            }
            break;
        case "SW":
            duckTop = (parseInt(duckTop) + 75);
            duckLeft = (parseInt(duckLeft) - 75);
            if(duckLeft > 0 && duckLeft < screenW && duckTop > 0 && duckTop < screenH){
                duck.style.top = duckTop + "px";
                duck.style.left = duckLeft + "px";
            }else{
                duckTop -= 75;
                duckLeft += 75;
            }
            break;
        case "W":
            duckLeft = (parseInt(duckLeft) - 75);
            if(duckLeft > 0 && duckLeft < screenW){
                duck.style.left = duckLeft + "px";
            }else{
                duckLeft += 75;
            }
            break;
        case "NW":
            duckTop = (parseInt(duckTop) - 75);
            duckLeft = (parseInt(duckLeft) - 75);
            if(duckLeft > 0 && duckLeft < screenW && duckTop > 0 && duckTop < screenH){
                duck.style.top = duckTop + "px";
                duck.style.left = duckLeft + "px";
            }else{
                duckTop += 75;
                duckLeft += 75;
            }
            break;
    }
}
function random(){
    var random = Math.floor(Math.random() * (7 - 0) ) + 0;
    console.log(random);
    fly(random);
    // fly(random);
}
// fly(dir[0]);
while(counter < 20){
    (function(){
        setInterval(function() {
            random();
        }, 500);
    })(counter++);
}
console.log(dir[0]);
