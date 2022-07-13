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
    // zumbieUi.addEventListener('context', zumbieAttackMagicEnemy)
    
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


                //WEAPON ANIMATION ENEMY
                const zumbieAttackWeaponAnimationEnemy = document.createElement('img');
                zumbieAttackWeaponAnimationEnemy.style.animationPlayState = "paused"
                zumbieAttackWeaponAnimationEnemy.setAttribute('id', 'atk-weapon-animation-enemy');
                zumbieAttackWeaponAnimationEnemy.setAttribute('src', '../imgs/Blood_Effect.webp');
                
                setTimeout(() => {
                    zumbieAttackWeaponAnimationEnemy.src = `${zumbieAttackWeaponAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
                }, 100)
    
    
    
                zumbieUi.appendChild(zumbieAttackWeaponAnimationEnemy);
                setTimeout(zumbieClosezumbieAttackWeaponAnimationEnemy, 500);
        
                function zumbieClosezumbieAttackWeaponAnimationEnemy() {
                    zumbieAttackWeaponAnimationEnemy.remove();
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
            zumbieAttackBowAnimation.setAttribute('id', 'atk-bow-animation');
            zumbieAttackBowAnimation.innerHTML = `-${player.attackDistance}`
            zumbieUi.appendChild(zumbieAttackBowAnimation);
            setTimeout(zumbieClosezumbieAttackBowAnimation, 500);
    
            function zumbieClosezumbieAttackBowAnimation() {
                zumbieAttackBowAnimation.remove();
            }  
    
            const zumbieSpearAnimation = document.createElement('img');
            zumbieSpearAnimation.setAttribute('id', 'spear-animation');
            zumbieSpearAnimation.setAttribute('src', '../imgs/Ethereal_Spear_Missile.gif');

            playerUi.appendChild(zumbieSpearAnimation);
            zumbieSpearAnimation.style.transition = "0.5s linear"
            setTimeout(zumbieSpearTargetAnime, 1);
            
            setTimeout(zumbieSpearCloseAnimation, 301)

          
            if (zumbieDistanceX === 0 && zumbieDistanceY > 0) {
                zumbieSpearAnimation.style.transition = '0.3s'
                zumbieSpearAnimation.style.transform = `rotateZ(-45deg)`
            } else if (zumbieDistanceX < 0 && zumbieDistanceY > 0) {
                zumbieSpearAnimation.style.transition = '0.3s'
                zumbieSpearAnimation.style.transform = `rotateZ(-90deg)`
            } else if (zumbieDistanceX < 0 && zumbieDistanceY === 0) {
                zumbieSpearAnimation.style.transition = '0.3s'
                zumbieSpearAnimation.style.transform = `rotateZ(-135deg)`
            }else if (zumbieDistanceX < 0 && zumbieDistanceY < 0) {
                zumbieSpearAnimation.style.transition = '0.3s'
                zumbieSpearAnimation.style.transform = `rotateZ(-180deg)`
            }else if (zumbieDistanceX === 0 && zumbieDistanceY < 0) {
                zumbieSpearAnimation.style.transition = '0.3s'
                zumbieSpearAnimation.style.transform = `rotateZ(135deg)`
            }else if (zumbieDistanceX < 0 && zumbieDistanceY < 0) {
                zumbieSpearAnimation.style.transition = '0.3s'
                zumbieSpearAnimation.style.transform = `rotateZ(90deg)`
            }else if (zumbieDistanceX > 0 && zumbieDistanceY === 0) {
                zumbieSpearAnimation.style.transition = '0.3s'
                zumbieSpearAnimation.style.transform = `rotateZ(45deg)`
            } else if (zumbieDistanceX > 0 && zumbieDistanceY < 0) {
                zumbieSpearAnimation.style.transition = '0.3s'
                zumbieSpearAnimation.style.transform = `rotateZ(90deg)`
            }
    
            function zumbieSpearTargetAnime () {
                if (zumbieDistanceX > 0 && zumbieDistanceY > 0) {
                    zumbieSpearAnimation.style.transition = '0.3s'
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
                } else if (zumbieDistanceX === 0 && zumbieDistanceY > 0) {
                    zumbieSpearAnimation.style.transition = '0.3s'
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px) rotateZ(-45deg)`
                } else if (zumbieDistanceX < 0 && zumbieDistanceY > 0) {
                    zumbieSpearAnimation.style.transition = '0.3s'
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px) rotateZ(-90deg)`
                } else if (zumbieDistanceX < 0 && zumbieDistanceY === 0) {
                    zumbieSpearAnimation.style.transition = '0.3s'
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px) rotateZ(-135deg)`
                }else if (zumbieDistanceX < 0 && zumbieDistanceY < 0) {
                    zumbieSpearAnimation.style.transition = '0.3s'
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px) rotateZ(-180deg)`
                }else if (zumbieDistanceX === 0 && zumbieDistanceY < 0) {
                    zumbieSpearAnimation.style.transition = '0.3s'
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px) rotateZ(135deg)`
                }else if (zumbieDistanceX < 0 && zumbieDistanceY < 0) {
                    zumbieSpearAnimation.style.transition = '0.3s'
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px) rotateZ(90deg)`
                }else if (zumbieDistanceX > 0 && zumbieDistanceY === 0) {
                    zumbieSpearAnimation.style.transition = '0.3s'
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px) rotateZ(45deg)`
                }else if (zumbieDistanceX > 0 && zumbieDistanceY < 0) {
                    zumbieSpearAnimation.style.transition = '0.3s'
                    zumbieSpearAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px) rotateZ(45deg)`
                }

            }
            function zumbieSpearCloseAnimation() {
                zumbieSpearAnimation.remove();
            }

                //SPEAR ANIMATION ENEMY
            const zumbieAttackSpearAnimationEnemy = document.createElement('img');
            zumbieAttackSpearAnimationEnemy.style.animationPlayState = "paused"
            zumbieAttackSpearAnimationEnemy.setAttribute('id', 'atk-spear-animation-enemy');
            zumbieAttackSpearAnimationEnemy.setAttribute('src', '../imgs/Blood_Effect.webp');
            
            setTimeout(() => {
                zumbieAttackSpearAnimationEnemy.src = `${zumbieAttackSpearAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 100)



            zumbieUi.appendChild(zumbieAttackSpearAnimationEnemy);
            setTimeout(zumbieClosezumbieAttackSpearAnimationEnemy, 500);
    
            function zumbieClosezumbieAttackSpearAnimationEnemy() {
                zumbieAttackSpearAnimationEnemy.remove();
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
            playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`

            zumbie.life -= (player.fire);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.fireCount;
            infoFireProgressBar.style.width = `${(player.fireCount/player.fireToLVLUP)*100}%`
            if(player.fireCount >= player.fireToLVLUP ) {
                fireLevelUp();
            }

            const zumbieAttackFireAnimation = document.createElement('div');
            zumbieAttackFireAnimation.setAttribute('id', 'atk-fire-animation');
            zumbieAttackFireAnimation.innerHTML = `-${player.fire}`
            zumbieUi.appendChild(zumbieAttackFireAnimation);
            setTimeout(zumbieClosezumbieAttackFireAnimation, 500);
    
            function zumbieClosezumbieAttackFireAnimation() {
                zumbieAttackFireAnimation.remove();
            }  
            const zumbieFireAnimation = document.createElement('div');
            zumbieFireAnimation.setAttribute('id', 'fire-animation');
            playerUi.appendChild(zumbieFireAnimation);
            zumbieFireAnimation.style.transition = "0.3s linear"
            setTimeout(zumbieFireTargetAnime, 1);
            
            setTimeout(zumbieFireCloseAnimation, 301)
    
            function zumbieFireTargetAnime () {          
                zumbieFireAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieFireCloseAnimation() {
                zumbieFireAnimation.remove();
            }

            //FIRE ANIMATION ENEMY
            const zumbieAttackFireAnimationEnemy = document.createElement('img');
            zumbieAttackFireAnimationEnemy.style.animationPlayState = "paused"
            zumbieAttackFireAnimationEnemy.setAttribute('id', 'atk-fire-animation-enemy');
            zumbieAttackFireAnimationEnemy.setAttribute('src', '../imgs/Fireball_Effect.gif');
            
            setTimeout(() => {
                zumbieAttackFireAnimationEnemy.src = `${zumbieAttackFireAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbieUi.appendChild(zumbieAttackFireAnimationEnemy);
            setTimeout(zumbieClosezumbieAttackFireAnimationEnemy, 500);
    
            function zumbieClosezumbieAttackFireAnimationEnemy() {
                zumbieAttackFireAnimationEnemy.style.animationPlayState = "paused"
                zumbieAttackFireAnimationEnemy.remove();
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
            playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`

            zumbie.life -= (player.ice);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.iceCount;
            infoIceProgressBar.style.width = `${(player.iceCount/player.iceToLVLUP)*100}%`
            if(player.iceCount >= player.iceToLVLUP ) {
                iceLevelUp();
            }

            const zumbieAttackIceAnimation = document.createElement('div');
            zumbieAttackIceAnimation.setAttribute('id', 'atk-ice-animation');
            zumbieAttackIceAnimation.innerHTML = `-${player.ice}`
            zumbieUi.appendChild(zumbieAttackIceAnimation);
            setTimeout(zumbieClosezumbieAttackIceAnimation, 500);
    
            function zumbieClosezumbieAttackIceAnimation() {
                zumbieAttackIceAnimation.remove();
            }  
            const zumbieIceAnimation = document.createElement('div');
            zumbieIceAnimation.setAttribute('id', 'ice-animation');
            playerUi.appendChild(zumbieIceAnimation);
            zumbieIceAnimation.style.transition = "0.3s linear"
            setTimeout(zumbieIceTargetAnime, 1);
            
            setTimeout(zumbieIceCloseAnimation, 301)
    
            function zumbieIceTargetAnime () {          
                zumbieIceAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieIceCloseAnimation() {
                zumbieIceAnimation.remove();
            }

            //ICE ANIMATION ENEMY
            const zumbieAttackIceAnimationEnemy = document.createElement('img');
            zumbieAttackIceAnimationEnemy.style.animationPlayState = "paused"
            zumbieAttackIceAnimationEnemy.setAttribute('id', 'atk-ice-animation-enemy');
            zumbieAttackIceAnimationEnemy.setAttribute('src', '../imgs/Ice_Explosion_Effect.gif');
            
            setTimeout(() => {
                zumbieAttackIceAnimationEnemy.src = `${zumbieAttackIceAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbieUi.appendChild(zumbieAttackIceAnimationEnemy);
            setTimeout(zumbieClosezumbieAttackIceAnimationEnemy, 500);
    
            function zumbieClosezumbieAttackIceAnimationEnemy() {
                zumbieAttackIceAnimationEnemy.remove();
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
            playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`

            zumbie.life -= (player.energy);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.energyCount;
            infoEnergyProgressBar.style.width = `${(player.energyCount/player.energyToLVLUP)*100}%`
            if(player.energyCount >= player.energyToLVLUP ) {
                energyLevelUp();
            }

            //ENERGY HIT
            const zumbieAttackEnergyAnimation = document.createElement('div');
            zumbieAttackEnergyAnimation.setAttribute('id', 'atk-energy-animation');
            zumbieAttackEnergyAnimation.innerHTML = `-${player.energy}`
            zumbieUi.appendChild(zumbieAttackEnergyAnimation);
            setTimeout(zumbieClosezumbieAttackEnergyAnimation, 500);
    
            function zumbieClosezumbieAttackEnergyAnimation() {
                zumbieAttackEnergyAnimation.remove();
            }  

            //ENERGY ANIMATION LINE
            const zumbieEnergyAnimation = document.createElement('div');
            zumbieEnergyAnimation.setAttribute('id', 'energy-animation');
            playerUi.appendChild(zumbieEnergyAnimation);
            zumbieEnergyAnimation.style.transition = "0.3s linear"
            setTimeout(zumbieEnergyTargetAnime, 1);
            
            setTimeout(zumbieEnergyCloseAnimation, 301)
    
            function zumbieEnergyTargetAnime () {          
                zumbieEnergyAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieEnergyCloseAnimation() {
                zumbieEnergyAnimation.remove();
            }

            //ENERGY ANIMATION ENEMY
            const zumbieAttackEnergyAnimationEnemy = document.createElement('img');
            zumbieAttackEnergyAnimationEnemy.style.animationPlayState = "paused"
            zumbieAttackEnergyAnimationEnemy.setAttribute('id', 'atk-energy-animation-enemy');
            zumbieAttackEnergyAnimationEnemy.setAttribute('src', '../imgs/Energy_Effect.webp');
            
            setTimeout(() => {
                zumbieAttackEnergyAnimationEnemy.src = `${zumbieAttackEnergyAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbieUi.appendChild(zumbieAttackEnergyAnimationEnemy);
            setTimeout(zumbieClosezumbieAttackEnergyAnimationEnemy, 500);
    
            function zumbieClosezumbieAttackEnergyAnimationEnemy() {
                zumbieAttackEnergyAnimationEnemy.remove();
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
            playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`

            zumbie.life -= (player.terra);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.terraCount;
            infoTerraProgressBar.style.width = `${(player.terraCount/player.terraToLVLUP)*100}%`
            if(player.terraCount >= player.terraToLVLUP ) {
                terraLevelUp();
            }

            const zumbieAttackTerraAnimation = document.createElement('div');
            zumbieAttackTerraAnimation.setAttribute('id', 'atk-terra-animation');
            zumbieAttackTerraAnimation.innerHTML = `-${player.terra}`
            zumbieUi.appendChild(zumbieAttackTerraAnimation);
            setTimeout(zumbieClosezumbieAttackTerraAnimation, 500);
    
            function zumbieClosezumbieAttackTerraAnimation() {
                zumbieAttackTerraAnimation.remove();
            }  
            const zumbieTerraAnimation = document.createElement('div');
            zumbieTerraAnimation.setAttribute('id', 'terra-animation');
            playerUi.appendChild(zumbieTerraAnimation);
            zumbieTerraAnimation.style.transition = "0.3s linear"
            setTimeout(zumbieTerraTargetAnime, 1);
            
            setTimeout(zumbieTerraCloseAnimation, 301)
    
            function zumbieTerraTargetAnime () {          
                zumbieTerraAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieTerraCloseAnimation() {
                zumbieTerraAnimation.remove();
            }

            //TERRA ANIMATION ENEMY
            const zumbieAttackTerraAnimationEnemy = document.createElement('img');
            zumbieAttackTerraAnimationEnemy.style.animationPlayState = "paused"
            zumbieAttackTerraAnimationEnemy.setAttribute('id', 'atk-terra-animation-enemy');
            zumbieAttackTerraAnimationEnemy.setAttribute('src', '../imgs/Slicing_Plant_Effect.webp');
            
            setTimeout(() => {
                zumbieAttackTerraAnimationEnemy.src = `${zumbieAttackTerraAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbieUi.appendChild(zumbieAttackTerraAnimationEnemy);
            setTimeout(zumbieClosezumbieAttackTerraAnimationEnemy, 500);
    
            function zumbieClosezumbieAttackTerraAnimationEnemy() {
                zumbieAttackTerraAnimationEnemy.style.animationPlayState = "paused"
                zumbieAttackTerraAnimationEnemy.remove();
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
            playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`

            zumbie.life -= (player.death);
            zumbieLifePercentual = `${(zumbie.life / zumbie.maxLife) * 100}`;
            zumbieHealth.style.width = `${zumbieLifePercentual}%`;
            ++player.deathCount;
            infoDeathProgressBar.style.width = `${(player.deathCount/player.deathToLVLUP)*100}%`
            if(player.deathCount >= player.deathToLVLUP ) {
                deathLevelUp();
            }

            //DEATH HIT
            const zumbieAttackDeathAnimation = document.createElement('div');
            zumbieAttackDeathAnimation.setAttribute('id', 'atk-death-animation');
            zumbieAttackDeathAnimation.innerHTML = `-${player.death}`
            zumbieUi.appendChild(zumbieAttackDeathAnimation);
            setTimeout(zumbieClosezumbieAttackDeathAnimation, 500);
    
            function zumbieClosezumbieAttackDeathAnimation() {
                zumbieAttackDeathAnimation.remove();
            }  
            //DEATH ANIMATION LINE
            const zumbieDeathAnimation = document.createElement('div');
            zumbieDeathAnimation.setAttribute('id', 'death-animation');
            playerUi.appendChild(zumbieDeathAnimation);
            zumbieDeathAnimation.style.transition = "0.3s linear"
            setTimeout(zumbieDeathTargetAnime, 1);
            
            setTimeout(zumbieDeathCloseAnimation, 301)
    
            function zumbieDeathTargetAnime () {          
                zumbieDeathAnimation.style.transform = `translate(${zumbieDistanceY}px,${zumbieDistanceX}px)`
            }
            
            function zumbieDeathCloseAnimation() {
                zumbieDeathAnimation.remove();
            }

            //DEATH ANIMATION ENEMY
            const zumbieAttackDeathAnimationEnemy = document.createElement('img');
            zumbieAttackDeathAnimationEnemy.style.animationPlayState = "paused"
            zumbieAttackDeathAnimationEnemy.setAttribute('id', 'atk-death-animation-enemy');
            zumbieAttackDeathAnimationEnemy.setAttribute('src', '../imgs/Death_Effect.webp');
            
            setTimeout(() => {
                zumbieAttackDeathAnimationEnemy.src = `${zumbieAttackDeathAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbieUi.appendChild(zumbieAttackDeathAnimationEnemy);
            setTimeout(zumbieClosezumbieAttackDeathAnimationEnemy, 500);
    7
            function zumbieClosezumbieAttackDeathAnimationEnemy() {
                zumbieAttackDeathAnimationEnemy.style.animationPlayState = "paused"
                zumbieAttackDeathAnimationEnemy.remove();
            }  
        } 
    }
    

    // function zumbieAttackMagicEnemy() {
    //     if(player.mana > 30) {
    //         player.mana = player.mana - 30;

    //         if(FireSelect) {
    //             zumbie.life = zumbie.life - player.fire;
    //         }
             
    //     }
    // }

    var zumbieIsDead = false;



  
    // setInterval(function(){   
    //     zumbieRandLoot = (Math.floor((Math.random()*100)+1)); 
    //     zumbieRandLoot2 = (Math.floor((Math.random()*100)+1)); 
    //     zumbieRandLoot3 = (Math.floor((Math.random()*100)+1)); 
    //     zumbieRandLoot4 = (Math.floor((Math.random()*80)+1)); 
    //     console.log(zumbieRandLoot, zumbieRandLoot2, zumbieRandLoot3);
    
    //  }, 5000);


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


                const steelHelmetItem = {
                    name: "Steel Helmet",
                    value: 30,
                    img: "../imgs/Steel_Helmet.gif",
                    defense: 6 
                }
                const spiritCapeItem = {
                    name: "Spirit Cape",
                    value: 50,
                    img: "../imgs/Spirit_Cloak.gif",
                    defense: 5,
                    holyLevel: 5,

                    ifEquiped: {
                        defense: 5
                    }
                }
                const redMushroom = {
                    name: "Red Mushroom",
                    value: 5,
                    img: "../imgs/Red_Mushroom.gif",
                    life: 20,
                    
                }
              
                    zumbieRandLoot = (Math.floor((Math.random()*100)+1)); 
                    zumbieRandLoot2 = (Math.floor((Math.random()*100)+1)); 
                    zumbieRandLoot3 = (Math.floor((Math.random()*100)+1)); 
                    zumbieRandLoot4 = (Math.floor((Math.random()*80)+1)); 
                    console.log(zumbieRandLoot, zumbieRandLoot2, zumbieRandLoot3);
                
          
                // LOOT STEEL HELMET
                if(zumbieRandLoot > 1) {
                    // enemiesLoot.push(steelHelmetItem) 
                    const zumbieLootSteelHelmet = document.createElement('div');
                    zumbieLootSteelHelmet.setAttribute('class', 'loot-slot')
                    menuDownLootContent.appendChild(zumbieLootSteelHelmet);
    
                    const zumbieImgLootSteelHelmet = document.createElement('img');
                    zumbieImgLootSteelHelmet.setAttribute('src', `${steelHelmetItem.img}`) 
                    zumbieLootSteelHelmet.appendChild(zumbieImgLootSteelHelmet)
                    

                    zumbieLootSteelHelmet.addEventListener('click', () => {
                        document.getElementById('div-content-backpack-menu-left').appendChild(zumbieLootSteelHelmet)
                        
                            //VENDER
                        if(guanabaraTalkingWith) {
                            zumbieLootSteelHelmet.addEventListener('click', () => {
                                zumbieLootSteelHelmet.style.display = "none";
                                player.coins += steelHelmetItem.value;
                                menuDownCoinsContent.innerHTML = `${player.coins}`                    
                            })
                        } 
                    })

                //     itemIsEquiped = false
                //     // EQUIPAR
                // zumbieLootSteelHelmet.addEventListener('click', () => {
                //     if (!itemIsEquiped && document.getElementById('helmet-slot').childNodes.length === 0) {
                //         itemIsEquiped = true;
                //         document.getElementById('helmet-slot').appendChild(zumbieLootSteelHelmet);
                //     } 
                //     if (itemIsEquiped) {

                //         //DEVOLVER PARA A BOLSA
                //         zumbieLootSteelHelmet.addEventListener('click', () => {
                //         document.getElementById('div-content-backpack-menu-left').appendChild(zumbieLootSteelHelmet)
                //         itemIsEquiped = false;
                //     })
                //     }    
               
                    


                
                //     }
                // )    
                 
                
         


                    zumbieLootSteelHelmet.addEventListener('mouseover', () => {
                        const steelHelmetItemInfo = document.createElement('div');
                        steelHelmetItemInfo.setAttribute('id', "steel-helmet-info");
                        zumbieLootSteelHelmet.appendChild(steelHelmetItemInfo)
                        steelHelmetItemInfo.innerHTML = `<span>ATTRIBUTE: </span>+20 DEFENSE EXP <span>PRICE:</span> 30GP`

                        zumbieLootSteelHelmet.addEventListener('mouseout', () => {
                            steelHelmetItemInfo.remove(); 
                        })
                    })
       
                } 
    
                // LOOT SPIRIT CAPE
                // LOOT SPIRIT CAPE
                if(zumbieRandLoot2 > 70) {
                    const zumbieLoot2 = document.createElement('div');
                    zumbieLoot2.setAttribute('class', 'loot-slot')
                    menuDownLootContent.appendChild(zumbieLoot2);
    
                    const zumbieImgLoot2 = document.createElement('img');
                    zumbieImgLoot2.setAttribute('src', `${spiritCapeItem.img}`) 
                    zumbieLoot2.appendChild(zumbieImgLoot2)
            
                    
                        zumbieLoot2.addEventListener('click', () => {
    
                            player.coins += spiritCapeItem.value;
                            menuDownCoinsContent.innerHTML = `${player.coins}`
                            zumbieLoot2.style.display = "none";
                        })
                        zumbieLoot2.addEventListener('mouseover', () => {
                            const spiritCapeItemInfo = document.createElement('div');
                            spiritCapeItemInfo.setAttribute('id', "spirit-cape-info");
                            zumbieLoot2.appendChild(spiritCapeItemInfo)
                            spiritCapeItemInfo.innerHTML = `<span>ATTRIBUTE: </span>+20 DEATH EXP <span>PRICE:</span> 50GP`

                            zumbieLoot2.addEventListener('mouseout', () => {
                                spiritCapeItemInfo.remove(); 
                            })
                        })
              
                    
                }

                // LOOT MUSHROOM
                // LOOT MUSHROOM
                if(zumbieRandLoot3 > 7) {
                    const zumbieLoot3 = document.createElement('div');
                    zumbieLoot3.setAttribute('class', 'loot-slot')
                    menuDownLootContent.appendChild(zumbieLoot3);
    
                    const zumbieImgLoot3 = document.createElement('img');
                    zumbieImgLoot3.setAttribute('src', `${redMushroom.img}`) 
                    zumbieLoot3.appendChild(zumbieImgLoot3)

                    zumbieLoot3.addEventListener('click', () => {
                        player.life += 5;
                        player.mana += 30;

                        menuUpLifeBar.style.width = `${(player.life / player.maxlife) * 100}%`
                        menuUpLifeValue.innerHTML = `${player.life}`
                        playerHealth.style.width = `${(player.life / player.maxlife) * 100}%`

                        menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
                        menuUpManaValue.innerHTML = `${player.mana}`
                        playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`

                        zumbieLoot3.remove();


                    })

                    // LOOT GOLD
                    // LOOT GOLD
                    zumbieLoot3.addEventListener('mouseover', () => {
                        const redMushroomItemInfo = document.createElement('div');
                        redMushroomItemInfo.setAttribute('id', "red-mushroom-info");
                        zumbieLoot3.appendChild(redMushroomItemInfo)
                        redMushroomItemInfo.innerHTML = `<span>ATTRIBUTE: </span>+5 LIFE/MANA`

                        zumbieLoot3.addEventListener('mouseout', () => {
                            redMushroomItemInfo.remove(); 
                        })
                    })
       
                }
              
                const zumbieLoot4 = document.createElement('div');
                zumbieLoot4.setAttribute('class', 'loot-slot')
                menuDownLootContent.appendChild(zumbieLoot4);

                const zumbieImgLoot4 = document.createElement('img');
                zumbieImgLoot4.setAttribute('src', '../imgs/Gold_Coin.gif') 
                zumbieLoot4.appendChild(zumbieImgLoot4)

                const zumbieCountLoot4 = document.createElement('p');
                zumbieCountLoot4.setAttribute('id', 'coin-count');
                zumbieCountLoot4.innerHTML = `${zumbieRandLoot4}`
                zumbieLoot4.appendChild(zumbieCountLoot4);

                zumbieLoot4.addEventListener('click', zumbieColectCoin)

                function zumbieColectCoin() {
                    player.coins += zumbieRandLoot4;
                    menuDownCoinsContent.innerHTML = `${player.coins}`
                    zumbieLootCoinAnime();
                    zumbieLoot4.remove();
                }

                

        
            
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
        zumbieLootCoinAnimation.innerHTML = `+${zumbieRandLoot4}`;

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
