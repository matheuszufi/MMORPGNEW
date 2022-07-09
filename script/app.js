let player = {
    name: "Matheus",
   

    coins: 0,
    level: 1,
    experience: 0,
    toLVLUP: 500,

    life: 180,
    maxLife: 180,
    mana: 240,
    maxMana: 240,
    attack: 4,

    speed: 800,
    speedCount: 0,
    speedToLVLUP: 100,

    attackLevel: 1,
    attackCount: 0,
    attackToLVLUP: 10
}

const world = document.getElementById('world');
const playerUi = document.createElement('div');
playerUi.setAttribute("id", "playerUi");
world.appendChild(playerUi);

var worldStartX = 0;
var worldStartY = 0;

world.style.marginLeft = "50vw";
world.style.marginTop = "40vh";

let playerPosX = 0;
let playerPosY = 0;


let cooldownWalk = false;

document.addEventListener('keydown', (event) => {

    btnA = "a";
    btnW = "w";
    btnD = "d";
    btnS = "s";
 
    if(event.key === btnA) {
        if (playerPosY > 0) {
            if(!cooldownWalk){
                animaLeft();
                playerPosY = playerPosY - 100;
                playerUi.style.transform = `translate(${playerPosY}px, ${playerPosX}px)`;
                world.style.transform =`translate(-${playerPosY}px, -${playerPosX}px)`;
                cooldownWalk = true;
                zumbieDistanceX = zumbiePosX - playerPosX
                zumbieDistanceY = zumbiePosY - playerPosY
                player.speedCount = player.speedCount + 1;
                infoSpeedProgressBar.style.width = `${(player.speedCount / player.speedToLVLUP) * 100}%`;
                setTimeout(cdWalk, player.speed);
            }    
        }   
    } else if (event.key === btnW) {
        if(playerPosX > 0) {
            if(!cooldownWalk){
                animaUp();
                playerPosX = playerPosX - 100;
                playerUi.style.transform = `translate(${playerPosY}px, ${playerPosX}px)`;
                world.style.transform =`translate(-${playerPosY}px, -${playerPosX}px)`;
                cooldownWalk = true;
                zumbieDistanceX = zumbiePosX - playerPosX
                zumbieDistanceY = zumbiePosY - playerPosY
                player.speedCount = player.speedCount + 1;
                infoSpeedProgressBar.style.width = `${(player.speedCount / player.speedToLVLUP) * 100}%`;
                setTimeout(cdWalk, player.speed);
            }
        }
    } else if (event.key === btnD) {
        if(playerPosY < 10000) {
            if(!cooldownWalk){
                animaRight();
                playerPosY = playerPosY + 100;
                playerUi.style.transform = `translate(${playerPosY}px, ${playerPosX}px)`;
                world.style.transform =`translate(-${playerPosY}px, -${playerPosX}px)`;     
                cooldownWalk = true;
                zumbieDistanceX = zumbiePosX - playerPosX
                zumbieDistanceY = zumbiePosY - playerPosY
                player.speedCount = player.speedCount + 1;
                infoSpeedProgressBar.style.width = `${(player.speedCount / player.speedToLVLUP) * 100}%`;
                setTimeout(cdWalk, player.speed);  
            }    
        } 
    } else if (event.key === btnS) {
        if(playerPosX < 10000) {
            if(!cooldownWalk){
            animaDown();
            playerPosX = playerPosX + 100;
            playerUi.style.transform = `translate(${playerPosY}px, ${playerPosX}px)`;
            world.style.transform =`translate(-${playerPosY}px,  -${playerPosX}px)`;
            cooldownWalk = true;
            zumbieDistanceX = zumbiePosX - playerPosX
            zumbieDistanceY = zumbiePosY - playerPosY
            player.speedCount = player.speedCount + 1;
            infoSpeedProgressBar.style.width = `${(player.speedCount / player.speedToLVLUP) * 100}%`;
            setTimeout(cdWalk, player.speed);      
        }
        }
} 

});


function cdWalk () {
    cooldownWalk = false;
}

const playerName = document.createElement('div');
playerName.setAttribute("id", "player-name");
playerUi.appendChild(playerName);
playerName.innerHTML = `${player.name}`;

const playerDivHeM = document.createElement('div');
playerDivHeM.setAttribute('id', 'player-div-hem');
playerUi.appendChild(playerDivHeM);

const playerHealth = document.createElement('div');
playerHealth.setAttribute("id", "player-health");
playerDivHeM.appendChild(playerHealth);

const playerMana = document.createElement('div');
playerMana.setAttribute("id", "player-mana");
playerDivHeM.appendChild(playerMana);

const playerImage = document.createElement('div');
playerImage.setAttribute("id", "player-image");
playerUi.appendChild(playerImage);


  //DOWN
  function animaDown() {
    playerImage.style.background = "url(../imgs/player/down1.png)"
    playerImage.style.backgroundRepeat = "no-repeat";
    playerImage.style.backgroundSize = "50px";
    playerImage.style.backgroundPosition = "50%";
    setTimeout(playerAnimaDownMid, 300);
 };
 function playerAnimaDownMid () {
    playerImage.style.background = "url(../imgs/player/down2.png)"
    playerImage.style.backgroundRepeat = "no-repeat";
    playerImage.style.backgroundSize = "50px";
    playerImage.style.backgroundPosition = "50%";
    setTimeout(playerAnimaDownEnd, 300);
 
 }
 function playerAnimaDownEnd () {
    playerImage.style.background = "url(../imgs/player/down3.png)"
    playerImage.style.backgroundRepeat = "no-repeat";
    playerImage.style.backgroundSize = "50px";
    playerImage.style.backgroundPosition = "50%";
    playerIsWalking = false; 
 };

 //UP
 function animaUp() {
     playerImage.style.background = "url(../imgs/player/up1.png)"
    playerImage.style.backgroundRepeat = "no-repeat";
    playerImage.style.backgroundSize = "50px";
    playerImage.style.backgroundPosition = "50%";
    setTimeout(playerAnimaUpMid, 300);
 };
 function playerAnimaUpMid () {
    playerImage.style.background = "url(../imgs/player/up2.png)"
    playerImage.style.backgroundRepeat = "no-repeat";
    playerImage.style.backgroundSize = "50px";
    playerImage.style.backgroundPosition = "50%";
    setTimeout(playerAnimaUpEnd, 300);
 }
 function playerAnimaUpEnd () {
    playerImage.style.background = "url(../imgs/player/up3.png)"
    playerImage.style.backgroundRepeat = "no-repeat";
    playerImage.style.backgroundSize = "50px";  
    playerImage.style.backgroundPosition = "50%";
    playerIsWalking = false;  
 };

 //LEFT
 function animaLeft() {
    
     playerImage.style.background = "url(../imgs/player/left1.png)"
     playerImage.style.backgroundRepeat = "no-repeat";
     playerImage.style.backgroundSize = "50px";
     playerImage.style.backgroundPosition = "50%";
     setTimeout(playerAnimaLeftMid, 300);
  };
  function playerAnimaLeftMid () {
     playerImage.style.background = "url(../imgs/player/left2.png)"
     playerImage.style.backgroundRepeat = "no-repeat";
     playerImage.style.backgroundSize = "50px";
     playerImage.style.backgroundPosition = "50%";
     setTimeout(playerAnimaLeftEnd, 300);
  }
  function playerAnimaLeftEnd () {
     playerImage.style.background = "url(../imgs/player/left3.png)"
     playerImage.style.backgroundRepeat = "no-repeat";
     playerImage.style.backgroundSize = "50px";  
     playerImage.style.backgroundPosition = "50%"; 
     playerIsWalking = false; 
  };

 //RIGHT

 function animaRight() {
     playerImage.style.background = "url(../imgs/player/right2.png)"
     playerImage.style.backgroundRepeat = "no-repeat";
     playerImage.style.backgroundSize = "50px";
     playerImage.style.backgroundPosition = "50%";
     setTimeout(playerAnimaRightMid, 300);
  };
  function playerAnimaRightMid () {
     playerImage.style.background = "url(../imgs/player/right1.png)"
     playerImage.style.backgroundRepeat = "no-repeat";
     playerImage.style.backgroundSize = "50px";
     playerImage.style.backgroundPosition = "50%";
     setTimeout(playerAnimaRightEnd, 300);
  }
  function playerAnimaRightEnd () {
     playerImage.style.background = "url(../imgs/player/right3.png)"
     playerImage.style.backgroundRepeat = "no-repeat";
     playerImage.style.backgroundSize = "50px";  
     playerImage.style.backgroundPosition = "50%";  
     playerIsWalking = false; 
  };



  function levelUp() {
    player.maxLife += 10; 
    player.maxMana += 15;
    player.life = player.maxLife;
    player.mana = player.maxMana; 
    player.experience = 0;
    player.toLVLUP += 500;
    infoExperienceProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`;
    infoLevelProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`;
    ++player.level;
    infoLevelCount.innerHTML = `${player.level}`;
    infoExperienceCount.innerHTML = `${player.experience}`;


    lvlUpAnim()

}
  

function attackLevelUp() {
    ++player.attackLevel;
    infoAttackCount.innerHTML = `${player.attackLevel}`;
    player.attackCount = 0;
    player.attackToLVLUP =  player.attackToLVLUP * player.attackLevel;
    infoAttackProgressBar.style.width = `${(player.attackCount / player.attackToLVLUP) * 100}%`
}

function lvlUpAnim() {
    const lvlUpAnimation = document.createElement('div');
    lvlUpAnimation.setAttribute('id', 'lvl-up-animation');
    lvlUpAnimation.innerHTML = "LEVEL UP!"
    playerUi.appendChild(lvlUpAnimation);
    setTimeout(closeLvlUpAnim, 3000);

    function closeLvlUpAnim() {
        lvlUpAnimation.remove();
    }
}


// if(player.speedCount >= player.attackToLVLUP) {
//     speedLvlUp();
// }

// function speedLvlUp() {
    
// }