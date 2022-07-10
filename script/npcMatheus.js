let npcMatheus = {
    name: "NPC MATHEUS",
    speed: 1000,
    maxLife: 240,
    life: 240,

}

const npcMatheusUi = document.createElement('div');
npcMatheusUi.setAttribute("id", "npc-matheusUi");
world.appendChild(npcMatheusUi);


const npcMatheusName = document.createElement('div');
npcMatheusName.setAttribute("id", "npc-matheus-name");
npcMatheusUi.appendChild(npcMatheusName);
npcMatheusName.innerHTML = `${npcMatheus.name}`;

const npcMatheusDivHeM = document.createElement('div');
npcMatheusDivHeM.setAttribute('id', 'npc-matheus-div-hem');
npcMatheusUi.appendChild(npcMatheusDivHeM);

const npcMatheusMaxHealth = document.createElement('div');
npcMatheusMaxHealth.setAttribute('id', 'npc-matheus-max-health');
npcMatheusDivHeM.appendChild(npcMatheusMaxHealth);

const npcMatheusHealth = document.createElement('div');
npcMatheusHealth.setAttribute("id", "npc-matheus-health");
npcMatheusMaxHealth.appendChild(npcMatheusHealth);



const npcMatheusImage = document.createElement('div');
npcMatheusImage.setAttribute("id", "npc-matheus-image");
npcMatheusUi.appendChild(npcMatheusImage);


let npcMatheusPosX = 300;
let npcMatheusPosY = 100;

npcMatheusUi.style.transform = `translate(${npcMatheusPosY}px, ${npcMatheusPosX}px)`

let cooldownNpcMatheusWalk = false;

// Animação do Sprite
//DOWN
function npcMatheusAnimaDown() { 
    
    npcMatheusImage.style.background = "url(../imgs/zumbie/down1.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    setTimeout(npcMatheusAnimaDownMid, 800);
    
};
function npcMatheusAnimaDownMid () {
    
    npcMatheusImage.style.background = "url(../imgs/zumbie/down2.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    setTimeout(npcMatheusAnimaDownEnd, 800);
    

}
function npcMatheusAnimaDownEnd () {
    
    npcMatheusImage.style.background = "url(../imgs/zumbie/down3.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    
}

//UP
function npcMatheusAnimaUp() {
        
    npcMatheusImage.style.background = "url(../imgs/zumbie/up1.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    setTimeout(npcMatheusAnimaUpMid, 800);
    
};
function npcMatheusAnimaUpMid () {
    
    npcMatheusImage.style.background = "url(../imgs/zumbie/up2.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    setTimeout(npcMatheusAnimaUpEnd, 800);
    
}
function npcMatheusAnimaUpEnd () {
    
    npcMatheusImage.style.background = "url(../imgs/zumbie/up3.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    
}

//LEFT
function npcMatheusAnimaLeft() {
        
    npcMatheusImage.style.background = "url(../imgs/zumbie/left1.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    setTimeout(npcMatheusAnimaLeftMid, 800);
    
};
function npcMatheusAnimaLeftMid () {
    
    npcMatheusImage.style.background = "url(../imgs/zumbie/left2.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    setTimeout(npcMatheusAnimaLeftEnd, 800);
    

}
function npcMatheusAnimaLeftEnd () {
    
    npcMatheusImage.style.background = "url(../imgs/zumbie/left3.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    
}

//RIGHT
function npcMatheusAnimaRight() {
        
    npcMatheusImage.style.background = "url(../imgs/zumbie/right1.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    setTimeout(npcMatheusAnimaRightMid, 800);
    
};
function npcMatheusAnimaRightMid () {
    
    npcMatheusImage.style.background = "url(../imgs/zumbie/right2.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    setTimeout(npcMatheusAnimaRightEnd, 800);
    
}
function npcMatheusAnimaRightEnd () {
    
    npcMatheusImage.style.background = "url(../imgs/zumbie/right3.png)"
    npcMatheusImage.style.backgroundRepeat = "no-repeat";
    npcMatheusImage.style.backgroundSize = "50px";
    npcMatheusImage.style.backgroundPosition = "50%";
    
}

let npcMatheusDistanceX = npcMatheusPosX - playerPosX;
let npcMatheusDistanceY = npcMatheusPosY - playerPosY;


    var npcMatheusIntervalWalkDefault = setInterval(npcMatheusWalk, 2800);
    function npcMatheusWalk() {
        let minNpcMatheus = 1;
        let maxNpcMatheus = 8;
        let randwalkNpcMatheus = Math.floor(Math.random() * (maxNpcMatheus - minNpcMatheus) + minNpcMatheus);

        if(randwalkNpcMatheus <= 2 && npcMatheusPosY >= 100) {
            npcMatheusAnimaLeft();
            npcMatheusPosY = npcMatheusPosY - 100;
            npcMatheusUi.style.transform = `translate(${npcMatheusPosY}px,${npcMatheusPosX}px)`;      
            npcMatheusDistanceX = npcMatheusPosX - playerPosX
            npcMatheusDistanceY = npcMatheusPosY - playerPosY
            
          
        } 

        if(randwalkNpcMatheus > 2 && randwalkNpcMatheus <= 4 && npcMatheusPosX >= 100) {
            npcMatheusAnimaUp();
            npcMatheusPosX = npcMatheusPosX - 100;
            npcMatheusUi.style.transform = `translate(${npcMatheusPosY}px,${npcMatheusPosX}px)`;
            npcMatheusDistanceX = npcMatheusPosX - playerPosX
            npcMatheusDistanceY = npcMatheusPosY - playerPosY
        }

        if(randwalkNpcMatheus > 4 && randwalkNpcMatheus <= 6 && npcMatheusPosY < 100) {
            npcMatheusAnimaRight();
            npcMatheusPosY = npcMatheusPosY + 100;
            npcMatheusUi.style.transform = `translate(${npcMatheusPosY}px,${npcMatheusPosX}px)`;   
            npcMatheusDistanceX = npcMatheusPosX - playerPosX
            npcMatheusDistanceY = npcMatheusPosY - playerPosY
        }

        if(randwalkNpcMatheus > 6 && randwalkNpcMatheus <= 8 && npcMatheusPosX < 300) {
            npcMatheusAnimaDown();
            npcMatheusPosX = npcMatheusPosX + 100;
            npcMatheusUi.style.transform = `translate(${npcMatheusPosY}px,${npcMatheusPosX}px)`;
            npcMatheusDistanceX = npcMatheusPosX - playerPosX
            npcMatheusDistanceY = npcMatheusPosY - playerPosY
        }
    }


    let npcMatheusIsNear = false
    
    setInterval(npcMatheusNear, 100);
    

    function npcMatheusNear() {
        if (npcMatheusDistanceX <= 100 && npcMatheusDistanceX >= -100 && npcMatheusDistanceY <= 100 && npcMatheusDistanceY >= -100) {
         npcMatheusIsNear = true;   
        } else {
            npcMatheusIsNear = false;
        }
    } 
    
  

