import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const playerInit = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
let savedTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (savedTime) {
  playerInit.setCurrentTime(savedTime);
}

playerInit.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  }, 1000)
);
