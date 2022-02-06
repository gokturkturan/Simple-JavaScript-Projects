'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const header = document.querySelector('.headerOfModal');
const info = document.querySelector('.contentOfModal');

const array = [
  "League of Legends, Riot Games tarafından geliştirilen ve yayımlanan video oyunu. 27 Ekim 2009 tarihinde Riot Games'in ilk oyunu olarak 'League of Legends: Clash of Fates' adıyla piyasaya çıkmıştır. MOBA türü strateji oyunudur. Oyun Warcraft III haritası olan Defense of the Ancients örnek alınarak yapılmıştır.",
  'Sea of Thieves, Rare tarafından geliştirilen ve Microsoft Studios tarafından Microsoft Windows ve Xbox One için yayınlanan bir aksiyon-macera video oyunudur.',
  'Counter-Strike: Global Offensive ya da bilinen kısa adıyla CS:GO, Valve ve Hidden Path Entertainment tarafından geliştirilen çevrimiçi birinci şahıs nişancı oyunudur. Counter-Strike serisinin dördüncü oyunudur.',
];

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  modal.classList.remove('hidden'); // we don't use .(dot) because we are not sellecting anything
  overlay.classList.remove('hidden');
}

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', function (event) {
    const btnClicked = event.target;
    header.textContent = btnClicked.textContent;
    info.textContent = array[btnClicked.id - 1];
    openModal();
  });
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
