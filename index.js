
let img_data = JSON.parse(localStorage.getItem('images'));

console.log(img_data);

let cont = document.querySelector('.container');

let i = 0;

let x;

let img = document.createElement('img');

let slideShow = () => {

    x = setInterval(() => {
        if (i === img_data.length) {
            i = 0;
        }
        cont.innerHTML = '';
        img.src = img_data[i].image_url;
        cont.append(img);
        i++;
    }, 2000);
};

let showPrevious = () => {

    clearInterval(x);

    if (i === 0) {
        i = img_data.length - 1;
    }
    cont.innerHTML = '';
    img.src = img_data[i].image_url;
    i--;
    cont.append(img);

};

let showNext = () => {
    clearInterval(x);
    if (i === img_data.length) {
        i = 0;
    }
    cont.innerHTML = '';
    img.src = img_data[i].image_url;
    i++;
    cont.append(img);
};

const start = document.querySelector('.start');

function startTheSlide() {

    start.removeEventListener('click', startTheSlide);

    start.addEventListener('click', stopTheSlide);

    clearInterval(x);

};

startTheSlide();

function stopTheSlide() {

    start.removeEventListener('click', stopTheSlide);

    start.addEventListener('click', startTheSlide);

    slideShow()
};

document.querySelector('.lft_btn').addEventListener('click', showPrevious);

document.querySelector('.rgt_btn').addEventListener('click', showNext);


