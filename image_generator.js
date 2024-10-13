const pics = [
    { url: 'url("img/gaspar.jpg")', name: 'Gáspár' },
    { url: 'url("img/mickey.webp")', name: 'Mickey.' },
    { url: 'url("img/habib.jpg")', name: 'Habib' },
    { url: 'url("img/elon musk.jpg")', name: 'Elon Musk' },
    { url: 'url("img/bill gates.jpg")', name: 'Bill Gates' },
    { url: 'url("img/gordon ramsay.png")', name: 'Gordon Ramsay' }
];
const pic = document.querySelector('section');

function showImage() {
var a = Math.floor(Math.random() * pics.length);
var img = pics[a].url;
var name = pics[a].name;
pic.style.backgroundImage = img;
imageName.textContent = name;
}

setInterval(showImage, 3000);