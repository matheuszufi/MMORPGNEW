let zumbie = {
    name: "Zumbie",
    speed: 1000,
    maxLife: 240,
    life: 240,
    coins: 20,
    experience: 120
}

const zumbieUi = document.createElement('div');
zumbieUi.setAttribute("id", "zumbieUi");
world.appendChild(zumbieUi);


const zumbieName = document.createElement('div');
zumbieName.setAttribute("id", "zumbie-name");
zumbieUi.appendChild(zumbieName);
zumbieName.innerHTML = `${zumbie.name}`;

const zumbieDivHeM = document.createElement('div');
zumbieDivHeM.setAttribute('id', 'zumbie-div-hem');
zumbieUi.appendChild(zumbieDivHeM);

const zumbieHealth = document.createElement('div');
zumbieHealth.setAttribute("id", "zumbie-health");
zumbieDivHeM.appendChild(zumbieHealth);



const zumbieImage = document.createElement('div');
zumbieImage.setAttribute("id", "zumbie-image");
zumbieUi.appendChild(zumbieImage);


let zumbiePosX = 0;
let zumbiePosY = 100;

zumbieUi.style.transform = `translate(${zumbiePosY}px, ${zumbiePosX}px)`

let cooldownZumbieWalk = false;

// Animação do Sprite
//DOWN
function zumbieAnimaDown() { 
    if(!zumbieIsDead){
    zumbieImage.style.background = "url(../imgs/zumbie/down1.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    setTimeout(zumbieAnimaDownMid, 800);
    }
};
function zumbieAnimaDownMid () {
    if(!zumbieIsDead){
    zumbieImage.style.background = "url(../imgs/zumbie/down2.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    setTimeout(zumbieAnimaDownEnd, 800);
    }

}
function zumbieAnimaDownEnd () {
    if(!zumbieIsDead){
    zumbieImage.style.background = "url(../imgs/zumbie/down3.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    }
}

//UP
function zumbieAnimaUp() {
    if(!zumbieIsDead){    
    zumbieImage.style.background = "url(../imgs/zumbie/up1.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    setTimeout(zumbieAnimaUpMid, 800);
    }
};
function zumbieAnimaUpMid () {
    if(!zumbieIsDead){
    zumbieImage.style.background = "url(../imgs/zumbie/up2.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    setTimeout(zumbieAnimaUpEnd, 800);
    }
}
function zumbieAnimaUpEnd () {
    if(!zumbieIsDead){
    zumbieImage.style.background = "url(../imgs/zumbie/up3.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    }
}

//LEFT
function zumbieAnimaLeft() {
    if(!zumbieIsDead){    
    zumbieImage.style.background = "url(../imgs/zumbie/left1.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    setTimeout(zumbieAnimaLeftMid, 800);
    }
};
function zumbieAnimaLeftMid () {
    if(!zumbieIsDead){
    zumbieImage.style.background = "url(../imgs/zumbie/left2.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    setTimeout(zumbieAnimaLeftEnd, 800);
    }

}
function zumbieAnimaLeftEnd () {
    if(!zumbieIsDead){
    zumbieImage.style.background = "url(../imgs/zumbie/left3.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    }
}

//RIGHT
function zumbieAnimaRight() {
    if(!zumbieIsDead){    
    zumbieImage.style.background = "url(../imgs/zumbie/right1.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    setTimeout(zumbieAnimaRightMid, 800);
    }
};
function zumbieAnimaRightMid () {
    if(!zumbieIsDead){
    zumbieImage.style.background = "url(../imgs/zumbie/right2.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    setTimeout(zumbieAnimaRightEnd, 800);
    }
}
function zumbieAnimaRightEnd () {
    if(!zumbieIsDead){
    zumbieImage.style.background = "url(../imgs/zumbie/right3.png)"
    zumbieImage.style.backgroundRepeat = "no-repeat";
    zumbieImage.style.backgroundSize = "50px";
    zumbieImage.style.backgroundPosition = "50%";
    }
}

let zumbieDistanceX = zumbiePosX - playerPosX;
let zumbieDistanceY = zumbiePosY - playerPosY;


    var intervalZumbieWalkDefault = setInterval(zumbieWalk, 2800);
    function zumbieWalk() {
        let minZumbie = 1;
        let maxZumbie = 8;
        let randwalkZumbie = Math.floor(Math.random() * (maxZumbie - minZumbie) + minZumbie);

        if(randwalkZumbie <= 2 && zumbiePosY >= 80) {
            zumbieAnimaLeft();
            zumbiePosY = zumbiePosY - 100;
            zumbieUi.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;      
            zumbieDistanceX = zumbiePosX - playerPosX
            zumbieDistanceY = zumbiePosY - playerPosY
            
          
        } 

        if(randwalkZumbie > 2 && randwalkZumbie <= 4 && zumbiePosX >= 50) {
            zumbieAnimaUp();
            zumbiePosX = zumbiePosX - 100;
            zumbieUi.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;
            zumbieDistanceX = zumbiePosX - playerPosX
            zumbieDistanceY = zumbiePosY - playerPosY
        }

        if(randwalkZumbie > 4 && randwalkZumbie <= 6 && zumbiePosY < 7020) {
            zumbieAnimaRight();
            zumbiePosY = zumbiePosY + 100;
            zumbieUi.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;   
            zumbieDistanceX = zumbiePosX - playerPosX
            zumbieDistanceY = zumbiePosY - playerPosY
        }

        if(randwalkZumbie > 6 && randwalkZumbie <= 8 && zumbiePosX < 4500) {
            zumbieAnimaDown();
            zumbiePosX = zumbiePosX + 100;
            zumbieUi.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;
            zumbieDistanceX = zumbiePosX - playerPosX
            zumbieDistanceY = zumbiePosY - playerPosY
        }
    }


    let zumbieIsNear = false
    
    setInterval(zumbieNear, 100);
    
    function zumbieNear() {
        if (zumbieDistanceX <= 100 && zumbieDistanceX >= -100 && zumbieDistanceY <= 100 && zumbieDistanceY >= -100) {
         zumbieIsNear = true;   
        } else {
            zumbieIsNear = false;
        }
    } 
    
    let lifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;

    zumbieUi.addEventListener('click', attackEnemy);
    zumbieUi.addEventListener('dblclick', attackBowEnemy)

    function attackEnemy() {
        if (zumbieDistanceX <= 100 && zumbieDistanceX >= -100 && zumbieDistanceY <= 100 && zumbieDistanceY >= -100) {
            zumbie.life -= 20;
            lifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${lifePercentual}%`;

            if(zumbie.life <= 0) {
                zumbieIsDead = true;
     
                zumbieKill();    
              
            }
        }
    }

    function attackBowEnemy() {

    }

    var zumbieIsDead = false;

    function zumbieKill() {
        zumbieUi.style.display = "none";
        
        setTimeout(zumbieHidden, 4000);

        const zumbieDead = document.createElement('div');
        zumbieDead.setAttribute('id', 'zumbie-dead');
        world.appendChild(zumbieDead);
        zumbieDead.style.transform = `translate(${zumbiePosY}px, ${zumbiePosX}px)`

        zumbieDead.addEventListener('click', zumbieLoot);
        
        function zumbieLoot() {
            zumbieDead.style.display = "none";
            player.coins += zumbie.coins;
            menuDownCoinsContent.innerHTML = `${player.coins}`
        }

        player.experience += zumbie.experience;
    }




    function zumbieHidden () {
       
        setTimeout(zumbieSpawn, 1000);
    }

    function zumbieSpawn(){
        zumbieUi.style.display = "block";
        zumbieIsDead = false;
        zumbieImage.style.background = "url(../imgs/zumbie/down3.png)"
        zumbieImage.style.backgroundSize = "50px"
        zumbieImage.style.backgroundRepeat = "no-repeat"
        zumbieImage.style.backgroundPosition = "50%"

        zumbie.life = zumbie.maxLife;
        lifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
        zumbieHealth.style.width = `${lifePercentual}%`;

    }
