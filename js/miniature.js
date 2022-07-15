import { generatePhotos } from './data.js';

const usersPictureElement = document.querySelector('#picture').content.querySelector('.picture');
const usresPhotos = generatePhotos();
const picturesContainerElement = document.querySelector('.pictures');
const usersPictureFragment = document.createDocumentFragment();

usresPhotos.forEach((url, likes, сomment) => {
  const pictureElement = usersPictureElement.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = сomment.length;
  usersPictureFragment.appendChild(pictureElement);
});
picturesContainerElement.appendChild(usersPictureFragment);
