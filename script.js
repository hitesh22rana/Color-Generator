let red = document.getElementById('Red');
let green = document.getElementById("Green");
let blue = document.getElementById("Blue");
let bodybg = document.getElementById("body-bg");


green.oninput = () => {
    if(green.value > 255) {
        green.value = Math.floor(green.value / 10);
        green.innerHTML = green.value;
    }
    if(red.value == "") {
        console.log("hey");
    }

    bodybg.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
};



// red.oninput = () => {
//     if(red.value > 255 || green.value > 255 || blue.value > 255) {
//         bodybg.style.backgroundColor = "white";
//     }

//     else {
//         bodybg.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
//     }
// };
    
// green.oninput = () => {
//     if(red.value > 255 || green.value > 255 || blue.value > 255) {
//         bodybg.style.backgroundColor = "white";
//     }

//     else {
//         bodybg.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
//     }
// };
    
// blue.oninput = () => {
//     if(red.value > 255 || green.value > 255 || blue.value > 255) {
//         bodybg.style.backgroundColor = "white";
//     }

//     else {
//         bodybg.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
//     }
// };


