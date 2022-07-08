const divStore = document.getElementById('store-div');
const store = document.getElementById('store');
const storeHeader = document.getElementById('store-header');


const storeHeaderCloseBtn = document.createElement('div');
storeHeaderCloseBtn.setAttribute('id', "store-header-close-btn");
storeHeader.appendChild(storeHeaderCloseBtn);

const storeHeaderCloseBtnContent = document.createElement('div');
storeHeaderCloseBtnContent.setAttribute('id', "store-header-close-btn-content");
storeHeaderCloseBtn.appendChild(storeHeaderCloseBtnContent);
storeHeaderCloseBtnContent.innerHTML = "x";


storeHeaderCloseBtn.addEventListener('click', closeStore);


function closeStore() {
divStore.style.display = "none";    
}
