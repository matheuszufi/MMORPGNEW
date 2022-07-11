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
    

    speed: 800,
    speedLevel: 1,
    speedCount: 0,
    speedToLVLUP: 100,

    attack: 10,
    attackLevel: 1,
    attackCount: 0,
    attackToLVLUP: 100,

    fire: 20,
    fireLevel: 1,
    fireCount: 0,
    fireToLVLUP: 100,

    ice: 20,
    iceLevel: 1,
    iceCount: 0,
    iceToLVLUP: 100,

    energy: 20,
    energyLevel: 1,
    energyCount: 0,
    energyToLVLUP: 100,

    terra: 20,
    terraLevel: 1,
    terraCount: 0,
    terraToLVLUP: 100,

    death: 20,
    deathLevel: 1,
    deathCount: 0,
    deathToLVLUP: 100,

    holy: 5,
    holyLevel: 1,
    holyCount: 0,
    holyToLVLUP: 100,

    attackDistance: 40,
    distanceLevel: 1,
    distanceCount: 0,
    distanceToLVLUP: 100
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
let isHealingCooldown = false;

let spearSelect = true;
let fireSelect = false;
let iceSelect = false;
let energySelect = false;
let terraSelect = false;
let deathSelect = false;
let holySelect = false;

let fireCooldown = false;
let iceCooldown = false;
let energyCooldown = false;
let terraCooldown = false;
let deathCooldown = false;
let holyCooldown = false;

const bowSlot = document.getElementById("bow-slot");
bowSlot.style.filter = "grayscale(0%)"

const wandSlot = document.getElementById("wand-slot");
wandSlot.style.filter =  "grayscale(100%)";

const weaponSlot = document.getElementById("sword-slot");
weaponSlot.style.filter =  "grayscale(0%)";

document.addEventListener('keydown', (event) => {

    btnA = "a";
    btnW = "w";
    btnD = "d";
    btnS = "s";

    btn1 = "1"; // HEALING
    btn2 = "2"; // SELECT BOW
    btn3 = "3"; // SELECT FIRE
    btn4 = "4"; // SELECT ICE
    btn5 = "5"; // SELECT ENERGY
    btn6 = "6"; // SELECT TERRA
    btn7 = "7"; // SELECT DEATH


 
    if(event.key === btnA || event.keyCode === 37) {
        if (playerPosY > 0) {
            if(!cooldownWalk){
                animaLeft();
                playerPosY = playerPosY - 100;
                playerUi.style.transform = `translate(${playerPosY}px, ${playerPosX}px)`;
                world.style.transform =`translate(-${playerPosY}px, -${playerPosX}px)`;
                cooldownWalk = true;
                zumbieDistanceX = zumbiePosX - playerPosX
                zumbieDistanceY = zumbiePosY - playerPosY
                player.speedCount = player.speedCount + 10;
                infoSpeedProgressBar.style.width = `${(player.speedCount / player.speedToLVLUP) * 100}%`;
                if(player.speedCount >= player.speedToLVLUP) {
                    speedLevelUp();
                }
                setTimeout(cdWalk, player.speed);
            }    
        }   
    } else if (event.key === btnW || event.keyCode === 38) {
        if(playerPosX > 0) {
            if(!cooldownWalk){
                animaUp();
                playerPosX = playerPosX - 100;
                playerUi.style.transform = `translate(${playerPosY}px, ${playerPosX}px)`;
                world.style.transform =`translate(-${playerPosY}px, -${playerPosX}px)`;
                cooldownWalk = true;
                zumbieDistanceX = zumbiePosX - playerPosX
                zumbieDistanceY = zumbiePosY - playerPosY
                player.speedCount = player.speedCount + 10;
                infoSpeedProgressBar.style.width = `${(player.speedCount / player.speedToLVLUP) * 100}%`;
                if(player.speedCount >= player.speedToLVLUP) {
                    speedLevelUp();
                }
                setTimeout(cdWalk, player.speed);
            }
        }
    } else if (event.key === btnD || event.keyCode === 39) {
        if(playerPosY < 10000) {
            if(!cooldownWalk){
                animaRight();
                playerPosY = playerPosY + 100;
                playerUi.style.transform = `translate(${playerPosY}px, ${playerPosX}px)`;
                world.style.transform =`translate(-${playerPosY}px, -${playerPosX}px)`;     
                cooldownWalk = true;
                zumbieDistanceX = zumbiePosX - playerPosX
                zumbieDistanceY = zumbiePosY - playerPosY
                player.speedCount = player.speedCount + 10;
                infoSpeedProgressBar.style.width = `${(player.speedCount / player.speedToLVLUP) * 100}%`;
                if(player.speedCount >= player.speedToLVLUP) {
                    speedLevelUp();
                }
                setTimeout(cdWalk, player.speed);  
            }    
        } 
    } else if (event.key === btnS || event.keyCode === 40) {
        if(playerPosX < 10000) {
            if(!cooldownWalk){
            animaDown();
            playerPosX = playerPosX + 100;
            playerUi.style.transform = `translate(${playerPosY}px, ${playerPosX}px)`;
            world.style.transform =`translate(-${playerPosY}px,  -${playerPosX}px)`;
            cooldownWalk = true;
            zumbieDistanceX = zumbiePosX - playerPosX
            zumbieDistanceY = zumbiePosY - playerPosY
            player.speedCount = player.speedCount + 10;
            infoSpeedProgressBar.style.width = `${(player.speedCount / player.speedToLVLUP) * 100}%`;
                if(player.speedCount >= player.speedToLVLUP) {
                    speedLevelUp();
                }
            setTimeout(cdWalk, player.speed);      
            }
        }
    } else if(event.key === btn1) {
        if(!isHealingCooldown && player.life < player.maxLife){      
        player.life += player.holy;
        playerHealth.style.width = `${(player.life / player.maxLife) * 100}%`
        menuUpLifeBar.style.width = `${(player.life / player.maxLife) * 100}%`
        menuUpLifeValue.innerHTML = `${player.life}`
        player.mana -= 20;
        playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`
        menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
        menuUpManaValue.innerHTML = `${player.mana}`
  
        healingAnim();    
        }
    } else if(event.key === btn2) {
        spearSelect = true;
        fireSelect = false;
        iceSelect = false;
        energySelect = false;
        terraSelect = false;
        deathSelect = false;
        
        bowSlot.style.filter = "grayscale(0%)";
        wandSlot.style.filter =  "grayscale(100%)";
        weaponSlot.style.background = "rgba(0,0,0,0.05)"
    
     
    } else if(event.key === btn3) {
        spearSelect = false;
        fireSelect = true;
        iceSelect = false;
        energySelect = false;
        terraSelect = false;
        deathSelect = false;

        bowSlot.style.filter = "grayscale(100%)";
        wandSlot.style.filter =  "grayscale(0%)";
        wandSlot.style.background = "rgba(255,0,0,0.3)"
        weaponSlot.style.background = "rgba(255,0,0,0.3)"
     
    } else if(event.key === btn4) {
        spearSelect = false;
        fireSelect = false;
        iceSelect = true;
        energySelect = false;
        terraSelect = false;
        deathSelect = false;

        bowSlot.style.filter = "grayscale(100%)";
        wandSlot.style.filter =  "grayscale(0%)";
        wandSlot.style.background = "rgba(180,180,255,0.3)"
        weaponSlot.style.background = "rgba(180,180,255,0.3)"
     
    } else if(event.key === btn5) {
        spearSelect = false;
        fireSelect = false;
        iceSelect = false;
        energySelect = true;
        terraSelect = false;
        deathSelect = false;

        bowSlot.style.filter = "grayscale(100%)";
        wandSlot.style.filter =  "grayscale(0%)";
        wandSlot.style.background = "rgba(120,120,255,0.3)"
        weaponSlot.style.background = "rgba(120,120,255,0.3)"

    } else if(event.key === btn6) {
        spearSelect = false;
        fireSelect = false;
        iceSelect = false;
        energySelect = false;
        terraSelect = true;
        deathSelect = false;

        bowSlot.style.filter = "grayscale(100%)";
        wandSlot.style.filter =  "grayscale(0%)";
        wandSlot.style.background = "rgba(120,255,120,0.3)"
        weaponSlot.style.background = "rgba(120,255,120,0.3)"

    } else if(event.key === btn7) {
        spearSelect = false;
        fireSelect = false;
        iceSelect = false;
        energySelect = false;
        terraSelect = false;
        deathSelect = true;
     
        bowSlot.style.filter = "grayscale(100%)";
        wandSlot.style.filter =  "grayscale(0%)";
        wandSlot.style.background = "rgba(20,20,20,1)"
        weaponSlot.style.background = "rgba(20,20,20,1)"
    } 
     
    
    
});


function healingAnim () {
  
        isHealingCooldown = true;
        const healingAnimation = document.createElement('img');
        healingAnimation.setAttribute('src', '../imgs/healFx.webp');
        healingAnimation.setAttribute('id', 'healing-fx');
        playerUi.appendChild(healingAnimation);
        setTimeout(healingAnimationClose,1000);
    
        function healingAnimationClose() {
            healingAnimation.remove();
            setTimeout(healingCooldownClose,1000);

            function healingCooldownClose () {
                isHealingCooldown = false;
            }
     
        }


    


}




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

const playerMaxHealth = document.createElement('div');
playerMaxHealth.setAttribute("id", "player-max-health");
playerDivHeM.appendChild(playerMaxHealth);


const playerHealth = document.createElement('div');
playerHealth.setAttribute("id", "player-health");
playerMaxHealth.appendChild(playerHealth);

const playerMaxMana = document.createElement('div');
playerMaxMana.setAttribute("id", "player-max-mana");
playerDivHeM.appendChild(playerMaxMana);

const playerMana = document.createElement('div');
playerMana.setAttribute("id", "player-mana");
playerMaxMana.appendChild(playerMana);

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
    player.maxLife += 5; 
    player.maxMana += 15;
    player.life = player.maxLife;
    player.mana = player.maxMana;

    playerHealth.style.width = `${(player.life / player.maxLife) * 100}%`
    menuUpLifeBar.style.width = `${(player.life / player.maxLife) * 100}%`
    menuUpLifeValue.innerHTML = `${player.life}`;
    
    menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
    playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`
    menuUpManaValue.innerHTML = `${player.mana}`;
     
    player.mana = player.maxMana; 
    player.experience = 0;
    player.toLVLUP += 500;
    infoExperienceProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`;
    infoLevelProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`;
    ++player.level;
    infoLevelCount.innerHTML = `${player.level}`;
    lvlUpAnim()
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

// ATTACK LEVEL UP ATTACK LEVEL UP ATTACK LEVEL UP  //
function attackLevelUp() {
    ++player.attackLevel;
    infoAttackCount.innerHTML = `${player.attackLevel}`;
    player.attackCount = 0;
    player.attackToLVLUP =  player.attackToLVLUP * player.attackLevel;
    infoAttackProgressBar.style.width = `${(player.attackCount / player.attackToLVLUP) * 100}%`
    player.attack = player.attack + 1;
    atkLvlUpAnim();
}

function atkLvlUpAnim() {
    const atkLvlUpAnimation = document.createElement('div');
    atkLvlUpAnimation.setAttribute('id', 'lvl-up-animation');
    atkLvlUpAnimation.innerHTML = "ATTACK LEVEL UP!"
    playerUi.appendChild(atkLvlUpAnimation);
    setTimeout(closeatkLvlUpAnim, 3000);
    function closeatkLvlUpAnim() {
        atkLvlUpAnimation.remove();
    }
}

// FIRE LEVEL UP FIRE LEVEL UP FIRE LEVEL UP  //
function fireLevelUp() {
    ++player.fireLevel;
    player.fire = player.fire + 1;
    infoFireCount.innerHTML = `${player.fireLevel}`;
    player.fireCount = 0;
    player.fireToLVLUP =  player.fireToLVLUP * player.fireLevel;
    infoFireProgressBar.style.width = `${(player.fireCount / player.fireToLVLUP) * 100}%`
    player.fireAttack = player.fireAttack + 1;
    fireLvlUpAnim();
}

function fireLvlUpAnim() {
    const fireLvlUpAnimation = document.createElement('div');
    fireLvlUpAnimation.setAttribute('id', 'lvl-up-animation');
    fireLvlUpAnimation.innerHTML = "FIRE LEVEL UP!"
    playerUi.appendChild(fireLvlUpAnimation);
    setTimeout(closefireLvlUpAnim, 3000);
    function closefireLvlUpAnim() {
        fireLvlUpAnimation.remove();
    }
}

// ICE LEVEL UP ICE LEVEL UP ICE LEVEL UP  //
function iceLevelUp() {
    ++player.iceLevel;
    player.ice = player.ice + 1;
    infoIceCount.innerHTML = `${player.iceLevel}`;
    player.iceCount = 0;
    player.iceToLVLUP =  player.iceToLVLUP * player.iceLevel;
    infoIceProgressBar.style.width = `${(player.iceCount / player.iceToLVLUP) * 100}%`
    player.iceAttack = player.iceAttack + 1;
    iceLvlUpAnim();
}

function iceLvlUpAnim() {
    const iceLvlUpAnimation = document.createElement('div');
    iceLvlUpAnimation.setAttribute('id', 'lvl-up-animation');
    iceLvlUpAnimation.innerHTML = "ICE LEVEL UP!"
    playerUi.appendChild(iceLvlUpAnimation);
    setTimeout(closeiceLvlUpAnim, 3000);
    function closeiceLvlUpAnim() {
        iceLvlUpAnimation.remove();
    }
}

// ENERGY LEVEL UP ENERGY LEVEL UP ENERGY LEVEL UP  //
function energyLevelUp() {
    ++player.energyLevel;
    player.energy = player.energy + 1;
    infoEnergyCount.innerHTML = `${player.energyLevel}`;
    player.energyCount = 0;
    player.energyToLVLUP =  player.energyToLVLUP * player.energyLevel;
    infoEnergyProgressBar.style.width = `${(player.energyCount / player.energyToLVLUP) * 100}%`
    player.energyAttack = player.energyAttack + 1;
    energyLvlUpAnim();
}

function energyLvlUpAnim() {
    const energyLvlUpAnimation = document.createElement('div');
    energyLvlUpAnimation.setAttribute('id', 'lvl-up-animation');
    energyLvlUpAnimation.innerHTML = "ENERGY LEVEL UP!"
    playerUi.appendChild(energyLvlUpAnimation);
    setTimeout(closeenergyLvlUpAnim, 3000);
    function closeenergyLvlUpAnim() {
        energyLvlUpAnimation.remove();
    }
}

// TERRA LEVEL UP TERRA LEVEL UP TERRA LEVEL UP  //
function terraLevelUp() {
    ++player.terraLevel;
    player.terra = player.terra + 1;
    infoTerraCount.innerHTML = `${player.terraLevel}`;
    player.terraCount = 0;
    player.terraToLVLUP =  player.terraToLVLUP * player.terraLevel;
    infoTerraProgressBar.style.width = `${(player.terraCount / player.terraToLVLUP) * 100}%`
    player.terraAttack = player.terraAttack + 1;
    terraLvlUpAnim();
}

function terraLvlUpAnim() {
    const terraLvlUpAnimation = document.createElement('div');
    terraLvlUpAnimation.setAttribute('id', 'lvl-up-animation');
    terraLvlUpAnimation.innerHTML = "TERRA LEVEL UP!"
    playerUi.appendChild(terraLvlUpAnimation);
    setTimeout(closeterraLvlUpAnim, 3000);
    function closeterraLvlUpAnim() {
        terraLvlUpAnimation.remove();
    }
}

// DEATH LEVEL UP DEATH LEVEL UP DEATH LEVEL UP  //
function deathLevelUp() {
    ++player.deathLevel;
    player.death = player.death + 1;
    infoDeathCount.innerHTML = `${player.deathLevel}`;
    player.deathCount = 0;
    player.deathToLVLUP =  player.deathToLVLUP * player.deathLevel;
    infoDeathProgressBar.style.width = `${(player.deathCount / player.deathToLVLUP) * 100}%`
    player.deathAttack = player.deathAttack + 1;
    deathLvlUpAnim();
}

function deathLvlUpAnim() {
    const deathLvlUpAnimation = document.createElement('div');
    deathLvlUpAnimation.setAttribute('id', 'lvl-up-animation');
    deathLvlUpAnimation.innerHTML = "DEATH LEVEL UP!"
    playerUi.appendChild(deathLvlUpAnimation);
    setTimeout(closedeathLvlUpAnim, 3000);
    function closedeathLvlUpAnim() {
        deathLvlUpAnimation.remove();
    }
}



function distanceLevelUp() {
    ++player.distanceLevel;
    player.attackDistance = player.attackDistance + 1;
    infoDistanceCount.innerHTML = `${player.distanceLevel}`;
    player.distanceCount = 0;
    player.distanceToLVLUP =  player.distanceToLVLUP * player.distanceLevel;
    infoDistanceProgressBar.style.width = `${(player.distanceCount / player.distanceToLVLUP) * 100}%`
    player.distanceAttack = player.distanceAttack + 1;
    distanceLvlUpAnim();
}

function distanceLvlUpAnim() {
    const distanceLvlUpAnimation = document.createElement('div');
    distanceLvlUpAnimation.setAttribute('id', 'lvl-up-animation');
    distanceLvlUpAnimation.innerHTML = "DISTANCE LEVEL UP!"
    playerUi.appendChild(distanceLvlUpAnimation);
    setTimeout(closedistanceLvlUpAnim, 3000);
    function closedistanceLvlUpAnim() {
        distanceLvlUpAnimation.remove();
    }
}




function speedLevelUp() {
    ++player.speedLevel;
    infoSpeedCount.innerHTML = `${player.speedLevel}`;
    player.speed -= 10;
    player.speedCount = 0;
    player.speedToLVLUP = 100 * player.speedLevel;
    infoSpeedProgressBar.style.width = `${(player.speedCount / player.speedToLVLUP) * 100}%`;
        speedLevelUpAnim(); 
}


function speedLevelUpAnim() {
    const speedLvlUpAnimation = document.createElement('div');
    speedLvlUpAnimation.setAttribute('id', 'lvl-up-animation');
    speedLvlUpAnimation.innerHTML = "SPEED LEVEL UP!"
 
    playerUi.appendChild(speedLvlUpAnimation);
    setTimeout(closeLvlUpAnim, 3000);

    function closeLvlUpAnim() {
        speedLvlUpAnimation.remove();
    }
}



function restoreMana() {
    
    if (player.mana < player.maxMana) {
        player.mana += 2;

        menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
        menuUpManaValue.innerHTML = `${player.mana}`;
        playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`

        }
    }
    
    setInterval(restoreMana, 2000);

function restoreLife() {

    if (player.life < player.maxLife) {
        player.life += 2;
        
        menuUpLifeBar.style.width = `${(player.life / player.maxLife) * 100}%`
        menuUpLifeValue.innerHTML = `${player.life}`;
        playerHealth.style.width = `${(player.life / player.maxLife) * 100}%`


        }
    }
    
    setInterval(restoreLife, 2000);
