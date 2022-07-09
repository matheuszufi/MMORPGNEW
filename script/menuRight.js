const menuRight = document.getElementById('menu-right');

const menuRightOptions = document.createElement('div');
menuRightOptions.setAttribute('id', "menu-right-options");
menuRight.appendChild(menuRightOptions);

const menuRightOptionsBtn = document.createElement('button');
menuRightOptionsBtn.setAttribute('id', "menu-right-options-btn");
menuRightOptions.appendChild(menuRightOptionsBtn);
menuRightOptionsBtn.innerHTML = "OPTIONS"

const menuRightPlayerInfosBtn = document.createElement('button');
menuRightPlayerInfosBtn.setAttribute('id', "menu-right-player-infos-btn");
menuRightOptions.appendChild(menuRightPlayerInfosBtn);
menuRightPlayerInfosBtn.innerHTML = "PLAYER PROGRESS"

menuRightPlayerInfosBtn.addEventListener('click', closePlayerInfos);

let playerInfosOpen = true;
function closePlayerInfos() {
    if(playerInfosOpen) {
        playerInfosDiv.style.display = "none"  
        playerInfosOpen = false; 
    }  else {
        playerInfosDiv.style.display = "flex"
        playerInfosOpen = true; 
    }

}

const menuRightStoreBtn = document.createElement('button');
menuRightStoreBtn.setAttribute('id', "menu-right-store-btn");
menuRightOptions.appendChild(menuRightStoreBtn);
menuRightStoreBtn.innerHTML = "STORE"
menuRightStoreBtn.addEventListener('click', openStore);

function openStore() {
    divStore.style.display = "flex";
}



const menuRightDonationBtn = document.createElement('button');
menuRightDonationBtn.setAttribute('id', "menu-right-donation-btn");
menuRightOptions.appendChild(menuRightDonationBtn);
menuRightDonationBtn.innerHTML = "DONATION"
menuRightDonationBtn.addEventListener('click', openDonation);

function openDonation() {
    // divDonation.style.display = "flex";
}

// PLAYER INFOS PLAYER INFOS //
// PLAYER INFOS PLAYER INFOS //
const playerInfosDiv = document.createElement('div');
playerInfosDiv.setAttribute("id", "player-infos-div");
menuRight.appendChild(playerInfosDiv);

// HEADER HEADER HEADER HEADER //
// HEADER HEADER HEADER HEADER //
const playerInfosHeader = document.createElement('div');
playerInfosHeader.setAttribute("id", "player-infos-header");
playerInfosDiv.appendChild(playerInfosHeader);

const playerInfosMinBtn = document.createElement('div');
playerInfosMinBtn.setAttribute("id", "player-infos-min-btn");
playerInfosHeader.appendChild(playerInfosMinBtn);

playerInfosMinBtn.addEventListener('click', minInfos);

let infosMin = false;
function minInfos() {
    if (!infosMin) {
        playerInfosDiv.style.height = "140px";
        infosMin = true;
    }else {
        playerInfosDiv.style.height = "340px"; 
        infosMin = false; 
    }
}

const playerInfosMinIcon = document.createElement('p');
playerInfosMinIcon.setAttribute("id", "player-infos-min-icon");
playerInfosMinBtn.appendChild(playerInfosMinIcon);
playerInfosMinIcon.innerHTML = "-"

const playerInfosCloseBtn = document.createElement('div');
playerInfosCloseBtn.setAttribute("id", "player-infos-close-btn");
playerInfosHeader.appendChild(playerInfosCloseBtn);

const playerInfosCloseIcon = document.createElement('p');
playerInfosCloseIcon.setAttribute("id", "player-infos-close-icon");
playerInfosCloseBtn.appendChild(playerInfosCloseIcon);
playerInfosCloseIcon.innerHTML = "x"

// INFOS INFOS INFOS INFOS //
// INFOS INFOS INFOS INFOS //
const playerInfosContent = document.createElement('div');
playerInfosContent.setAttribute("id", "player-infos-content");
playerInfosDiv.appendChild(playerInfosContent);

const playerInfosH1 = document.createElement('h1');
playerInfosH1.setAttribute("id", "player-infos-h1");
playerInfosContent.appendChild(playerInfosH1);
playerInfosH1.innerHTML = "Player Progress";

// EXP EXP EXP EXP  //
// EXP EXP EXP EXP  //
const infoExperience = document.createElement('div');
infoExperience.setAttribute('class', 'info-classes');
infoExperience.setAttribute('id', 'info-experience');
playerInfosContent.appendChild(infoExperience);

const infoExperienceUp = document.createElement('div');
infoExperienceUp.setAttribute('id', 'info-experience-up');
infoExperience.appendChild(infoExperienceUp);

const infoExperienceLevel = document.createElement('p');
infoExperienceLevel.setAttribute('id', 'info-experience-level');
infoExperienceUp.appendChild(infoExperienceLevel);
infoExperienceLevel.innerHTML = "EXP"

const infoExperienceCount = document.createElement('p')
infoExperienceCount.setAttribute("id", "info-experience-count");
infoExperienceUp.appendChild(infoExperienceCount);
infoExperienceCount.innerHTML = "0";

const infoExperienceDown = document.createElement('div');
infoExperienceDown.setAttribute('id', 'info-experience-down');
infoExperience.appendChild(infoExperienceDown);

const infoExperienceTotalBar = document.createElement('div');
infoExperienceTotalBar.setAttribute('id', 'info-experience-total-bar');
infoExperienceDown.appendChild(infoExperienceTotalBar);

const  infoExperienceProgressBar= document.createElement('div');
infoExperienceProgressBar.setAttribute('id', 'info-experience-progress-bar');
infoExperienceTotalBar.appendChild(infoExperienceProgressBar);

// LEVEL LEVEL LEVEL LEVEL  //
// LEVEL LEVEL LEVEL LEVEL  //
const infoLevel = document.createElement('div');
infoLevel.setAttribute('class', 'info-classes');
infoLevel.setAttribute('id', 'info-level');
playerInfosContent.appendChild(infoLevel);

const infoLevelUp = document.createElement('div');
infoLevelUp.setAttribute('id', 'info-level-up');
infoLevel.appendChild(infoLevelUp);

const infoLevelLevel = document.createElement('p');
infoLevelLevel.setAttribute('id', 'info-level-level');
infoLevelUp.appendChild(infoLevelLevel);
infoLevelLevel.innerHTML = "LEVEL"


const infoLevelCount = document.createElement('p')
infoLevelCount.setAttribute("id", "info-Level-count");
infoLevelUp.appendChild(infoLevelCount);
infoLevelCount.innerHTML = "1";

const infoLevelDown = document.createElement('div');
infoLevelDown.setAttribute('id', 'info-level-down');
infoLevel.appendChild(infoLevelDown);

const infoLevelTotalBar = document.createElement('div');
infoLevelTotalBar.setAttribute('id', 'info-level-total-bar');
infoLevelDown.appendChild(infoLevelTotalBar);

const infoLevelProgressBar= document.createElement('div');
infoLevelProgressBar.setAttribute('id', 'info-level-progress-bar');
infoLevelTotalBar.appendChild(infoLevelProgressBar);


// ATTACK ATTACK ATTACK ATTACK  //
// ATTACK ATTACK ATTACK ATTACK  //
const infoAttack = document.createElement('div');
infoAttack.setAttribute('class', 'info-classes');
infoAttack.setAttribute('id', 'info-attack');
playerInfosContent.appendChild(infoAttack);

const infoAttackUp = document.createElement('div');
infoAttackUp.setAttribute('id', 'info-attack-up');
infoAttack.appendChild(infoAttackUp);

const infoAttackLevel = document.createElement('p');
infoAttackLevel.setAttribute('id', 'info-attack-level');
infoAttackUp.appendChild(infoAttackLevel);
infoAttackLevel.innerHTML = "ATK LEVEL"


const infoAttackCount = document.createElement('p')
infoAttackCount.setAttribute("id", "info-attack-count");
infoAttackUp.appendChild(infoAttackCount);
infoAttackCount.innerHTML = "1";

const infoAttackDown = document.createElement('div');
infoAttackDown.setAttribute('id', 'info-attack-down');
infoAttack.appendChild(infoAttackDown);

const infoAttackTotalBar = document.createElement('div');
infoAttackTotalBar.setAttribute('id', 'info-attack-total-bar');
infoAttackDown.appendChild(infoAttackTotalBar);

const infoAttackProgressBar= document.createElement('div');
infoAttackProgressBar.setAttribute('id', 'info-attack-progress-bar');
infoAttackTotalBar.appendChild(infoAttackProgressBar);

// SPEED SPEED SPEED SPEED  //
// SPEED SPEED SPEED SPEED  //
const infoSpeed = document.createElement('div');
infoSpeed.setAttribute('class', 'info-classes');
infoSpeed.setAttribute('id', 'info-speed');
playerInfosContent.appendChild(infoSpeed);

const infoSpeedUp = document.createElement('div');
infoSpeedUp.setAttribute('id', 'info-speed-up');
infoSpeed.appendChild(infoSpeedUp);

const infoSpeedLevel = document.createElement('p');
infoSpeedLevel.setAttribute('id', 'info-speed-level');
infoSpeedUp.appendChild(infoSpeedLevel);
infoSpeedLevel.innerHTML = "SPEED LEVEL"


const infoSpeedCount = document.createElement('p')
infoSpeedCount.setAttribute("id", "info-speed-count");
infoSpeedUp.appendChild(infoSpeedCount);
infoSpeedCount.innerHTML = "1";

const infoSpeedDown = document.createElement('div');
infoSpeedDown.setAttribute('id', 'info-speed-down');
infoSpeed.appendChild(infoSpeedDown);

const infoSpeedTotalBar = document.createElement('div');
infoSpeedTotalBar.setAttribute('id', 'info-speed-total-bar');
infoSpeedDown.appendChild(infoSpeedTotalBar);

const infoSpeedProgressBar= document.createElement('div');
infoSpeedProgressBar.setAttribute('id', 'info-speed-progress-bar');
infoSpeedTotalBar.appendChild(infoSpeedProgressBar);

// FIRE FIRE FIRE FIRE  //
// FIRE FIRE FIRE FIRE  //
const infoFire = document.createElement('div');
infoFire.setAttribute('class', 'info-classes');
infoFire.setAttribute('id', 'info-fire');
playerInfosContent.appendChild(infoFire);

const infoFireUp = document.createElement('div');
infoFireUp.setAttribute('id', 'info-fire-up');
infoFire.appendChild(infoFireUp);

const infoFireLevel = document.createElement('p');
infoFireLevel.setAttribute('id', 'info-fire-level');
infoFireUp.appendChild(infoFireLevel);
infoFireLevel.innerHTML = "FIRE LEVEL"


const infoFireCount = document.createElement('p')
infoFireCount.setAttribute("id", "info-fire-count");
infoFireUp.appendChild(infoFireCount);
infoFireCount.innerHTML = "1";

const infoFireDown = document.createElement('div');
infoFireDown.setAttribute('id', 'info-fire-down');
infoFire.appendChild(infoFireDown);

const infoFireTotalBar = document.createElement('div');
infoFireTotalBar.setAttribute('id', 'info-fire-total-bar');
infoFireDown.appendChild(infoFireTotalBar);

const infoFireProgressBar= document.createElement('div');
infoFireProgressBar.setAttribute('id', 'info-fire-progress-bar');
infoFireTotalBar.appendChild(infoFireProgressBar);

// ICE ICE ICE ICE  //
// ICE ICE ICE ICE  //
const infoIce = document.createElement('div');
infoIce.setAttribute('class', 'info-classes');
infoIce.setAttribute('id', 'info-ice');
playerInfosContent.appendChild(infoIce);

const infoIceUp = document.createElement('div');
infoIceUp.setAttribute('id', 'info-ice-up');
infoIce.appendChild(infoIceUp);

const infoIceLevel = document.createElement('p');
infoIceLevel.setAttribute('id', 'info-ice-level');
infoIceUp.appendChild(infoIceLevel);
infoIceLevel.innerHTML = "ICE LEVEL"


const infoIceCount = document.createElement('p')
infoIceCount.setAttribute("id", "info-ice-count");
infoIceUp.appendChild(infoIceCount);
infoIceCount.innerHTML = "1";

const infoIceDown = document.createElement('div');
infoIceDown.setAttribute('id', 'info-ice-down');
infoIce.appendChild(infoIceDown);

const infoIceTotalBar = document.createElement('div');
infoIceTotalBar.setAttribute('id', 'info-ice-total-bar');
infoIceDown.appendChild(infoIceTotalBar);

const infoIceProgressBar= document.createElement('div');
infoIceProgressBar.setAttribute('id', 'info-ice-progress-bar');
infoIceTotalBar.appendChild(infoIceProgressBar);

// ENERGY ENERGY ENERGY ENERGY  //
// ENERGY ENERGY ENERGY ENERGY  //
const infoEnergy = document.createElement('div');
infoEnergy.setAttribute('class', 'info-classes');
infoEnergy.setAttribute('id', 'info-energy');
playerInfosContent.appendChild(infoEnergy);

const infoEnergyUp = document.createElement('div');
infoEnergyUp.setAttribute('id', 'info-energy-up');
infoEnergy.appendChild(infoEnergyUp);

const infoEnergyLevel = document.createElement('p');
infoEnergyLevel.setAttribute('id', 'info-energy-level');
infoEnergyUp.appendChild(infoEnergyLevel);
infoEnergyLevel.innerHTML = "ENERGY LEVEL"


const infoEnergyCount = document.createElement('p')
infoEnergyCount.setAttribute("id", "info-energy-count");
infoEnergyUp.appendChild(infoEnergyCount);
infoEnergyCount.innerHTML = "1";

const infoEnergyDown = document.createElement('div');
infoEnergyDown.setAttribute('id', 'info-energy-down');
infoEnergy.appendChild(infoEnergyDown);

const infoEnergyTotalBar = document.createElement('div');
infoEnergyTotalBar.setAttribute('id', 'info-energy-total-bar');
infoEnergyDown.appendChild(infoEnergyTotalBar);

const infoEnergyProgressBar= document.createElement('div');
infoEnergyProgressBar.setAttribute('id', 'info-energy-progress-bar');
infoEnergyTotalBar.appendChild(infoEnergyProgressBar);

// TERRA TERRA TERRA TERRA  //
// TERRA TERRA TERRA TERRA  //
const infoTerra = document.createElement('div');
infoTerra.setAttribute('class', 'info-classes');
infoTerra.setAttribute('id', 'info-terra');
playerInfosContent.appendChild(infoTerra);

const infoTerraUp = document.createElement('div');
infoTerraUp.setAttribute('id', 'info-terra-up');
infoTerra.appendChild(infoTerraUp);

const infoTerraLevel = document.createElement('p');
infoTerraLevel.setAttribute('id', 'info-terra-level');
infoTerraUp.appendChild(infoTerraLevel);
infoTerraLevel.innerHTML = "TERRA LEVEL"


const infoTerraCount = document.createElement('p')
infoTerraCount.setAttribute("id", "info-terra-count");
infoTerraUp.appendChild(infoTerraCount);
infoTerraCount.innerHTML = "1";

const infoTerraDown = document.createElement('div');
infoTerraDown.setAttribute('id', 'info-terra-down');
infoTerra.appendChild(infoTerraDown);

const infoTerraTotalBar = document.createElement('div');
infoTerraTotalBar.setAttribute('id', 'info-terra-total-bar');
infoTerraDown.appendChild(infoTerraTotalBar);

const infoTerraProgressBar= document.createElement('div');
infoTerraProgressBar.setAttribute('id', 'info-terra-progress-bar');
infoTerraTotalBar.appendChild(infoTerraProgressBar);

// DEATH DEATH DEATH DEATH  //
// DEATH DEATH DEATH DEATH  //
const infoDeath = document.createElement('div');
infoDeath.setAttribute('class', 'info-classes');
infoDeath.setAttribute('id', 'info-death');
playerInfosContent.appendChild(infoDeath);

const infoDeathUp = document.createElement('div');
infoDeathUp.setAttribute('id', 'info-death-up');
infoDeath.appendChild(infoDeathUp);

const infoDeathLevel = document.createElement('p');
infoDeathLevel.setAttribute('id', 'info-death-level');
infoDeathUp.appendChild(infoDeathLevel);
infoDeathLevel.innerHTML = "DEATH LEVEL"


const infoDeathCount = document.createElement('p')
infoDeathCount.setAttribute("id", "info-death-count");
infoDeathUp.appendChild(infoDeathCount);
infoDeathCount.innerHTML = "1";

const infoDeathDown = document.createElement('div');
infoDeathDown.setAttribute('id', 'info-death-down');
infoDeath.appendChild(infoDeathDown);

const infoDeathTotalBar = document.createElement('div');
infoDeathTotalBar.setAttribute('id', 'info-death-total-bar');
infoDeathDown.appendChild(infoDeathTotalBar);

const infoDeathProgressBar= document.createElement('div');
infoDeathProgressBar.setAttribute('id', 'info-death-progress-bar');
infoDeathTotalBar.appendChild(infoDeathProgressBar);

// HOLY HOLY HOLY HOLY  //
// HOLY HOLY HOLY HOLY  //
const infoHoly = document.createElement('div');
infoHoly.setAttribute('class', 'info-classes');
infoHoly.setAttribute('id', 'info-holy');
playerInfosContent.appendChild(infoHoly);

const infoHolyUp = document.createElement('div');
infoHolyUp.setAttribute('id', 'info-holy-up');
infoHoly.appendChild(infoHolyUp);

const infoHolyLevel = document.createElement('p');
infoHolyLevel.setAttribute('id', 'info-holy-level');
infoHolyUp.appendChild(infoHolyLevel);
infoHolyLevel.innerHTML = "HOLY LEVEL"


const infoHolyCount = document.createElement('p')
infoHolyCount.setAttribute("id", "info-holy-count");
infoHolyUp.appendChild(infoHolyCount);
infoHolyCount.innerHTML = "1";

const infoHolyDown = document.createElement('div');
infoHolyDown.setAttribute('id', 'info-holy-down');
infoHoly.appendChild(infoHolyDown);

const infoHolyTotalBar = document.createElement('div');
infoHolyTotalBar.setAttribute('id', 'info-holy-total-bar');
infoHolyDown.appendChild(infoHolyTotalBar);

const infoHolyProgressBar= document.createElement('div');
infoHolyProgressBar.setAttribute('id', 'info-holy-progress-bar');
infoHolyTotalBar.appendChild(infoHolyProgressBar);

// DISTANCE DISTANCE DISTANCE DISTANCE  //
// DISTANCE DISTANCE DISTANCE DISTANCE  //
const infoDistance = document.createElement('div');
infoDistance.setAttribute('class', 'info-classes');
infoDistance.setAttribute('id', 'info-distance');
playerInfosContent.appendChild(infoDistance);

const infoDistanceUp = document.createElement('div');
infoDistanceUp.setAttribute('id', 'info-distance-up');
infoDistance.appendChild(infoDistanceUp);

const infoDistanceLevel = document.createElement('p');
infoDistanceLevel.setAttribute('id', 'info-distance-level');
infoDistanceUp.appendChild(infoDistanceLevel);
infoDistanceLevel.innerHTML = "DISTANCE LEVEL"


const infoDistanceCount = document.createElement('p')
infoDistanceCount.setAttribute("id", "info-distance-count");
infoDistanceUp.appendChild(infoDistanceCount);
infoDistanceCount.innerHTML = "1";

const infoDistanceDown = document.createElement('div');
infoDistanceDown.setAttribute('id', 'info-distance-down');
infoDistance.appendChild(infoDistanceDown);

const infoDistanceTotalBar = document.createElement('div');
infoDistanceTotalBar.setAttribute('id', 'info-distance-total-bar');
infoDistanceDown.appendChild(infoDistanceTotalBar);

const infoDistanceProgressBar= document.createElement('div');
infoDistanceProgressBar.setAttribute('id', 'info-distance-progress-bar');
infoDistanceTotalBar.appendChild(infoDistanceProgressBar);


// DEFENSE DEFENSE DEFENSE DEFENSE  //
// DEFENSE DEFENSE DEFENSE DEFENSE  //
const infoDefense = document.createElement('div');
infoDefense.setAttribute('class', 'info-classes');
infoDefense.setAttribute('id', 'info-defense');
playerInfosContent.appendChild(infoDefense);

const infoDefenseUp = document.createElement('div');
infoDefenseUp.setAttribute('id', 'info-defense-up');
infoDefense.appendChild(infoDefenseUp);

const infoDefenseLevel = document.createElement('p');
infoDefenseLevel.setAttribute('id', 'info-defense-level');
infoDefenseUp.appendChild(infoDefenseLevel);
infoDefenseLevel.innerHTML = "DEFENSE LEVEL"


const infoDefenseCount = document.createElement('p')
infoDefenseCount.setAttribute("id", "info-defense-count");
infoDefenseUp.appendChild(infoDefenseCount);
infoDefenseCount.innerHTML = "1";

const infoDefenseDown = document.createElement('div');
infoDefenseDown.setAttribute('id', 'info-defense-down');
infoDefense.appendChild(infoDefenseDown);

const infoDefenseTotalBar = document.createElement('div');
infoDefenseTotalBar.setAttribute('id', 'info-defense-total-bar');
infoDefenseDown.appendChild(infoDefenseTotalBar);

const infoDefenseProgressBar= document.createElement('div');
infoDefenseProgressBar.setAttribute('id', 'info-defense-progress-bar');
infoDefenseTotalBar.appendChild(infoDefenseProgressBar);