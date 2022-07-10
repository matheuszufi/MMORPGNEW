let zumbie = {
    name: "Zumbie",
    speed: 1000,
    maxLife: 240,
    life: 240,
    coins: 20,
    experience: 250,
    attack: 5,
    loot: {
        leatherBoots: {
            cost: 20,
            img: "../imgs/Leather+Boots.gif"
        }
    }
}

// let zumbieIsTag = false;

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

const zumbieMaxHealth = document.createElement('div');
zumbieMaxHealth.setAttribute('id', 'zumbie-max-health');
zumbieDivHeM.appendChild(zumbieMaxHealth);

const zumbieHealth = document.createElement('div');
zumbieHealth.setAttribute("id", "zumbie-health");
zumbieMaxHealth.appendChild(zumbieHealth);



const zumbieImage = document.createElement('div');
zumbieImage.setAttribute("id", "zumbie-image");
zumbieUi.appendChild(zumbieImage);


let zumbiePosX = 300;
let zumbiePosY = 300;

zumbieUi.style.transform = `translate(${zumbiePosY}px, ${zumbiePosX}px)`


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


    var zumbieIntervalWalk = setInterval(zumbieWalk, 2800);
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
    
    let zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;

    zumbieUi.addEventListener('mousemove', zumbieAttackEnemy);
    zumbieUi.addEventListener('click', zumbieAttackBowEnemy)
    zumbieUi.addEventListener('context', zumbieAttackMagicEnemy)
    
    function zumbieAttackEnemy() {
        
        // zumbieIsTag = true;
        if (zumbieDistanceX <= 100 && zumbieDistanceX >= -100 && zumbieDistanceY <= 100 && zumbieDistanceY >= -100) {
            player.attackCount = player.attackCount + 0.08;
            infoAttackProgressBar.style.width = `${(player.attackCount/player.attackToLVLUP)*100}%`
      
            zumbieAttackAnim();
            
            zumbie.life -= (player.attack / 10);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;


            if (player.attackCount >= player.attackToLVLUP) {
                attackLevelUp();
            }
            if(zumbie.life <= 0) {
                zumbieIsDead = true;
                // zumbieIsTag = false
                zumbieKill();    
            }
        } else {
            zumbieStayCloserToEnemyAlert();
        }
    }

    function zumbieAttackAnim () {
        const zumbieAttackAnimation = document.createElement('div');
        zumbieAttackAnimation.setAttribute('id', 'zumbie-atk-animation');
        zumbieAttackAnimation.innerHTML = `-${player.attack / 10}`

        zumbieUi.appendChild(zumbieAttackAnimation);
        setTimeout(zumbieCloseAttackAnimation, 1000);
    
        function zumbieCloseAttackAnimation() {
            zumbieAttackAnimation.remove();
        }      
    }

    function zumbieAttackBowEnemy() {

        zumbiezumbieAttackDistanceAnim();
        if(zumbie.life <= 0) {
            zumbieIsDead = true;
 
            zumbieKill();    
          
        }
    }
    
    function zumbiezumbieAttackDistanceAnim() {
         // SPEAR SELECT SPEAR SELECT SPEAR SELECT SPEAR SELECT 
         // SPEAR SELECT SPEAR SELECT SPEAR SELECT SPEAR SELECT 
        if (spearSelect && !fireSelect && !iceSelect && !energySelect && !terraSelect && !deathSelect ) {
            zumbie.life -= (player.attackDistance);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.distanceCount;
            infoDistanceProgressBar.style.width = `${(player.distanceCount/player.distanceToLVLUP)*100}%`
            if(player.distanceCount >= player.distanceToLVLUP ) {
                distanceLevelUp();
            }
    

            const zumbieAttackBowAnimation = document.createElement('div');
            zumbieAttackBowAnimation.setAttribute('id', 'zumbie-atk-bow-animation');
            zumbieAttackBowAnimation.innerHTML = `-${player.attackDistance}`
            zumbieUi.appendChild(zumbieAttackBowAnimation);
            setTimeout(zumbieClosezumbieAttackBowAnimation, 500);
    
            function zumbieClosezumbieAttackBowAnimation() {
                zumbieAttackBowAnimation.remove();
            }  
    
            const zumbieSpearAnimation = document.createElement('div');
            zumbieSpearAnimation.setAttribute('id', 'spear-animation');
            playerUi.appendChild(zumbieSpearAnimation);
            zumbieSpearAnimation.style.transition = "0.5s linear"
            setTimeout(zumbieSpearTargetAnime, 1);
            
            setTimeout(zumbieSpearCloseAnimation, 501)
    
            function zumbieSpearTargetAnime () {
                if (zumbieDistanceX < zumbieDistanceY ) {
                    zumbieSpearAnimation.style.width = "80px"
                    zumbieSpearAnimation.style.height = "5px"
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
                } else {
                    zumbieSpearAnimation.style.width = "5px"
                    zumbieSpearAnimation.style.height = "80px"
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
                }
            }
            function zumbieSpearCloseAnimation() {
                zumbieSpearAnimation.remove();
            }
        } 

        // FIRE SELECT FIRE SELECT FIRE SELECT FIRE SELECT 
        // FIRE SELECT FIRE SELECT FIRE SELECT FIRE SELECT 
        if (!fireCooldown && !spearSelect && fireSelect && !iceSelect && !energySelect && !terraSelect && !deathSelect && player.mana > 30) {
            
            //FIRE CD
            fireCooldown = true;
            setTimeout(fireCoolDown, 1000);
            function fireCoolDown() {
                fireCooldown = false;
            }
            player.mana = player.mana - 30
            menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
            menuUpManaValue.innerHTML = `${player.mana}`
            zumbie.life -= (player.fire);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.fireCount;
            infoFireProgressBar.style.width = `${(player.fireCount/player.fireToLVLUP)*100}%`
            if(player.fireCount >= player.fireToLVLUP ) {
                fireLevelUp();
            }

            const zumbieAttackFireAnimation = document.createElement('div');
            zumbieAttackFireAnimation.setAttribute('id', 'zumbie-atk-fire-animation');
            zumbieAttackFireAnimation.innerHTML = `-${player.fire}`
            zumbieUi.appendChild(zumbieAttackFireAnimation);
            setTimeout(zumbieClosezumbieAttackFireAnimation, 500);
    
            function zumbieClosezumbieAttackFireAnimation() {
                zumbieAttackFireAnimation.remove();
            }  
            const zumbieFireAnimation = document.createElement('div');
            zumbieFireAnimation.setAttribute('id', 'fire-animation');
            playerUi.appendChild(zumbieFireAnimation);
            zumbieFireAnimation.style.transition = "0.5s linear"
            setTimeout(zumbieFireTargetAnime, 1);
            
            setTimeout(zumbieFireCloseAnimation, 501)
    
            function zumbieFireTargetAnime () {          
                zumbieFireAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieFireCloseAnimation() {
                zumbieFireAnimation.remove();
            }
        }   
   
        // ICE SELECT ICE SELECT ICE SELECT ICE SELECT 
        // ICE SELECT ICE SELECT ICE SELECT ICE SELECT 
        if (!iceCooldown && !spearSelect && !fireSelect && iceSelect && !energySelect && !terraSelect && !deathSelect && player.mana > 30) {

            //ICE CD
            iceCooldown = true;
            setTimeout(iceCoolDown, 1000);
            function iceCoolDown() {
                iceCooldown = false;
            }

            player.mana = player.mana - 30
            menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
            menuUpManaValue.innerHTML = `${player.mana}`
            zumbie.life -= (player.ice);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.iceCount;
            infoIceProgressBar.style.width = `${(player.iceCount/player.iceToLVLUP)*100}%`
            if(player.iceCount >= player.iceToLVLUP ) {
                iceLevelUp();
            }

            const zumbieAttackIceAnimation = document.createElement('div');
            zumbieAttackIceAnimation.setAttribute('id', 'zumbie-atk-ice-animation');
            zumbieAttackIceAnimation.innerHTML = `-${player.ice}`
            zumbieUi.appendChild(zumbieAttackIceAnimation);
            setTimeout(zumbieClosezumbieAttackIceAnimation, 500);
    
            function zumbieClosezumbieAttackIceAnimation() {
                zumbieAttackIceAnimation.remove();
            }  
            const zumbieIceAnimation = document.createElement('div');
            zumbieIceAnimation.setAttribute('id', 'ice-animation');
            playerUi.appendChild(zumbieIceAnimation);
            zumbieIceAnimation.style.transition = "0.5s linear"
            setTimeout(zumbieIceTargetAnime, 1);
            
            setTimeout(zumbieIceCloseAnimation, 501)
    
            function zumbieIceTargetAnime () {          
                zumbieIceAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieIceCloseAnimation() {
                zumbieIceAnimation.remove();
            }
        }   
        // ENERGY SELECT ENERGY SELECT ENERGY SELECT ENERGY SELECT 
        // ENERGY SELECT ENERGY SELECT ENERGY SELECT ENERGY SELECT 
        if (!energyCooldown && !spearSelect && !fireSelect && !iceSelect && energySelect && !terraSelect && !deathSelect && player.mana > 30) {

            //ENERGY CD
            energyCooldown = true;
            setTimeout(energyCoolDown, 1000);
            function energyCoolDown() {
                energyCooldown = false;
            }

            player.mana = player.mana - 30
            menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
            menuUpManaValue.innerHTML = `${player.mana}`
            zumbie.life -= (player.energy);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.energyCount;
            infoEnergyProgressBar.style.width = `${(player.energyCount/player.energyToLVLUP)*100}%`
            if(player.energyCount >= player.energyToLVLUP ) {
                energyLevelUp();
            }

            const zumbieAttackEnergyAnimation = document.createElement('div');
            zumbieAttackEnergyAnimation.setAttribute('id', 'zumbie-atk-energy-animation');
            zumbieAttackEnergyAnimation.innerHTML = `-${player.energy}`
            zumbieUi.appendChild(zumbieAttackEnergyAnimation);
            setTimeout(zumbieClosezumbieAttackEnergyAnimation, 500);
    
            function zumbieClosezumbieAttackEnergyAnimation() {
                zumbieAttackEnergyAnimation.remove();
            }  
            const zumbieEnergyAnimation = document.createElement('div');
            zumbieEnergyAnimation.setAttribute('id', 'energy-animation');
            playerUi.appendChild(zumbieEnergyAnimation);
            zumbieEnergyAnimation.style.transition = "0.5s linear"
            setTimeout(zumbieEnergyTargetAnime, 1);
            
            setTimeout(zumbieEnergyCloseAnimation, 501)
    
            function zumbieEnergyTargetAnime () {          
                zumbieEnergyAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieEnergyCloseAnimation() {
                zumbieEnergyAnimation.remove();
            }
        } 

        // TERRA SELECT TERRA SELECT TERRA SELECT TERRA SELECT 
        // TERRA SELECT TERRA SELECT TERRA SELECT TERRA SELECT 
        if (!terraCooldown && !spearSelect && !fireSelect && !iceSelect && !energySelect && terraSelect && !deathSelect && player.mana > 30) {

            //TERRA CD
            terraCooldown = true;
            setTimeout(terraCoolDown, 1000);
            function terraCoolDown() {
                terraCooldown = false;
            }

            player.mana = player.mana - 30
            menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
            menuUpManaValue.innerHTML = `${player.mana}`

            zumbie.life -= (player.terra);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.terraCount;
            infoTerraProgressBar.style.width = `${(player.terraCount/player.terraToLVLUP)*100}%`
            if(player.terraCount >= player.terraToLVLUP ) {
                terraLevelUp();
            }

            const zumbieAttackTerraAnimation = document.createElement('div');
            zumbieAttackTerraAnimation.setAttribute('id', 'zumbie-atk-terra-animation');
            zumbieAttackTerraAnimation.innerHTML = `-${player.terra}`
            zumbieUi.appendChild(zumbieAttackTerraAnimation);
            setTimeout(zumbieClosezumbieAttackTerraAnimation, 500);
    
            function zumbieClosezumbieAttackTerraAnimation() {
                zumbieAttackTerraAnimation.remove();
            }  
            const zumbieTerraAnimation = document.createElement('div');
            zumbieTerraAnimation.setAttribute('id', 'terra-animation');
            playerUi.appendChild(zumbieTerraAnimation);
            zumbieTerraAnimation.style.transition = "0.5s linear"
            setTimeout(zumbieTerraTargetAnime, 1);
            
            setTimeout(zumbieTerraCloseAnimation, 501)
    
            function zumbieTerraTargetAnime () {          
                zumbieTerraAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieTerraCloseAnimation() {
                zumbieTerraAnimation.remove();
            }
        }   
        // DEATH SELECT DEATH SELECT DEATH SELECT DEATH SELECT 
        // DEATH SELECT DEATH SELECT DEATH SELECT DEATH SELECT 
        if (!deathCooldown && !spearSelect && !fireSelect && !iceSelect && !energySelect && !terraSelect && deathSelect && player.mana > 30) {

            //DEATH CD
            deathCooldown = true;
            setTimeout(deathCoolDown, 1000);
            function deathCoolDown() {
                deathCooldown = false;
            }

            player.mana = player.mana - 30
            menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
            menuUpManaValue.innerHTML = `${player.mana}`

            zumbie.life -= (player.death);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.deathCount;
            infoDeathProgressBar.style.width = `${(player.deathCount/player.deathToLVLUP)*100}%`
            if(player.deathCount >= player.deathToLVLUP ) {
                deathLevelUp();
            }

            const zumbieAttackDeathAnimation = document.createElement('div');
            zumbieAttackDeathAnimation.setAttribute('id', 'zumbie-atk-death-animation');
            zumbieAttackDeathAnimation.innerHTML = `-${player.death}`
            zumbieUi.appendChild(zumbieAttackDeathAnimation);
            setTimeout(zumbieClosezumbieAttackDeathAnimation, 500);
    
            function zumbieClosezumbieAttackDeathAnimation() {
                zumbieAttackDeathAnimation.remove();
            }  
            const zumbieDeathAnimation = document.createElement('div');
            zumbieDeathAnimation.setAttribute('id', 'death-animation');
            playerUi.appendChild(zumbieDeathAnimation);
            zumbieDeathAnimation.style.transition = "0.5s linear"
            setTimeout(zumbieDeathTargetAnime, 1);
            
            setTimeout(zumbieDeathCloseAnimation, 501)
    
            function zumbieDeathTargetAnime () {          
                zumbieDeathAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieDeathCloseAnimation() {
                zumbieDeathAnimation.remove();
            }
        } 
    }
    

    function zumbieAttackMagicEnemy() {
        if(player.mana > 30) {
            player.mana = player.mana - 30;

            if(FireSelect) {
                zumbie.life = zumbie.life - player.fire;
            }
             
        }
    }

    var zumbieIsDead = false;

    function zumbieKill() {
        
        zumbieUi.style.display = "none";
        player.experience += zumbie.experience;
        infoExperienceProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`
        infoLevelProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`
        infoExperienceCount.innerHTML = `${player.experience}`
        zumbieExpAnimation();
        if(player.experience >= player.toLVLUP) {
            levelUp();
        }
        setTimeout(zumbieHidden, 4000);

        const zumbieDeadUi = document.createElement('div');
        zumbieDeadUi.setAttribute('id', 'zumbie-dead-ui');
        world.appendChild(zumbieDeadUi);
        
        zumbieDeadUi.style.transform = `translate(${zumbiePosY}px, ${zumbiePosX}px)`;
        zumbieDeadUi.addEventListener('click', zumbieLoot);
        
        function zumbieLoot() {
            zumbieDeadUi.style.display = "none";
            player.coins += zumbie.coins;
            menuDownCoinsContent.innerHTML = `${player.coins}`
            zumbieLootCoinAnime();
            zumbieShowLoot();
            // return zumbieDeadUi;
        }

 
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
        zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
        zumbieHealth.style.width = `${zumbieLifePercentual}%`;

    }

    function zumbieExpAnimation() {
        const zumbieExpAnimation = document.createElement('div');
        zumbieExpAnimation.setAttribute('id', 'zumbie-exp-animation');
        zumbieExpAnimation.innerHTML = `+${zumbie.experience}`

        playerUi.appendChild(zumbieExpAnimation);
        setTimeout(zumbieCloseExpAnimation, 1000);
    
        function zumbieCloseExpAnimation() {
            zumbieExpAnimation.remove();
        }
    };

    function zumbieLootCoinAnime() {
        const zumbieLootCoinAnimation = document.createElement('div');
        zumbieLootCoinAnimation.setAttribute('id', 'zumbie-lootcoin-animation');
        zumbieLootCoinAnimation.innerHTML = `+${zumbie.coins}`;

        playerUi.appendChild(zumbieLootCoinAnimation);
        setTimeout(zumbieCloseLootCoinAnimation, 1000);
    
        function zumbieCloseLootCoinAnimation() {
            zumbieLootCoinAnimation.remove();
        }
    };
    
    setInterval(zumbieDamage, 2000);
    
    function zumbieDamage() {
            if (!zumbieIsDead && zumbieDistanceX <= 100 && zumbieDistanceX >= -100 && zumbieDistanceY <= 100 && zumbieDistanceY >= -100){
                player.life -= zumbie.attack;
                playerHealth.style.width = `${(player.life / player.maxLife) * 100}%`
                menuUpLifeBar.style.width = `${(player.life / player.maxLife) * 100}%`
                menuUpLifeValue.innerHTML = `${player.life}`;
                zumbieAnimaDamage();
         
            }       
    };

    function zumbieAnimaDamage(){
        const zumbieDamageAnimation = document.createElement('div');
        zumbieDamageAnimation.setAttribute('id', 'zumbie-damage-animation');
        zumbieDamageAnimation.innerHTML = `-${zumbie.attack}`;

        playerUi.appendChild(zumbieDamageAnimation);
        setTimeout(zumbieCloseDamageAnimation, 1000);
    
        function zumbieCloseDamageAnimation() {
            zumbieDamageAnimation.remove();
        }
    };
        
    function zumbieStayCloserToEnemyAlert() {
        const zumbieDistanceAlert = document.createElement('div');
        zumbieDistanceAlert.setAttribute('id', 'zumbie-distance-alert');
        zumbieDistanceAlert.innerHTML = `STAY CLOSER TO THE ENEMY`;

        playerUi.appendChild(zumbieDistanceAlert);
        setTimeout(zumbieCloseDistanceAlert, 3000);
    
        function zumbieCloseDistanceAlert() {
            zumbieDistanceAlert.remove();
        }
    };
