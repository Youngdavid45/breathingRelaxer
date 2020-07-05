const change = document.getElementById("change");
const color = document.getElementById("color");
const cont = document.getElementById("cont");
const body = document.body;
const pix = document.getElementById("pix");

change.addEventListener("click", colorChanger);
change.addEventListener("click", clickMe);

function clickMe(){
    pix.style.display = "none";
}

function colorChanger(){
    
    const col1 = colorRGB();
    const col2 = colorRGB();
    const col3 = colorRGB();
    const hexColor1 = ("#" + Math.random().toString(16).slice(2, 8));
    const hexColor2 = ("#" + Math.random().toString(16).slice(2, 8));

    // const colorString =`rgb(${col1}, ${col2}, ${col3})`;
    const colorGradient = `linear-gradient(110deg, ${hexColor1} 50%, ${hexColor2} 50%)`;
    // const colorGradient = `linear-gradient(110deg, #ff6464 60%, #5ac8fa 60%)`;

    // color.innerText = colorString;
    color.innerText = `${hexColor1}, ${hexColor2}`;
    // change.style.background = hexColor1;
    // change.style.border =hexColor2;

    cont.style.background = colorGradient;

    // change.style.color = colorString;
    change.style.color = hexColor2;

    // pix.style.borderColor = colorString;
}

function colorRGB(){
    return Math.floor(Math.random() * 256);
}

// function hexGenerator(){
//     return ("#" + Math.random().toString(16).slice(2, 8));
// }