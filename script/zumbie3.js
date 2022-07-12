let zumbie3 = {
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

// let zumbie3IsTag = false;

const zumbie3Ui = document.createElement('div');
zumbie3Ui.setAttribute("id", "zumbie3Ui");
world.appendChild(zumbie3Ui);


const zumbie3Name = document.createElement('div');
zumbie3Name.setAttribute("id", "zumbie3-name");
zumbie3Ui.appendChild(zumbie3Name);
zumbie3Name.innerHTML = `${zumbie3.name}`;

const zumbie3DivHeM = document.createElement('div');
zumbie3DivHeM.setAttribute('id', 'zumbie3-div-hem');
zumbie3Ui.appendChild(zumbie3DivHeM);

const zumbie3MaxHealth = document.createElement('div');
zumbie3MaxHealth.setAttribute('id', 'zumbie3-max-health');
zumbie3DivHeM.appendChild(zumbie3MaxHealth);

const zumbie3Health = document.createElement('div');
zumbie3Health.setAttribute("id", "zumbie3-health");
zumbie3MaxHealth.appendChild(zumbie3Health);



const zumbie3Image = document.createElement('div');
zumbie3Image.setAttribute("id", "zumbie3-image");
zumbie3Ui.appendChild(zumbie3Image);


let zumbie3PosX = 400;
let zumbie3PosY = 500;

zumbie3Ui.style.transform = `translate(${zumbie3PosY}px, ${zumbie3PosX}px)`


// Animação do Sprite
//DOWN
function zumbie3AnimaDown() { 
    if(!zumbie3IsDead){
    zumbie3Image.style.background = "url(../imgs/zumbie/down1.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    setTimeout(zumbie3AnimaDownMid, 800);
    }
};
function zumbie3AnimaDownMid () {
    if(!zumbie3IsDead){
    zumbie3Image.style.background = "url(../imgs/zumbie/down2.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    setTimeout(zumbie3AnimaDownEnd, 800);
    }

}
function zumbie3AnimaDownEnd () {
    if(!zumbie3IsDead){
    zumbie3Image.style.background = "url(../imgs/zumbie/down3.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    }
}

//UP
function zumbie3AnimaUp() {
    if(!zumbie3IsDead){    
    zumbie3Image.style.background = "url(../imgs/zumbie/up1.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    setTimeout(zumbie3AnimaUpMid, 800);
    }
};
function zumbie3AnimaUpMid () {
    if(!zumbie3IsDead){
    zumbie3Image.style.background = "url(../imgs/zumbie/up2.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    setTimeout(zumbie3AnimaUpEnd, 800);
    }
}
function zumbie3AnimaUpEnd () {
    if(!zumbie3IsDead){
    zumbie3Image.style.background = "url(../imgs/zumbie/up3.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    }
}

//LEFT
function zumbie3AnimaLeft() {
    if(!zumbie3IsDead){    
    zumbie3Image.style.background = "url(../imgs/zumbie/left1.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    setTimeout(zumbie3AnimaLeftMid, 800);
    }
};
function zumbie3AnimaLeftMid () {
    if(!zumbie3IsDead){
    zumbie3Image.style.background = "url(../imgs/zumbie/left2.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    setTimeout(zumbie3AnimaLeftEnd, 800);
    }

}
function zumbie3AnimaLeftEnd () {
    if(!zumbie3IsDead){
    zumbie3Image.style.background = "url(../imgs/zumbie/left3.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    }
}

//RIGHT
function zumbie3AnimaRight() {
    if(!zumbie3IsDead){    
    zumbie3Image.style.background = "url(../imgs/zumbie/right1.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    setTimeout(zumbie3AnimaRightMid, 800);
    }
};
function zumbie3AnimaRightMid () {
    if(!zumbie3IsDead){
    zumbie3Image.style.background = "url(../imgs/zumbie/right2.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    setTimeout(zumbie3AnimaRightEnd, 800);
    }
}
function zumbie3AnimaRightEnd () {
    if(!zumbie3IsDead){
    zumbie3Image.style.background = "url(../imgs/zumbie/right3.png)"
    zumbie3Image.style.backgroundRepeat = "no-repeat";
    zumbie3Image.style.backgroundSize = "50px";
    zumbie3Image.style.backgroundPosition = "50%";
    }
}

let zumbie3DistanceX = zumbie3PosX - playerPosX;
let zumbie3DistanceY = zumbie3PosY - playerPosY;


    var zumbie3IntervalWalk = setInterval(zumbie3Walk, 2800);
    function zumbie3Walk() {
        let minZumbie3 = 1;
        let maxZumbie3 = 8;
        let randwalkZumbie3 = Math.floor(Math.random() * (maxZumbie3 - minZumbie3) + minZumbie3);

        if(randwalkZumbie3 <= 2 && zumbie3PosY >= 80) {
            zumbie3AnimaLeft();
            zumbie3PosY = zumbie3PosY - 100;
            zumbie3Ui.style.transform = `translate(${zumbie3PosY}px,${zumbie3PosX}px)`;      
            zumbie3DistanceX = zumbie3PosX - playerPosX
            zumbie3DistanceY = zumbie3PosY - playerPosY
        } 
        if(randwalkZumbie3 > 2 && randwalkZumbie3 <= 4 && zumbie3PosX >= 50) {
            zumbie3AnimaUp();
            zumbie3PosX = zumbie3PosX - 100;
            zumbie3Ui.style.transform = `translate(${zumbie3PosY}px,${zumbie3PosX}px)`;
            zumbie3DistanceX = zumbie3PosX - playerPosX
            zumbie3DistanceY = zumbie3PosY - playerPosY
        }
        if(randwalkZumbie3 > 4 && randwalkZumbie3 <= 6 && zumbie3PosY < 7020) {
            zumbie3AnimaRight();
            zumbie3PosY = zumbie3PosY + 100;
            zumbie3Ui.style.transform = `translate(${zumbie3PosY}px,${zumbie3PosX}px)`;   
            zumbie3DistanceX = zumbie3PosX - playerPosX
            zumbie3DistanceY = zumbie3PosY - playerPosY
        }
        if(randwalkZumbie3 > 6 && randwalkZumbie3 <= 8 && zumbie3PosX < 4500) {
            zumbie3AnimaDown();
            zumbie3PosX = zumbie3PosX + 100;
            zumbie3Ui.style.transform = `translate(${zumbie3PosY}px,${zumbie3PosX}px)`;
            zumbie3DistanceX = zumbie3PosX - playerPosX
            zumbie3DistanceY = zumbie3PosY - playerPosY
        }
    }


    let zumbie3IsNear = false
    
    setInterval(zumbie3Near, 100);
    
    function zumbie3Near() {
        if (zumbie3DistanceX <= 100 && zumbie3DistanceX >= -100 && zumbie3DistanceY <= 100 && zumbie3DistanceY >= -100) {
         zumbie3IsNear = true;   
        } else {
            zumbie3IsNear = false;
        }
    } 
    
    let zumbie3LifePercentual = `${(zumbie3.life / zumbie3.maxLife) * 100}`;

    zumbie3Ui.addEventListener('mousemove', zumbie3AttackEnemy);
    zumbie3Ui.addEventListener('click', zumbie3AttackBowEnemy)
    // zumbie3Ui.addEventListener('context', zumbie3AttackMagicEnemy)
    
    function zumbie3AttackEnemy() {
        
        // zumbie3IsTag = true;
        if (zumbie3DistanceX <= 100 && zumbie3DistanceX >= -100 && zumbie3DistanceY <= 100 && zumbie3DistanceY >= -100) {
            player.attackCount = player.attackCount + 0.08;
            infoAttackProgressBar.style.width = `${(player.attackCount/player.attackToLVLUP)*100}%`
      
            zumbie3AttackAnim();
            
            zumbie3.life -= (player.attack / 10);
            zumbie3LifePercentual = `${(zumbie3.life / zumbie3.maxLife) * 100}`;
            zumbie3Health.style.width = `${zumbie3LifePercentual}%`;


            if (player.attackCount >= player.attackToLVLUP) {
                attackLevelUp();
            }
            if(zumbie3.life <= 0) {
                zumbie3IsDead = true;
                // zumbie3IsTag = false
                zumbie3Kill();    
            }


                //WEAPON ANIMATION ENEMY
                const zumbie3AttackWeaponAnimationEnemy = document.createElement('img');
                zumbie3AttackWeaponAnimationEnemy.style.animationPlayState = "paused"
                zumbie3AttackWeaponAnimationEnemy.setAttribute('id', 'atk-weapon-animation-enemy');
                zumbie3AttackWeaponAnimationEnemy.setAttribute('src', '../imgs/Blood_Effect.webp');
                
                setTimeout(() => {
                    zumbie3AttackWeaponAnimationEnemy.src = `${zumbie3AttackWeaponAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
                }, 100)
    
    
    
                zumbie3Ui.appendChild(zumbie3AttackWeaponAnimationEnemy);
                setTimeout(zumbie3Closezumbie3AttackWeaponAnimationEnemy, 500);
        
                function zumbie3Closezumbie3AttackWeaponAnimationEnemy() {
                    zumbie3AttackWeaponAnimationEnemy.remove();
                } 


        } else {
            zumbie3StayCloserToEnemyAlert();
        }
    }

    function zumbie3AttackAnim () {
        const zumbie3AttackAnimation = document.createElement('div');
        zumbie3AttackAnimation.setAttribute('id', 'zumbie3-atk-animation');
        zumbie3AttackAnimation.innerHTML = `-${player.attack / 10}`

        zumbie3Ui.appendChild(zumbie3AttackAnimation);
        setTimeout(zumbie3CloseAttackAnimation, 1000);
    
        function zumbie3CloseAttackAnimation() {
            zumbie3AttackAnimation.remove();
        }      
    }

    function zumbie3AttackBowEnemy() {

        zumbie3zumbie3AttackDistanceAnim();
        if(zumbie3.life <= 0) {
            zumbie3IsDead = true;
 
            zumbie3Kill();    
          
        }
    }
    
    function zumbie3zumbie3AttackDistanceAnim() {
         // SPEAR SELECT SPEAR SELECT SPEAR SELECT SPEAR SELECT 
         // SPEAR SELECT SPEAR SELECT SPEAR SELECT SPEAR SELECT 
        if (spearSelect && !fireSelect && !iceSelect && !energySelect && !terraSelect && !deathSelect ) {
            zumbie3.life -= (player.attackDistance);
            zumbie3LifePercentual = `${(zumbie3.life / zumbie3.maxLife) * 100}`;
            zumbie3Health.style.width = `${zumbie3LifePercentual}%`;
            ++player.distanceCount;
            infoDistanceProgressBar.style.width = `${(player.distanceCount/player.distanceToLVLUP)*100}%`
            if(player.distanceCount >= player.distanceToLVLUP ) {
                distanceLevelUp();
            }
    

            const zumbie3AttackBowAnimation = document.createElement('div');
            zumbie3AttackBowAnimation.setAttribute('id', 'atk-bow-animation');
            zumbie3AttackBowAnimation.innerHTML = `-${player.attackDistance}`
            zumbie3Ui.appendChild(zumbie3AttackBowAnimation);
            setTimeout(zumbie3Closezumbie3AttackBowAnimation, 500);
    
            function zumbie3Closezumbie3AttackBowAnimation() {
                zumbie3AttackBowAnimation.remove();
            }  
    
            const zumbie3SpearAnimation = document.createElement('img');
            zumbie3SpearAnimation.setAttribute('id', 'spear-animation');
            zumbie3SpearAnimation.setAttribute('src', '../imgs/Ethereal_Spear_Missile.gif');

            playerUi.appendChild(zumbie3SpearAnimation);
            zumbie3SpearAnimation.style.transition = "0.5s linear"
            setTimeout(zumbie3SpearTargetAnime, 1);
            
            setTimeout(zumbie3SpearCloseAnimation, 301)

          
            if (zumbie3DistanceX === 0 && zumbie3DistanceY > 0) {
                zumbie3SpearAnimation.style.transition = '0.3s'
                zumbie3SpearAnimation.style.transform = `rotateZ(-45deg)`
            } else if (zumbie3DistanceX < 0 && zumbie3DistanceY > 0) {
                zumbie3SpearAnimation.style.transition = '0.3s'
                zumbie3SpearAnimation.style.transform = `rotateZ(-90deg)`
            } else if (zumbie3DistanceX < 0 && zumbie3DistanceY === 0) {
                zumbie3SpearAnimation.style.transition = '0.3s'
                zumbie3SpearAnimation.style.transform = `rotateZ(-135deg)`
            }else if (zumbie3DistanceX < 0 && zumbie3DistanceY < 0) {
                zumbie3SpearAnimation.style.transition = '0.3s'
                zumbie3SpearAnimation.style.transform = `rotateZ(-180deg)`
            }else if (zumbie3DistanceX === 0 && zumbie3DistanceY < 0) {
                zumbie3SpearAnimation.style.transition = '0.3s'
                zumbie3SpearAnimation.style.transform = `rotateZ(135deg)`
            }else if (zumbie3DistanceX < 0 && zumbie3DistanceY < 0) {
                zumbie3SpearAnimation.style.transition = '0.3s'
                zumbie3SpearAnimation.style.transform = `rotateZ(90deg)`
            }else if (zumbie3DistanceX > 0 && zumbie3DistanceY === 0) {
                zumbie3SpearAnimation.style.transition = '0.3s'
                zumbie3SpearAnimation.style.transform = `rotateZ(45deg)`
            } else if (zumbie3DistanceX > 0 && zumbie3DistanceY < 0) {
                zumbie3SpearAnimation.style.transition = '0.3s'
                zumbie3SpearAnimation.style.transform = `rotateZ(90deg)`
            }
    
            function zumbie3SpearTargetAnime () {
                if (zumbie3DistanceX > 0 && zumbie3DistanceY > 0) {
                    zumbie3SpearAnimation.style.transition = '0.3s'
                    zumbie3SpearAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px)`
                } else if (zumbie3DistanceX === 0 && zumbie3DistanceY > 0) {
                    zumbie3SpearAnimation.style.transition = '0.3s'
                    zumbie3SpearAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px) rotateZ(-45deg)`
                } else if (zumbie3DistanceX < 0 && zumbie3DistanceY > 0) {
                    zumbie3SpearAnimation.style.transition = '0.3s'
                    zumbie3SpearAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px) rotateZ(-90deg)`
                } else if (zumbie3DistanceX < 0 && zumbie3DistanceY === 0) {
                    zumbie3SpearAnimation.style.transition = '0.3s'
                    zumbie3SpearAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px) rotateZ(-135deg)`
                }else if (zumbie3DistanceX < 0 && zumbie3DistanceY < 0) {
                    zumbie3SpearAnimation.style.transition = '0.3s'
                    zumbie3SpearAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px) rotateZ(-180deg)`
                }else if (zumbie3DistanceX === 0 && zumbie3DistanceY < 0) {
                    zumbie3SpearAnimation.style.transition = '0.3s'
                    zumbie3SpearAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px) rotateZ(135deg)`
                }else if (zumbie3DistanceX < 0 && zumbie3DistanceY < 0) {
                    zumbie3SpearAnimation.style.transition = '0.3s'
                    zumbie3SpearAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px) rotateZ(90deg)`
                }else if (zumbie3DistanceX > 0 && zumbie3DistanceY === 0) {
                    zumbie3SpearAnimation.style.transition = '0.3s'
                    zumbie3SpearAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px) rotateZ(45deg)`
                }else if (zumbie3DistanceX > 0 && zumbie3DistanceY < 0) {
                    zumbie3SpearAnimation.style.transition = '0.3s'
                    zumbie3SpearAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px) rotateZ(45deg)`
                }

            }
            function zumbie3SpearCloseAnimation() {
                zumbie3SpearAnimation.remove();
            }

                //SPEAR ANIMATION ENEMY
            const zumbie3AttackSpearAnimationEnemy = document.createElement('img');
            zumbie3AttackSpearAnimationEnemy.style.animationPlayState = "paused"
            zumbie3AttackSpearAnimationEnemy.setAttribute('id', 'atk-spear-animation-enemy');
            zumbie3AttackSpearAnimationEnemy.setAttribute('src', '../imgs/Blood_Effect.webp');
            
            setTimeout(() => {
                zumbie3AttackSpearAnimationEnemy.src = `${zumbie3AttackSpearAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 100)



            zumbie3Ui.appendChild(zumbie3AttackSpearAnimationEnemy);
            setTimeout(zumbie3Closezumbie3AttackSpearAnimationEnemy, 500);
    
            function zumbie3Closezumbie3AttackSpearAnimationEnemy() {
                zumbie3AttackSpearAnimationEnemy.remove();
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

            zumbie3.life -= (player.fire);
            zumbie3LifePercentual = `${(zumbie3.life / zumbie3.maxLife) * 100}`;
            zumbie3Health.style.width = `${zumbie3LifePercentual}%`;
            ++player.fireCount;
            infoFireProgressBar.style.width = `${(player.fireCount/player.fireToLVLUP)*100}%`
            if(player.fireCount >= player.fireToLVLUP ) {
                fireLevelUp();
            }

            const zumbie3AttackFireAnimation = document.createElement('div');
            zumbie3AttackFireAnimation.setAttribute('id', 'atk-fire-animation');
            zumbie3AttackFireAnimation.innerHTML = `-${player.fire}`
            zumbie3Ui.appendChild(zumbie3AttackFireAnimation);
            setTimeout(zumbie3Closezumbie3AttackFireAnimation, 500);
    
            function zumbie3Closezumbie3AttackFireAnimation() {
                zumbie3AttackFireAnimation.remove();
            }  
            const zumbie3FireAnimation = document.createElement('div');
            zumbie3FireAnimation.setAttribute('id', 'fire-animation');
            playerUi.appendChild(zumbie3FireAnimation);
            zumbie3FireAnimation.style.transition = "0.3s linear"
            setTimeout(zumbie3FireTargetAnime, 1);
            
            setTimeout(zumbie3FireCloseAnimation, 301)
    
            function zumbie3FireTargetAnime () {          
                zumbie3FireAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px)`
            }
            
            function zumbie3FireCloseAnimation() {
                zumbie3FireAnimation.remove();
            }

            //FIRE ANIMATION ENEMY
            const zumbie3AttackFireAnimationEnemy = document.createElement('img');
            zumbie3AttackFireAnimationEnemy.style.animationPlayState = "paused"
            zumbie3AttackFireAnimationEnemy.setAttribute('id', 'atk-fire-animation-enemy');
            zumbie3AttackFireAnimationEnemy.setAttribute('src', '../imgs/Fireball_Effect.gif');
            
            setTimeout(() => {
                zumbie3AttackFireAnimationEnemy.src = `${zumbie3AttackFireAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbie3Ui.appendChild(zumbie3AttackFireAnimationEnemy);
            setTimeout(zumbie3Closezumbie3AttackFireAnimationEnemy, 500);
    
            function zumbie3Closezumbie3AttackFireAnimationEnemy() {
                zumbie3AttackFireAnimationEnemy.style.animationPlayState = "paused"
                zumbie3AttackFireAnimationEnemy.remove();
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

            zumbie3.life -= (player.ice);
            zumbie3LifePercentual = `${(zumbie3.life / zumbie3.maxLife) * 100}`;
            zumbie3Health.style.width = `${zumbie3LifePercentual}%`;
            ++player.iceCount;
            infoIceProgressBar.style.width = `${(player.iceCount/player.iceToLVLUP)*100}%`
            if(player.iceCount >= player.iceToLVLUP ) {
                iceLevelUp();
            }

            const zumbie3AttackIceAnimation = document.createElement('div');
            zumbie3AttackIceAnimation.setAttribute('id', 'atk-ice-animation');
            zumbie3AttackIceAnimation.innerHTML = `-${player.ice}`
            zumbie3Ui.appendChild(zumbie3AttackIceAnimation);
            setTimeout(zumbie3Closezumbie3AttackIceAnimation, 500);
    
            function zumbie3Closezumbie3AttackIceAnimation() {
                zumbie3AttackIceAnimation.remove();
            }  
            const zumbie3IceAnimation = document.createElement('div');
            zumbie3IceAnimation.setAttribute('id', 'ice-animation');
            playerUi.appendChild(zumbie3IceAnimation);
            zumbie3IceAnimation.style.transition = "0.3s linear"
            setTimeout(zumbie3IceTargetAnime, 1);
            
            setTimeout(zumbie3IceCloseAnimation, 301)
    
            function zumbie3IceTargetAnime () {          
                zumbie3IceAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px)`
            }
            
            function zumbie3IceCloseAnimation() {
                zumbie3IceAnimation.remove();
            }

            //ICE ANIMATION ENEMY
            const zumbie3AttackIceAnimationEnemy = document.createElement('img');
            zumbie3AttackIceAnimationEnemy.style.animationPlayState = "paused"
            zumbie3AttackIceAnimationEnemy.setAttribute('id', 'atk-ice-animation-enemy');
            zumbie3AttackIceAnimationEnemy.setAttribute('src', '../imgs/Ice_Explosion_Effect.gif');
            
            setTimeout(() => {
                zumbie3AttackIceAnimationEnemy.src = `${zumbie3AttackIceAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbie3Ui.appendChild(zumbie3AttackIceAnimationEnemy);
            setTimeout(zumbie3Closezumbie3AttackIceAnimationEnemy, 500);
    
            function zumbie3Closezumbie3AttackIceAnimationEnemy() {
                zumbie3AttackIceAnimationEnemy.remove();
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

            zumbie3.life -= (player.energy);
            zumbie3LifePercentual = `${(zumbie3.life / zumbie3.maxLife) * 100}`;
            zumbie3Health.style.width = `${zumbie3LifePercentual}%`;
            ++player.energyCount;
            infoEnergyProgressBar.style.width = `${(player.energyCount/player.energyToLVLUP)*100}%`
            if(player.energyCount >= player.energyToLVLUP ) {
                energyLevelUp();
            }

            //ENERGY HIT
            const zumbie3AttackEnergyAnimation = document.createElement('div');
            zumbie3AttackEnergyAnimation.setAttribute('id', 'atk-energy-animation');
            zumbie3AttackEnergyAnimation.innerHTML = `-${player.energy}`
            zumbie3Ui.appendChild(zumbie3AttackEnergyAnimation);
            setTimeout(zumbie3Closezumbie3AttackEnergyAnimation, 500);
    
            function zumbie3Closezumbie3AttackEnergyAnimation() {
                zumbie3AttackEnergyAnimation.remove();
            }  

            //ENERGY ANIMATION LINE
            const zumbie3EnergyAnimation = document.createElement('div');
            zumbie3EnergyAnimation.setAttribute('id', 'energy-animation');
            playerUi.appendChild(zumbie3EnergyAnimation);
            zumbie3EnergyAnimation.style.transition = "0.3s linear"
            setTimeout(zumbie3EnergyTargetAnime, 1);
            
            setTimeout(zumbie3EnergyCloseAnimation, 301)
    
            function zumbie3EnergyTargetAnime () {          
                zumbie3EnergyAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px)`
            }
            
            function zumbie3EnergyCloseAnimation() {
                zumbie3EnergyAnimation.remove();
            }

            //ENERGY ANIMATION ENEMY
            const zumbie3AttackEnergyAnimationEnemy = document.createElement('img');
            zumbie3AttackEnergyAnimationEnemy.style.animationPlayState = "paused"
            zumbie3AttackEnergyAnimationEnemy.setAttribute('id', 'atk-energy-animation-enemy');
            zumbie3AttackEnergyAnimationEnemy.setAttribute('src', '../imgs/Energy_Effect.webp');
            
            setTimeout(() => {
                zumbie3AttackEnergyAnimationEnemy.src = `${zumbie3AttackEnergyAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbie3Ui.appendChild(zumbie3AttackEnergyAnimationEnemy);
            setTimeout(zumbie3Closezumbie3AttackEnergyAnimationEnemy, 500);
    
            function zumbie3Closezumbie3AttackEnergyAnimationEnemy() {
                zumbie3AttackEnergyAnimationEnemy.remove();
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

            zumbie3.life -= (player.terra);
            zumbie3LifePercentual = `${(zumbie3.life / zumbie3.maxLife) * 100}`;
            zumbie3Health.style.width = `${zumbie3LifePercentual}%`;
            ++player.terraCount;
            infoTerraProgressBar.style.width = `${(player.terraCount/player.terraToLVLUP)*100}%`
            if(player.terraCount >= player.terraToLVLUP ) {
                terraLevelUp();
            }

            const zumbie3AttackTerraAnimation = document.createElement('div');
            zumbie3AttackTerraAnimation.setAttribute('id', 'atk-terra-animation');
            zumbie3AttackTerraAnimation.innerHTML = `-${player.terra}`
            zumbie3Ui.appendChild(zumbie3AttackTerraAnimation);
            setTimeout(zumbie3Closezumbie3AttackTerraAnimation, 500);
    
            function zumbie3Closezumbie3AttackTerraAnimation() {
                zumbie3AttackTerraAnimation.remove();
            }  
            const zumbie3TerraAnimation = document.createElement('div');
            zumbie3TerraAnimation.setAttribute('id', 'terra-animation');
            playerUi.appendChild(zumbie3TerraAnimation);
            zumbie3TerraAnimation.style.transition = "0.3s linear"
            setTimeout(zumbie3TerraTargetAnime, 1);
            
            setTimeout(zumbie3TerraCloseAnimation, 301)
    
            function zumbie3TerraTargetAnime () {          
                zumbie3TerraAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px)`
            }
            
            function zumbie3TerraCloseAnimation() {
                zumbie3TerraAnimation.remove();
            }

            //TERRA ANIMATION ENEMY
            const zumbie3AttackTerraAnimationEnemy = document.createElement('img');
            zumbie3AttackTerraAnimationEnemy.style.animationPlayState = "paused"
            zumbie3AttackTerraAnimationEnemy.setAttribute('id', 'atk-terra-animation-enemy');
            zumbie3AttackTerraAnimationEnemy.setAttribute('src', '../imgs/Slicing_Plant_Effect.webp');
            
            setTimeout(() => {
                zumbie3AttackTerraAnimationEnemy.src = `${zumbie3AttackTerraAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbie3Ui.appendChild(zumbie3AttackTerraAnimationEnemy);
            setTimeout(zumbie3Closezumbie3AttackTerraAnimationEnemy, 500);
    
            function zumbie3Closezumbie3AttackTerraAnimationEnemy() {
                zumbie3AttackTerraAnimationEnemy.style.animationPlayState = "paused"
                zumbie3AttackTerraAnimationEnemy.remove();
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

            zumbie3.life -= (player.death);
            zumbie3LifePercentual = `${(zumbie3.life / zumbie3.maxLife) * 100}`;
            zumbie3Health.style.width = `${zumbie3LifePercentual}%`;
            ++player.deathCount;
            infoDeathProgressBar.style.width = `${(player.deathCount/player.deathToLVLUP)*100}%`
            if(player.deathCount >= player.deathToLVLUP ) {
                deathLevelUp();
            }

            //DEATH HIT
            const zumbie3AttackDeathAnimation = document.createElement('div');
            zumbie3AttackDeathAnimation.setAttribute('id', 'atk-death-animation');
            zumbie3AttackDeathAnimation.innerHTML = `-${player.death}`
            zumbie3Ui.appendChild(zumbie3AttackDeathAnimation);
            setTimeout(zumbie3Closezumbie3AttackDeathAnimation, 500);
    
            function zumbie3Closezumbie3AttackDeathAnimation() {
                zumbie3AttackDeathAnimation.remove();
            }  
            //DEATH ANIMATION LINE
            const zumbie3DeathAnimation = document.createElement('div');
            zumbie3DeathAnimation.setAttribute('id', 'death-animation');
            playerUi.appendChild(zumbie3DeathAnimation);
            zumbie3DeathAnimation.style.transition = "0.3s linear"
            setTimeout(zumbie3DeathTargetAnime, 1);
            
            setTimeout(zumbie3DeathCloseAnimation, 301)
    
            function zumbie3DeathTargetAnime () {          
                zumbie3DeathAnimation.style.transform = `translate(${zumbie3DistanceY}px,${zumbie3DistanceX}px)`
            }
            
            function zumbie3DeathCloseAnimation() {
                zumbie3DeathAnimation.remove();
            }

            //DEATH ANIMATION ENEMY
            const zumbie3AttackDeathAnimationEnemy = document.createElement('img');
            zumbie3AttackDeathAnimationEnemy.style.animationPlayState = "paused"
            zumbie3AttackDeathAnimationEnemy.setAttribute('id', 'atk-death-animation-enemy');
            zumbie3AttackDeathAnimationEnemy.setAttribute('src', '../imgs/Death_Effect.webp');
            
            setTimeout(() => {
                zumbie3AttackDeathAnimationEnemy.src = `${zumbie3AttackDeathAnimationEnemy.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
            }, 1000)



            zumbie3Ui.appendChild(zumbie3AttackDeathAnimationEnemy);
            setTimeout(zumbie3Closezumbie3AttackDeathAnimationEnemy, 500);
    7
            function zumbie3Closezumbie3AttackDeathAnimationEnemy() {
                zumbie3AttackDeathAnimationEnemy.style.animationPlayState = "paused"
                zumbie3AttackDeathAnimationEnemy.remove();
            }  
        } 
    }
    

    // function zumbie3AttackMagicEnemy() {
    //     if(player.mana > 30) {
    //         player.mana = player.mana - 30;

    //         if(FireSelect) {
    //             zumbie3.life = zumbie3.life - player.fire;
    //         }
             
    //     }
    // }

    var zumbie3IsDead = false;



  
    // setInterval(function(){   
    //     zumbie3RandLoot = (Math.floor((Math.random()*100)+1)); 
    //     zumbie3RandLoot2 = (Math.floor((Math.random()*100)+1)); 
    //     zumbie3RandLoot3 = (Math.floor((Math.random()*100)+1)); 
    //     zumbie3RandLoot4 = (Math.floor((Math.random()*80)+1)); 
    //     console.log(zumbie3RandLoot, zumbie3RandLoot2, zumbie3RandLoot3);
    
    //  }, 5000);


    function zumbie3Kill() {
        
        zumbie3Ui.style.display = "none";
        player.experience += zumbie3.experience;
        infoExperienceProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`
        infoLevelProgressBar.style.width = `${(player.experience / player.toLVLUP) * 100}%`
        infoExperienceCount.innerHTML = `${player.experience}`
        zumbie3ExpAnimation();
        if(player.experience >= player.toLVLUP) {
            levelUp();
        }
        setTimeout(zumbie3Hidden, 4000);

        const zumbie3DeadUi = document.createElement('div');
        zumbie3DeadUi.setAttribute('id', 'zumbie3-dead-ui');
        world.appendChild(zumbie3DeadUi);
        
        zumbie3DeadUi.style.transform = `translate(${zumbie3PosY}px, ${zumbie3PosX}px)`;
        zumbie3DeadUi.addEventListener('click', zumbie3Loot);
        
        function zumbie3Loot() {
            zumbie3DeadUi.style.display = "none";


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
                    holyLevel: 5
                }
                const redMushroom = {
                    name: "Red Mushroom",
                    value: 5,
                    img: "../imgs/Red_Mushroom.gif",
                    life: 20,
                    
                }
              
                    zumbie3RandLoot = (Math.floor((Math.random()*100)+1)); 
                    zumbie3RandLoot2 = (Math.floor((Math.random()*100)+1)); 
                    zumbie3RandLoot3 = (Math.floor((Math.random()*100)+1)); 
                    zumbie3RandLoot4 = (Math.floor((Math.random()*80)+1)); 
                    console.log(zumbie3RandLoot, zumbie3RandLoot2, zumbie3RandLoot3);
                
          
                
             
                if(zumbie3RandLoot > 50) {
                    enemiesLoot.push(steelHelmetItem) 
                    const zumbie3Loot1 = document.createElement('div');
                    zumbie3Loot1.setAttribute('class', 'loot-slot')
                    menuDownLootContent.appendChild(zumbie3Loot1);
    
                    const zumbie3ImgLoot1 = document.createElement('img');
                    zumbie3ImgLoot1.setAttribute('src', `${steelHelmetItem.img}`) 
                    zumbie3Loot1.appendChild(zumbie3ImgLoot1)
        
                    zumbie3Loot1.addEventListener('click', () => {
    
                        player.coins += steelHelmetItem.value;
                        menuDownCoinsContent.innerHTML = `${player.coins}`
                        zumbie3Loot1.style.display = "none";
                    })


                    zumbie3Loot1.addEventListener('mouseover', () => {
                        const steelHelmetItemInfo = document.createElement('div');
                        steelHelmetItemInfo.setAttribute('id', "steel-helmet-info");
                        zumbie3Loot1.appendChild(steelHelmetItemInfo)
                        steelHelmetItemInfo.innerHTML = `<span>ATTRIBUTE: </span>+20 DEFENSE EXP <span>PRICE:</span> 30GP`

                        zumbie3Loot1.addEventListener('mouseout', () => {
                            steelHelmetItemInfo.remove(); 
                        })
                    })
       
                } 
    

                if(zumbie3RandLoot2 > 70) {
                    const zumbie3Loot2 = document.createElement('div');
                    zumbie3Loot2.setAttribute('class', 'loot-slot')
                    menuDownLootContent.appendChild(zumbie3Loot2);
    
                    const zumbie3ImgLoot2 = document.createElement('img');
                    zumbie3ImgLoot2.setAttribute('src', `${spiritCapeItem.img}`) 
                    zumbie3Loot2.appendChild(zumbie3ImgLoot2)
            
                    
                        zumbie3Loot2.addEventListener('click', () => {
    
                            player.coins += spiritCapeItem.value;
                            menuDownCoinsContent.innerHTML = `${player.coins}`
                            zumbie3Loot2.style.display = "none";
                        })
                        zumbie3Loot2.addEventListener('mouseover', () => {
                            const spiritCapeItemInfo = document.createElement('div');
                            spiritCapeItemInfo.setAttribute('id', "spirit-cape-info");
                            zumbie3Loot2.appendChild(spiritCapeItemInfo)
                            spiritCapeItemInfo.innerHTML = `<span>ATTRIBUTE: </span>+20 DEATH EXP <span>PRICE:</span> 50GP`

                            zumbie3Loot2.addEventListener('mouseout', () => {
                                spiritCapeItemInfo.remove(); 
                            })
                        })
              
                    
                }


                if(zumbie3RandLoot3 > 7) {
                    const zumbie3Loot3 = document.createElement('div');
                    zumbie3Loot3.setAttribute('class', 'loot-slot')
                    menuDownLootContent.appendChild(zumbie3Loot3);
    
                    const zumbie3ImgLoot3 = document.createElement('img');
                    zumbie3ImgLoot3.setAttribute('src', `${redMushroom.img}`) 
                    zumbie3Loot3.appendChild(zumbie3ImgLoot3)

                    zumbie3Loot3.addEventListener('click', () => {
                        player.life += 5;
                        player.mana += 5;

                        menuUpLifeBar.style.width = `${(player.life / player.maxlife) * 100}%`
                        menuUpLifeValue.innerHTML = `${player.life}`
                        playerHealth.style.width = `${(player.life / player.maxlife) * 100}%`

                        menuUpManaBar.style.width = `${(player.mana / player.maxMana) * 100}%`
                        menuUpManaValue.innerHTML = `${player.mana}`
                        playerMana.style.width = `${(player.mana / player.maxMana) * 100}%`

                        zumbie3Loot3.remove();


                    })

                    zumbie3Loot3.addEventListener('mouseover', () => {
                        const redMushroomItemInfo = document.createElement('div');
                        redMushroomItemInfo.setAttribute('id', "red-mushroom-info");
                        zumbie3Loot3.appendChild(redMushroomItemInfo)
                        redMushroomItemInfo.innerHTML = `<span>ATTRIBUTE: </span>+5 LIFE/MANA`

                        zumbie3Loot3.addEventListener('mouseout', () => {
                            redMushroomItemInfo.remove(); 
                        })
                    })
       
                }
              
                const zumbie3Loot4 = document.createElement('div');
                zumbie3Loot4.setAttribute('class', 'loot-slot')
                menuDownLootContent.appendChild(zumbie3Loot4);

                const zumbie3ImgLoot4 = document.createElement('img');
                zumbie3ImgLoot4.setAttribute('src', '../imgs/Gold_Coin.gif') 
                zumbie3Loot4.appendChild(zumbie3ImgLoot4)

                const zumbie3CountLoot4 = document.createElement('p');
                zumbie3CountLoot4.setAttribute('id', 'coin-count');
                zumbie3CountLoot4.innerHTML = `${zumbie3RandLoot4}`
                zumbie3Loot4.appendChild(zumbie3CountLoot4);

                zumbie3Loot4.addEventListener('click', zumbie3ColectCoin)

                function zumbie3ColectCoin() {
                    player.coins += zumbie3RandLoot4;
                    menuDownCoinsContent.innerHTML = `${player.coins}`
                    zumbie3LootCoinAnime();
                    zumbie3Loot4.remove();
                }

                

        
            
            // return zumbie3DeadUi;

        }

 
    }

    function zumbie3Hidden () {
       
        setTimeout(zumbie3Spawn, 1000);
    }

    function zumbie3Spawn(){
        zumbie3Ui.style.display = "block";
        zumbie3IsDead = false;
        zumbie3Image.style.background = "url(../imgs/zumbie3/down3.png)"
        zumbie3Image.style.backgroundSize = "50px"
        zumbie3Image.style.backgroundRepeat = "no-repeat"
        zumbie3Image.style.backgroundPosition = "50%"

        zumbie3.life = zumbie3.maxLife;
        zumbie3LifePercentual = `${(zumbie3.life / zumbie3.maxLife) * 100}`;
        zumbie3Health.style.width = `${zumbie3LifePercentual}%`;

    }

    function zumbie3ExpAnimation() {
        const zumbie3ExpAnimation = document.createElement('div');
        zumbie3ExpAnimation.setAttribute('id', 'zumbie3-exp-animation');
        zumbie3ExpAnimation.innerHTML = `+${zumbie3.experience}`

        playerUi.appendChild(zumbie3ExpAnimation);
        setTimeout(zumbie3CloseExpAnimation, 1000);
    
        function zumbie3CloseExpAnimation() {
            zumbie3ExpAnimation.remove();
        }
    };

    function zumbie3LootCoinAnime() {
        const zumbie3LootCoinAnimation = document.createElement('div');
        zumbie3LootCoinAnimation.setAttribute('id', 'zumbie3-lootcoin-animation');
        zumbie3LootCoinAnimation.innerHTML = `+${zumbie3RandLoot4}`;

        playerUi.appendChild(zumbie3LootCoinAnimation);
        setTimeout(zumbie3CloseLootCoinAnimation, 1000);
    
        function zumbie3CloseLootCoinAnimation() {
            zumbie3LootCoinAnimation.remove();
        }
    };
    
    setInterval(zumbie3Damage, 2000);
    
    function zumbie3Damage() {
            if (!zumbie3IsDead && zumbie3DistanceX <= 100 && zumbie3DistanceX >= -100 && zumbie3DistanceY <= 100 && zumbie3DistanceY >= -100){
                player.life -= zumbie3.attack;
                playerHealth.style.width = `${(player.life / player.maxLife) * 100}%`
                menuUpLifeBar.style.width = `${(player.life / player.maxLife) * 100}%`
                menuUpLifeValue.innerHTML = `${player.life}`;
                zumbie3AnimaDamage();
         
            }       
    };

    function zumbie3AnimaDamage(){
        const zumbie3DamageAnimation = document.createElement('div');
        zumbie3DamageAnimation.setAttribute('id', 'zumbie3-damage-animation');
        zumbie3DamageAnimation.innerHTML = `-${zumbie3.attack}`;

        playerUi.appendChild(zumbie3DamageAnimation);
        setTimeout(zumbie3CloseDamageAnimation, 1000);
    
        function zumbie3CloseDamageAnimation() {
            zumbie3DamageAnimation.remove();
        }
    };
        
    function zumbie3StayCloserToEnemyAlert() {
        const zumbie3DistanceAlert = document.createElement('div');
        zumbie3DistanceAlert.setAttribute('id', 'zumbie3-distance-alert');
        zumbie3DistanceAlert.innerHTML = `STAY CLOSER TO THE ENEMY`;

        playerUi.appendChild(zumbie3DistanceAlert);
        setTimeout(zumbie3CloseDistanceAlert, 3000);
    
        function zumbie3CloseDistanceAlert() {
            zumbie3DistanceAlert.remove();
        }
    };
