let npcGuanabara = {
    name: "NPC Guanabara",
    speed: 1000,
    maxLife: 240,
    life: 240,

}

const npcGuanabaraUi = document.createElement('div');
npcGuanabaraUi.setAttribute("id", "npc-guanabaraUi");
world.appendChild(npcGuanabaraUi);


const npcGuanabaraName = document.createElement('div');
npcGuanabaraName.setAttribute("id", "npc-guanabara-name");
npcGuanabaraUi.appendChild(npcGuanabaraName);
npcGuanabaraName.innerHTML = `${npcGuanabara.name}`;

const npcGuanabaraDivHeM = document.createElement('div');
npcGuanabaraDivHeM.setAttribute('id', 'npc-guanabara-div-hem');
npcGuanabaraUi.appendChild(npcGuanabaraDivHeM);

const npcGuanabaraMaxHealth = document.createElement('div');
npcGuanabaraMaxHealth.setAttribute('id', 'npc-guanabara-max-health');
npcGuanabaraDivHeM.appendChild(npcGuanabaraMaxHealth);

const npcGuanabaraHealth = document.createElement('div');
npcGuanabaraHealth.setAttribute("id", "npc-guanabara-health");
npcGuanabaraMaxHealth.appendChild(npcGuanabaraHealth);



const npcGuanabaraImage = document.createElement('div');
npcGuanabaraImage.setAttribute("id", "npc-guanabara-image");
npcGuanabaraUi.appendChild(npcGuanabaraImage);


let npcGuanabaraPosX = 700;
let npcGuanabaraPosY = 100;

npcGuanabaraUi.style.transform = `translate(${npcGuanabaraPosY}px, ${npcGuanabaraPosX}px)`

let cooldownNpcGuanabaraWalk = false;

// Animação do Sprite
//DOWN
function npcGuanabaraAnimaDown() { 
    
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/down1.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    setTimeout(npcGuanabaraAnimaDownMid, 800);
    
};
function npcGuanabaraAnimaDownMid () {
    
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/down2.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    setTimeout(npcGuanabaraAnimaDownEnd, 800);
    

}
function npcGuanabaraAnimaDownEnd () {
    
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/down3.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    
}

//UP
function npcGuanabaraAnimaUp() {
        
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/up1.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    setTimeout(npcGuanabaraAnimaUpMid, 800);
    
};
function npcGuanabaraAnimaUpMid () {
    
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/up2.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    setTimeout(npcGuanabaraAnimaUpEnd, 800);
    
}
function npcGuanabaraAnimaUpEnd () {
    
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/up3.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    
}

//LEFT
function npcGuanabaraAnimaLeft() {
        
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/left1.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    setTimeout(npcGuanabaraAnimaLeftMid, 800);
    
};
function npcGuanabaraAnimaLeftMid () {
    
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/left2.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    setTimeout(npcGuanabaraAnimaLeftEnd, 800);
    

}
function npcGuanabaraAnimaLeftEnd () {
    
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/left3.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    
}

//RIGHT
function npcGuanabaraAnimaRight() {
        
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/right1.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    setTimeout(npcGuanabaraAnimaRightMid, 800);
    
};
function npcGuanabaraAnimaRightMid () {
    
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/right2.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    setTimeout(npcGuanabaraAnimaRightEnd, 800);
    
}
function npcGuanabaraAnimaRightEnd () {
    
    npcGuanabaraImage.style.background = "url(../imgs/NpcMatheus/right3.png)"
    npcGuanabaraImage.style.backgroundRepeat = "no-repeat";
    npcGuanabaraImage.style.backgroundSize = "50px";
    npcGuanabaraImage.style.backgroundPosition = "50%";
    
}

let npcGuanabaraDistanceX = npcGuanabaraPosX - playerPosX;
let npcGuanabaraDistanceY = npcGuanabaraPosY - playerPosY;


    var npcGuanabaraIntervalWalkDefault = setInterval(npcGuanabaraWalk, 2800);
    function npcGuanabaraWalk() {
        let minNpcGuanabara = 1;
        let maxNpcGuanabara = 8;
        let randwalkNpcGuanabara = Math.floor(Math.random() * (maxNpcGuanabara - minNpcGuanabara) + minNpcGuanabara);

        if(randwalkNpcGuanabara <= 2 && npcGuanabaraPosY >= 100) {
            npcGuanabaraAnimaLeft();
            npcGuanabaraPosY = npcGuanabaraPosY - 100;
            npcGuanabaraUi.style.transform = `translate(${npcGuanabaraPosY}px,${npcGuanabaraPosX}px)`;      
            npcGuanabaraDistanceX = npcGuanabaraPosX - playerPosX
            npcGuanabaraDistanceY = npcGuanabaraPosY - playerPosY
            
          
        } 

        if(randwalkNpcGuanabara > 2 && randwalkNpcGuanabara <= 4 && npcGuanabaraPosX >= 100) {
            npcGuanabaraAnimaUp();
            npcGuanabaraPosX = npcGuanabaraPosX - 100;
            npcGuanabaraUi.style.transform = `translate(${npcGuanabaraPosY}px,${npcGuanabaraPosX}px)`;
            npcGuanabaraDistanceX = npcGuanabaraPosX - playerPosX
            npcGuanabaraDistanceY = npcGuanabaraPosY - playerPosY
        }

        if(randwalkNpcGuanabara > 4 && randwalkNpcGuanabara <= 6 && npcGuanabaraPosY < 100) {
            npcGuanabaraAnimaRight();
            npcGuanabaraPosY = npcGuanabaraPosY + 100;
            npcGuanabaraUi.style.transform = `translate(${npcGuanabaraPosY}px,${npcGuanabaraPosX}px)`;   
            npcGuanabaraDistanceX = npcGuanabaraPosX - playerPosX
            npcGuanabaraDistanceY = npcGuanabaraPosY - playerPosY
        }

        if(randwalkNpcGuanabara > 6 && randwalkNpcGuanabara <= 8 && npcGuanabaraPosX < 300) {
            npcGuanabaraAnimaDown();
            npcGuanabaraPosX = npcGuanabaraPosX + 100;
            npcGuanabaraUi.style.transform = `translate(${npcGuanabaraPosY}px,${npcGuanabaraPosX}px)`;
            npcGuanabaraDistanceX = npcGuanabaraPosX - playerPosX
            npcGuanabaraDistanceY = npcGuanabaraPosY - playerPosY
        }
    }


    let npcGuanabaraIsNear = false
    
    setInterval(npcGuanabaraNear, 100);
    

    function npcGuanabaraNear() {
        if (npcGuanabaraDistanceX <= 100 && npcGuanabaraDistanceX >= -100 && npcGuanabaraDistanceY <= 100 && npcGuanabaraDistanceY >= -100) {
         npcGuanabaraIsNear = true;   
        } else {
            npcGuanabaraIsNear = false;
        }
    } 



   

 
    

    const guanabaraTalkDiv = document.createElement('div');
    guanabaraTalkDiv.setAttribute('id', 'guanabara-talk-div');
    document.getElementById('engine').appendChild(guanabaraTalkDiv);


    npcGuanabaraUi.addEventListener('click', guanabaraWellcome);

    function guanabaraWellcome() {
        guanabaraTalkDiv.style.display = "flex" 
    }

    const guanabaraTalkContent = document.createElement('div');
    guanabaraTalkContent.setAttribute('id', 'guanabara-talk-content');
    guanabaraTalkDiv.appendChild(guanabaraTalkContent);

    //CONTENT LEFT
    const guanabaraTalkContentLeft = document.createElement('div');
    guanabaraTalkContentLeft.setAttribute('id', 'guanabara-talk-content-left');
    guanabaraTalkContent.appendChild(guanabaraTalkContentLeft);

    //LEFT UP
    const guanabaraTalkContentLeftUp = document.createElement('div');
    guanabaraTalkContentLeftUp.setAttribute('id', 'guanabara-talk-content-left-up');
    guanabaraTalkContentLeft.appendChild(guanabaraTalkContentLeftUp);

    const guanabaraTalkContentLeftUpDivImg = document.createElement('div');
    guanabaraTalkContentLeftUpDivImg.setAttribute('id', 'guanabara-talk-content-left-up-div-img');
    guanabaraTalkContentLeftUp.appendChild(guanabaraTalkContentLeftUpDivImg);

    const guanabaraTalkContentLeftUpImg = document.createElement('img');
    guanabaraTalkContentLeftUpImg.setAttribute('id', 'guanabara-talk-content-left-up-img');
    guanabaraTalkContentLeftUpImg.setAttribute('src', '../imgs/NpcMatheus/down3.png');
    guanabaraTalkContentLeftUpDivImg.appendChild(guanabaraTalkContentLeftUpImg);

    const guanabaraTalkContentLeftUpDivTalk = document.createElement('div');
    guanabaraTalkContentLeftUpDivTalk.setAttribute('id', 'guanabara-talk-content-left-up-div-talk');
    guanabaraTalkContentLeftUp.appendChild(guanabaraTalkContentLeftUpDivTalk);

    const guanabaraTalkContentLeftUpTalk = document.createElement('div');
    guanabaraTalkContentLeftUpTalk.setAttribute('id', 'guanabara-talk-content-left-up-talk');
    guanabaraTalkContentLeftUpDivTalk.appendChild(guanabaraTalkContentLeftUpTalk);
    guanabaraTalkContentLeftUpTalk.innerHTML = `Olá, me chamo Guanabara, seja bem vindo a loja ${player.name}!`;

    //LEFT DOWN
    const guanabaraTalkContentLeftDown = document.createElement('div');
    guanabaraTalkContentLeftDown.setAttribute('id', 'guanabara-talk-content-left-down');
    guanabaraTalkContentLeft.appendChild(guanabaraTalkContentLeftDown);

    const guanabaraTalkContentLeftDownAnswerOne = document.createElement('div');
    guanabaraTalkContentLeftDownAnswerOne.setAttribute('id', 'guanabara-talk-content-left-down-answer-1');
    guanabaraTalkContentLeftDown.appendChild(guanabaraTalkContentLeftDownAnswerOne);
    guanabaraTalkContentLeftDownAnswerOne.innerHTML = "Que legal, mostre-me a loja!"

    const guanabaraTalkContentLeftDownAnswerTwo = document.createElement('div');
    guanabaraTalkContentLeftDownAnswerTwo.setAttribute('id', 'guanabara-talk-content-left-down-answer-2');
    guanabaraTalkContentLeftDown.appendChild(guanabaraTalkContentLeftDownAnswerTwo);
    guanabaraTalkContentLeftDownAnswerTwo.innerHTML = "Que legal, quero conhecer mais sobre você!"

    const guanabaraTalkContentLeftDownAnswerThree = document.createElement('div');
    guanabaraTalkContentLeftDownAnswerThree.setAttribute('id', 'guanabara-talk-content-left-down-answer-1');
    guanabaraTalkContentLeftDown.appendChild(guanabaraTalkContentLeftDownAnswerThree);
    guanabaraTalkContentLeftDownAnswerThree.innerHTML = "Até mais!";
    guanabaraTalkContentLeftDownAnswerThree.addEventListener('click', guanabaraCloseTalk)


    function guanabaraCloseTalk () {
        guanabaraTalkDiv.style.display = "none" 
    }
    //CONTENT RIGHT
    const guanabaraTalkContentRight = document.createElement('div');
    guanabaraTalkContentRight.setAttribute('id', 'guanabara-talk-content-right');
    guanabaraTalkContent.appendChild(guanabaraTalkContentRight);


  

