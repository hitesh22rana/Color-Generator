let red = document.getElementById('Red');
let green = document.getElementById("Green");
let blue = document.getElementById("Blue");
let bodybg = document.getElementById("body-bg");


red.oninput = () => {
    if(red.value > 255) {
        red.value = Math.floor(red.value / 10);
        red.innerHTML = red.value;
    }
    if(green.value == "") {
        green.value = 0
        green.innerHTML = green.value;
    }

    if(blue.value == "") {
        blue.value = 0
        blue.innerHTML = blue.value;
    }

    bodybg.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
};

green.oninput = () => {
    if(green.value > 255) {
        green.value = Math.floor(green.value / 10);
        green.innerHTML = green.value;
    }
    if(red.value == "") {
        red.value = 0
        red.innerHTML = red.value;
    }

    if(blue.value == "") {
        blue.value = 0
        blue.innerHTML = blue.value;
    }

    bodybg.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
};

blue.oninput = () => {
    if(blue.value > 255) {
        blue.value = Math.floor(blue.value / 10);
        blue.innerHTML = blue.value;
    }
    if(red.value == "") {
        red.value = 0
        red.innerHTML = red.value;
    }

    if(green.value == "") {
        green.value = 0
        green.innerHTML = green.value;
    }

    bodybg.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
}