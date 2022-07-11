player = {
    coins: 0,
    loot: [
        

    ] 
}

const divMenuDown = document.getElementById("div-menu-down");
const menuDown = document.getElementById("menu-down");


const menuDownCoins = document.createElement('div');
menuDownCoins.setAttribute('id', "menu-down-coins");
menuDown.appendChild(menuDownCoins);

const menuDownCoinsH1 = document.createElement('div');
menuDownCoinsH1.setAttribute('id', "menu-down-coins-h1");
menuDownCoins.appendChild(menuDownCoinsH1);
menuDownCoinsH1.innerHTML = "COINS"

const menuDownCoinsContent = document.createElement('div');
menuDownCoinsContent.setAttribute('id', 'menu-down-coins-content');
menuDownCoins.appendChild(menuDownCoinsContent);
menuDownCoinsContent.innerHTML = `${player.coins}`


const menuDownCoinsImage = document.createElement('div');
menuDownCoinsImage.setAttribute('id', 'menu-down-coins-image');
menuDownCoins.appendChild(menuDownCoinsImage);

const menuDownPowerSelect = document.createElement('div');
menuDownPowerSelect.setAttribute('id', 'menu-down-power-select');
menuDown.appendChild(menuDownPowerSelect);


const menuDownPowerSelectContent = document.createElement('div');
menuDownPowerSelectContent.setAttribute('id', "menu-down-power-select-content")
menuDownPowerSelect.appendChild(menuDownPowerSelectContent)


const menuDownPowerSelectHeal = document.createElement('div');
menuDownPowerSelectHeal.setAttribute('id', 'menu-down-power-select-slot-heal')
menuDownPowerSelectHeal.setAttribute('class', 'menu-down-power-select')
menuDownPowerSelectContent.appendChild(menuDownPowerSelectHeal)
const healSelect = document.createElement('img')
healSelect.setAttribute('src', '../imgs/Ultimate_Healing.gif');
menuDownPowerSelectHeal.appendChild(healSelect);

const menuDownPowerSelectSlotSpear = document.createElement('div');
menuDownPowerSelectSlotSpear.setAttribute('id', 'menu-down-power-select-slot-spear')
menuDownPowerSelectSlotSpear.setAttribute('class', 'menu-down-power-select')
menuDownPowerSelectContent.appendChild(menuDownPowerSelectSlotSpear)


const menuDownPowerSelectSlotFire = document.createElement('div');
menuDownPowerSelectSlotFire.setAttribute('id', 'menu-down-power-select-slot-fire')
menuDownPowerSelectSlotFire.setAttribute('class', 'menu-down-power-select')
menuDownPowerSelectContent.appendChild(menuDownPowerSelectSlotFire)


const menuDownPowerSelectSlotIce = document.createElement('div');
menuDownPowerSelectSlotIce.setAttribute('id', 'menu-down-power-select-slot-ice')
menuDownPowerSelectSlotIce.setAttribute('class', 'menu-down-power-select')
menuDownPowerSelectContent.appendChild(menuDownPowerSelectSlotIce)


const menuDownPowerSelectSlotEnergy = document.createElement('div');
menuDownPowerSelectSlotEnergy.setAttribute('id', 'menu-down-power-select-slot-energy')
menuDownPowerSelectSlotEnergy.setAttribute('class', 'menu-down-power-select')
menuDownPowerSelectContent.appendChild(menuDownPowerSelectSlotEnergy)


const menuDownPowerSelectSlotTerra = document.createElement('div');
menuDownPowerSelectSlotTerra.setAttribute('id', 'menu-down-power-select-slot-terra')
menuDownPowerSelectSlotTerra.setAttribute('class', 'menu-down-power-select')
menuDownPowerSelectContent.appendChild(menuDownPowerSelectSlotTerra)


const menuDownPowerSelectSlotDeath = document.createElement('div');
menuDownPowerSelectSlotDeath.setAttribute('id', 'menu-down-power-select-slot-death')
menuDownPowerSelectSlotDeath.setAttribute('class', 'menu-down-power-select')
menuDownPowerSelectContent.appendChild(menuDownPowerSelectSlotDeath)


const menuDownLoot = document.createElement('menu-down-loot');
menuDownLoot.setAttribute('id', 'menu-down-loot');
menuDownPowerSelect.appendChild(menuDownLoot);


const menuDownLootHeader = document.createElement('div');
menuDownLootHeader.setAttribute('id', "menu-down-loot-header");
menuDownLoot.appendChild(menuDownLootHeader);
menuDownLootHeader.innerHTML = "LOOT"

const menuDownLootContent = document.createElement('div');
menuDownLootContent.setAttribute('id', "menu-down-loot-content");
menuDownLoot.appendChild(menuDownLootContent);


let enemiesLoot = [

]




// enemiesLoot.forEach(() => {
//     const menuDownLootSlot = document.createElement('div');
//     menuDownLootSlot.setAttribute("class", "loot-slot");
//     for (var i = 0; i < 15; i++){
//         menuDownLootSlot.setAttribute("id", `${([enemiesLoot.slic])}`);
//         menuDownLootContent.appendChild(menuDownLootSlot);
//     }   
// });
    