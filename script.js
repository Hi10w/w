/* Declare variables below to save the different sections (divs) of your story*/
let title =
    document.querySelector('.title');
let next10 =
    document.querySelector('.next10');
let optiontwoRight =
    document.querySelector('.option-two-right');
let diverightTwo =
    document.querySelector('.dive-right-two');
let optiontwoLose =
    document.querySelector('.option-two-lose');
let next9 =
    document.querySelector('.next9');
let optiontwoLeft =
    document.querySelector('.option-two-left');
let diveleftTwo =
    document.querySelector('.dive-left-two');
let optiontwocounterAttack =
    document.querySelector('.option-two-counter-attack');
let next7 =
    document.querySelector('.next7');
let optiontwoPass =
    document.querySelector('.option-two-pass');
let pass2 =
    document.querySelector('.pass2');
let optiontwoDream =
    document.querySelector('.option-two-dream');
let next11 =
    document.querySelector('.next11');
let optiontwoWin =
    document.querySelector('.option-two-win');
let next8 =
    document.querySelector('.next8');
let optiontwoShoot =
    document.querySelector('.option-two-shoot');
let shoot2 =
    document.querySelector('.shoot2');

let gonzalesShoot =
    document.querySelector('.gonzales-shoot');
let next =
    document.querySelector('.next');
let optiononeShoot =
    document.querySelector('.option-one-shoot');

let next4 =
    document.querySelector('.next4');
let diverightelSalvador =
    document.querySelector('.dive-right-el-salvador');
let optiononeLose =
    document.querySelector('.option-one-lose');
let optiononeRight =
    document.querySelector('.option-one-right');
let next3 =
    document.querySelector('.next3');
let optiononeLeft =
    document.querySelector('.option-one-left');
let diveleftelSalvador =
    document.querySelector('.dive-left-el-salvador');
let noo =
    document.querySelector('.noo');
let optiononeparttwoNo =
    document.querySelector('.option-one-part-two-no');
let optiononeDream =
    document.querySelector('.option-one-dream');
let next5 =
    document.querySelector('.next5');
let optiononeWin =
    document.querySelector('.option-one-win');
let next2 =
    document.querySelector('.next2');
let optiononeDribble =
    document.querySelector('.option-one-dribble');

let gonzalesDribble =
    document.querySelector('.gonzales-dribble');
let yess =
    document.querySelector('.yess');

let opening =
    document.querySelector('.story-opening');


let buttons =
    document.querySelector('.buttons');


let buttonOne =
    document.querySelector('.button-one');

let optionOne = document.querySelector('.option-one-screen');

let optiononePass = document.querySelector('.option-one-pass');

let optioneOne3 = 
document.querySelector('.option-one-shoot');
let optionOne4 = document.querySelector('.option-one-dribble');
let optionOne5 = document.querySelector('.option-one-left');
let optionOne6 = document.querySelector('.option-one-right');
let optionOne7 = document.querySelector('.option-one-win');
let optionOne8 = document.querySelector('.option-one-dream');
let optionOne9 = document.querySelector('.option-one-lose');

let hi = document.querySelector('.option-two-screen');
let buttonTwo = document.querySelector('.button-two');

let optionTwo2 = document.querySelector('.option-two-pass');
let optionTwo3 = document.querySelector('.option-two-shoot');
let optionTwo4 = document.querySelector('.option-two-counter-attack');
let optionTwo5 = document.querySelector('.option-two-left');
let optionTwo6 = document.querySelector('.option-two-right');
let optionTwo7 = document.querySelector('.option-two-win');
let optionTwo8 = document.querySelector('.option-two-lose');
let optionTwo9 = document.querySelector('.option-two-ose');

buttonOne.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionOne.style.display = "block";
    title.innerHTML = "El Salvador";
};
buttonTwo.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    hi.style.display = "block";
    title.innerHTML = "Guatemala";
};

yess.onclick = function() {
    optionOne.style.display = "none";
    optiononePass.style.display = "block";
};

gonzalesDribble.onclick = function() {
    optiononePass.style.display = "none";
    optiononeDribble.style.display = "block";
};

next2.onclick = function() {
    optiononeDribble.style.display = "none";
    optiononeWin.style.display = "block";
};
next5.onclick = function() {
    optiononeWin.style.display = "none";
    optiononeDream.style.display = "block";
};
noo.onclick = function() {
    optionOne.style.display = "none";
    optiononeparttwoNo.style.display = "block";
};
diveleftelSalvador.onclick = function() {
    optiononeparttwoNo.style.display = "none";
    optiononeLeft.style.display = "block";
};

next3.onclick = function() {
    optiononeLeft.style.display = "none";
    optionOne.style.display = "block";
};
diverightelSalvador.onclick = function() {
    optiononeparttwoNo.style.display = "none";
    optiononeRight.style.display = "block";
};
next4.onclick = function() {
    optiononeRight.style.display = "none";
    optiononeLose.style.display = "block";
};
gonzalesShoot.onclick = function() {
    optiononePass.style.display = "none";
    optiononeShoot.style.display = "block";
};
next.onclick = function() {
    optiononeShoot.style.display = "none";
    optiononeparttwoNo.style.display = "block";
};
shoot2.onclick = function() {
    hi.style.display = "none";
    optiontwoShoot.style.display = "block";
};

next8.onclick = function() {
    optiontwoShoot.style.display = "none";
    optiontwoWin.style.display = "block";
};
next11.onclick = function() {
    optiontwoWin.style.display = "none";
    optiontwoDream.style.display = "block";
};
pass2.onclick = function() {
    hi.style.display = "none";
    optiontwoPass.style.display = "block";
};
next7.onclick = function() {
    optiontwoPass.style.display = "none";
    optiontwocounterAttack.style.display = "block";
};
diveleftTwo.onclick = function() {
    optiontwocounterAttack.style.display = "none";
    optiontwoLeft.style.display = "block";
};
next9.onclick = function() {
    optiontwoLeft.style.display = "none";
    optiontwoLose.style.display = "block";
};
diverightTwo.onclick = function() {
    optiontwocounterAttack.style.display = "none";
    optiontwoRight.style.display = "block";
};
next10.onclick = function() {
    optiontwoRight.style.display = "none";
    hi.style.display = "block";
};
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/