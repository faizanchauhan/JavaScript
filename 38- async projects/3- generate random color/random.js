const createColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalId;
const generateRandomColor = function() {
    if (!intervalId) {
        intervalId = setInterval(changeBackgroundColor, 1000);
    }

    function changeBackgroundColor() {
        document.body.style.backgroundColor = createColor();
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', generateRandomColor);

document.getElementById('stop').addEventListener('click', stopChangingColor);