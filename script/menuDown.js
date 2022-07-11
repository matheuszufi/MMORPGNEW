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



const menuDownLoot = document.createElement('menu-down-loot');
menuDownLoot.setAttribute('id', 'menu-down-loot');
menuDown.appendChild(menuDownLoot);

const menuDownLootHeader = document.createElement('div');
menuDownLootHeader.setAttribute('id', "menu-down-loot-header");
menuDownLoot.appendChild(menuDownLootHeader);
menuDownLootHeader.innerHTML = "LOOT"

const menuDownLootContent = document.createElement('div');
menuDownLootContent.setAttribute('id', "menu-down-loot-content");
menuDownLoot.appendChild(menuDownLootContent);

// const menuDownLootSlot = document.createElement('div');
// menuDownLootSlot.setAttribute("class", "loot-slot");
// menuDownLootContent.appendChild(menuDownLootSlot);

let enemiesLoot = [
    slot1 = 'slot1',
    slot2 = 'slot2',
    slot3 = 'slot3',
    slot4 = '',
    slot5 = '',
    slot6 = '',
    slot7 = '',
    slot8 = '',
    slot9 = '',
    slot10 = '',
    slot11 = '',
    slot12 = '',
    slot13 = '',
    slot14 = '',
    slot15 = '',
    slot16 = '',
    slot17 = '',
    slot18 = '',
    slot19 = '',
    slot20 = '',
]


enemiesLoot.forEach(() => {
    const menuDownLootSlot = document.createElement('div');
    menuDownLootSlot.setAttribute("class", "loot-slot");
    for (var i = 0; i < 20; i++){
        menuDownLootSlot.setAttribute("id", `${([enemiesLoot.slic])}`);
        menuDownLootContent.appendChild(menuDownLootSlot);
    }   
});
    
    