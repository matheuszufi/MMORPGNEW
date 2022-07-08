let player = {
    name: "Matheus",
    speed: 800,
    attack: 10
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
        if (playerPosX > 0) {
            if(!cooldownWalk){
                animaLeft();
                playerPosX = playerPosX - 100;
                playerUi.style.transform = `translate(${playerPosX}px, ${playerPosY}px)`;
                world.style.transform =`translate(-${playerPosX}px, -${playerPosY}px)`;
                cooldownWalk = true;
                setTimeout(cdWalk, player.speed);
            }    
        }   
    } else if (event.key === btnW) {
        if(playerPosY > 0) {
            if(!cooldownWalk){
                animaUp();
                playerPosY = playerPosY - 100;
                playerUi.style.transform = `translate(${playerPosX}px, ${playerPosY}px)`;
                world.style.transform =`translate(-${playerPosX}px, -${playerPosY}px)`;
                cooldownWalk = true;
                setTimeout(cdWalk, player.speed);  
            }
        }
    } else if (event.key === btnD) {
        if(playerPosX < 10000) {
            if(!cooldownWalk){
                animaRight();
                playerPosX = playerPosX + 100;
                playerUi.style.transform = `translate(${playerPosX}px, ${playerPosY}px)`;
                world.style.transform =`translate(-${playerPosX}px, -${playerPosY}px)`;     
                cooldownWalk = true;
                setTimeout(cdWalk, player.speed);  
            }    
        } 
    } else if (event.key === btnS) {
        if(playerPosY < 10000) {
            if(!cooldownWalk){
            animaDown();
            playerPosY = playerPosY + 100;
            playerUi.style.transform = `translate(${playerPosX}px, ${playerPosY}px)`;
            world.style.transform =`translate(-${playerPosX}px,  -${playerPosY}px)`;
            cooldownWalk = true;
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
