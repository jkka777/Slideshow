
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

let startTheSlide = () => {
    slideShow();
};

let stopTheSlide = () => {
    clearInterval(x);
};

document.querySelector('.lft_btn').addEventListener('click', showPrevious);

document.querySelector('.rgt_btn').addEventListener('click', showNext);

document.querySelector('.start').addEventListener('click', startTheSlide);

document.querySelector('.stop').addEventListener('click', stopTheSlide);