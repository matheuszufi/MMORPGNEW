const divMenuDown = document.getElementById("div-menu-down");
const menuDown = document.getElementById("menu-down");


const menuDownLoot = document.createElement('div');
menuDownLoot.setAttribute('id', "menu-down-loot");
menuDown.appendChild(menuDownLoot);

const menuDownLootH1 = document.createElement('div');
menuDownLootH1.setAttribute('id', "menu-down-loot-h1");
menuDownLoot.appendChild(menuDownLootH1);
menuDownLootH1.innerHTML = "COINS"