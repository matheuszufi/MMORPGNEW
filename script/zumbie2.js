let zumbie2 = {
    name: "Zumbie",
    speed: 1000,
    maxLife: 240,
    life: 240,
    coins: 20,
    experience: 250,
    loot: {
        leatherBoots: {
            cost: 20,
            img: "../imgs/Leather+Boots.gif"
        }
    }
}

const zumbie2Ui = document.createElement('div');
zumbie2Ui.setAttribute("id", "zumbieUi");
world.appendChild(zumbie2Ui);


const zumbie2Name = document.createElement('div');
zumbie2Name.setAttribute("id", "zumbie-name");
zumbie2Ui.appendChild(zumbie2Name);
zumbie2Name.innerHTML = `${zumbie2.name}`;

const zumbie2DivHeM = document.createElement('div');
zumbie2DivHeM.setAttribute('id', 'zumbie-div-hem');
zumbie2Ui.appendChild(zumbie2DivHeM);

const zumbie2MaxHealth = document.createElement('div');
zumbie2MaxHealth.setAttribute('id', 'zumbie-max-health');
zumbie2DivHeM.appendChild(zumbie2MaxHealth);

const zumbie2Health = document.createElement('div');
zumbie2Health.setAttribute("id", "zumbie-health");
zumbie2MaxHealth.appendChild(zumbie2Health);



const zumbie2Image = document.createElement('div');
zumbie2Image.setAttribute("id", "zumbie-image");
zumbie2Ui.appendChild(zumbie2Image);


let zumbie2PosX = 400;
let zumbie2PosY = 400;

zumbie2Ui.style.transform = `translate(${zumbie2PosY}px, ${zumbie2PosX}px)`

let cooldownZumbie2Walk = false;

// Animação do Sprite
//DOWN
function zumbie2AnimaDown() { 
    if(!zumbie2IsDead){
    zumbie2Image.style.background = "url(../imgs/zumbie/down1.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    setTimeout(zumbie2AnimaDownMid, 800);
    }
};
function zumbie2AnimaDownMid () {
    if(!zumbie2IsDead){
    zumbie2Image.style.background = "url(../imgs/zumbie/down2.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    setTimeout(zumbie2AnimaDownEnd, 800);
    }

}
function zumbie2AnimaDownEnd () {
    if(!zumbie2IsDead){
    zumbie2Image.style.background = "url(../imgs/zumbie/down3.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    }
}

//UP
function zumbie2AnimaUp() {
    if(!zumbie2IsDead){    
    zumbie2Image.style.background = "url(../imgs/zumbie/up1.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    setTimeout(zumbie2AnimaUpMid, 800);
    }
};
function zumbie2AnimaUpMid () {
    if(!zumbie2IsDead){
    zumbie2Image.style.background = "url(../imgs/zumbie/up2.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    setTimeout(zumbie2AnimaUpEnd, 800);
    }
}
function zumbie2AnimaUpEnd () {
    if(!zumbie2IsDead){
    zumbie2Image.style.background = "url(../imgs/zumbie/up3.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    }
}

//LEFT
function zumbie2AnimaLeft() {
    if(!zumbie2IsDead){    
    zumbie2Image.style.background = "url(../imgs/zumbie/left1.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    setTimeout(zumbie2AnimaLeftMid, 800);
    }
};
function zumbie2AnimaLeftMid () {
    if(!zumbie2IsDead){
    zumbie2Image.style.background = "url(../imgs/zumbie/left2.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    setTimeout(zumbie2AnimaLeftEnd, 800);
    }

}
function zumbie2AnimaLeftEnd () {
    if(!zumbie2IsDead){
    zumbie2Image.style.background = "url(../imgs/zumbie/left3.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    }
}

//RIGHT
function zumbie2AnimaRight() {
    if(!zumbie2IsDead){    
    zumbie2Image.style.background = "url(../imgs/zumbie/right1.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    setTimeout(zumbie2AnimaRightMid, 800);
    }
};
function zumbie2AnimaRightMid () {
    if(!zumbie2IsDead){
    zumbie2Image.style.background = "url(../imgs/zumbie/right2.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    setTimeout(zumbie2AnimaRightEnd, 800);
    }
}
function zumbie2AnimaRightEnd () {
    if(!zumbie2IsDead){
    zumbie2Image.style.background = "url(../imgs/zumbie/right3.png)"
    zumbie2Image.style.backgroundRepeat = "no-repeat";
    zumbie2Image.style.backgroundSize = "50px";
    zumbie2Image.style.backgroundPosition = "50%";
    }
}

let zumbie2DistanceX = zumbie2PosX - playerPosX;
let zumbie2DistanceY = zumbie2PosY - playerPosY;


    var intervalZumbie2WalkDefault = setInterval(zumbie2Walk, 2800);
    function zumbie2Walk() {
        let minZumbie2 = 1;
        let maxZumbie2 = 8;
        let randwalkZumbie2 = Math.floor(Math.random() * (maxZumbie2 - minZumbie2) + minZumbie2);

        if(randwalkZumbie2 <= 2 && zumbie2PosY >= 80) {
            zumbie2AnimaLeft();
            zumbie2PosY = zumbie2PosY - 100;
            zumbie2Ui.style.transform = `translate(${zumbie2PosY}px,${zumbie2PosX}px)`;      
            zumbie2DistanceX = zumbie2PosX - playerPosX
            zumbie2DistanceY = zumbie2PosY - playerPosY
            
          
        } 

        if(randwalkZumbie2 > 2 && randwalkZumbie2 <= 4 && zumbie2PosX >= 50) {
            zumbie2AnimaUp();
            zumbie2PosX = zumbie2PosX - 100;
            zumbie2Ui.style.transform = `translate(${zumbie2PosY}px,${zumbie2PosX}px)`;
            zumbie2DistanceX = zumbie2PosX - playerPosX
            zumbie2DistanceY = zumbie2PosY - playerPosY
        }

        if(randwalkZumbie2 > 4 && randwalkZumbie2 <= 6 && zumbie2PosY < 7020) {
            zumbie2AnimaRight();
            zumbie2PosY = zumbie2PosY + 100;
            zumbie2Ui.style.transform = `translate(${zumbie2PosY}px,${zumbie2PosX}px)`;   
            zumbie2DistanceX = zumbie2PosX - playerPosX
            zumbie2DistanceY = zumbie2PosY - playerPosY
        }

        if(randwalkZumbie2 > 6 && randwalkZumbie2 <= 8 && zumbie2PosX < 4500) {
            zumbie2AnimaDown();
            zumbie2PosX = zumbie2PosX + 100;
            zumbie2Ui.style.transform = `translate(${zumbie2PosY}px,${zumbie2PosX}px)`;
            zumbie2DistanceX = zumbie2PosX - playerPosX
            zumbie2DistanceY = zumbie2PosY - playerPosY
        }
    }


    let zumbie2IsNear = false
    
    setInterval(zumbie2Near, 100);
    
    function zumbie2Near() {
        if (zumbie2DistanceX <= 100 && zumbie2DistanceX >= -100 && zumbie2DistanceY <= 100 && zumbie2DistanceY >= -100) {
         zumbie2IsNear = true;   
        } else {
            zumbie2IsNear = false;
        }
    } 
    
    let zumbie2LifePercentual = `${(zumbie2.life / zumbie2.maxLife) * 100}`;

    zumbie2Ui.addEventListener('click', attackEnemy);
    zumbie2Ui.addEventListener('dblclick', attackBowEnemy)

    function attackEnemy() {

        if (zumbie2DistanceX <= 100 && zumbie2DistanceX >= -100 && zumbie2DistanceY <= 100 && zumbie2DistanceY >= -100) {
            ++player.attackCount;
            infoAttackProgressBar.style.width = `${(player.attackCount/player.attackToLVLUP)*100}%`
            if (player.attackCount >= player.attackToLVLUP) {
                attackLevelUp();
            }
   
            zumbie2AttackAnim();
            
            zumbie2.life -= player.attack;
            zumbie2LifePercentual = `${(zumbie2.life / zumbie2.maxLife) * 100}`;
            zumbie2Health.style.width = `${zumbie2LifePercentual}%`;

            if(zumbie2.life <= 0) {
                zumbie2IsDead = true;
     
                zumbie2Kill();    
              
            }
        }
    }
    function zumbie2AttackAnim () {
        const zumbie2AttackAnimation = document.createElement('div');
        zumbie2AttackAnimation.setAttribute('id', 'zumbie-atk-animation');
        zumbie2AttackAnimation.innerHTML = `-${player.attack}`

        zumbie2Ui.appendChild(zumbie2AttackAnimation);
        setTimeout(zumbie2CloseAttackAnimation, 1000);
    
        function zumbie2CloseAttackAnimation() {
            zumbie2AttackAnimation.remove();
        }      
    }

    function attackBowEnemy() {

    }

    var zumbie2IsDead = false;



    function zumbie2Kill() {
        
        zumbie2Ui.style.display = "none";
        player.experience += zumbie2.experience;
        infoExperienceProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`
        infoLevelProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`
        infoExperienceCount.innerHTML = `${player.experience}`
        zumbie2ExpAnimation();
        if(player.experience >= player.toLVLUP) {
            levelUp();
        }
        setTimeout(zumbie2Hidden, 4000);

        const zumbie2DeadUi = document.createElement('div');
        zumbie2DeadUi.setAttribute('id', 'zumbie-dead-ui');
        world.appendChild(zumbie2DeadUi);
        
        zumbie2DeadUi.style.transform = `translate(${zumbie2PosY}px, ${zumbie2PosX}px)`;
        zumbie2DeadUi.addEventListener('click', zumbie2Loot);
        
        function zumbie2Loot() {
            zumbie2DeadUi.style.display = "none";
            player.coins += zumbie2.coins;
            menuDownCoinsContent.innerHTML = `${player.coins}`
            zumbie2LootCoinAnime();
            zumbie2ShowLoot();
            
            return zumbie2DeadUi;
        }

 
    }




    function zumbie2Hidden () {
       
        setTimeout(zumbie2Spawn, 1000);
    }

    function zumbie2Spawn(){
        zumbie2Ui.style.display = "block";
        zumbie2IsDead = false;
        zumbie2Image.style.background = "url(../imgs/zumbie/down3.png)"
        zumbie2Image.style.backgroundSize = "50px"
        zumbie2Image.style.backgroundRepeat = "no-repeat"
        zumbie2Image.style.backgroundPosition = "50%"

        zumbie2.life = zumbie2.maxLife;
        zumbie2LifePercentual = `${(zumbie2.life / zumbie2.maxLife) * 100}`;
        zumbie2Health.style.width = `${zumbie2LifePercentual}%`;

    }


    function zumbie2ExpAnimation() {
        const zumbie2ExpAnimation = document.createElement('div');
        zumbie2ExpAnimation.setAttribute('id', 'zumbie-exp-animation');
        zumbie2ExpAnimation.innerHTML = `+${zumbie2.experience}`

        playerUi.appendChild(zumbie2ExpAnimation);
        setTimeout(zumbie2CloseExpAnimation, 1000);
    
        function zumbie2CloseExpAnimation() {
            zumbie2ExpAnimation.remove();
        }
    };



    function zumbie2LootCoinAnime() {
        const zumbie2LootCoinAnimation = document.createElement('div');
        zumbie2LootCoinAnimation.setAttribute('id', 'zumbie-lootcoin-animation');
        zumbie2LootCoinAnimation.innerHTML = `+${zumbie2.coins}`;

        playerUi.appendChild(zumbie2LootCoinAnimation);
        setTimeout(zumbie2CloseLootCoinAnimation, 1000);
    
        function zumbie2CloseLootCoinAnimation() {
            zumbie2LootCoinAnimation.remove();
        }
    };
    
    