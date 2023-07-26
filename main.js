let input = document.querySelector("input");
let button = document.querySelector(".create");
let form = document.querySelector("form")
let image = document.querySelector("img")
let size = document.querySelector(".size");
let button1 = document.querySelector(".download")

const getqr = async (e) => {
    e.preventDefault();
    const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`
    );
    image.setAttribute("src", response.url);

    let src = image.src

    const data = await fetch(src);
    console.log(data)
    const img = await data.blob();
    console.log(img)
    const href = URL.createObjectURL(img);
    button1.href = href
    button1.download="Qr.jpeg"
};

button.addEventListener('click', getqr)

let contain = document.querySelector(".main");
let dark = document.querySelector(".mode");
let mark = document.querySelector(".marku")

function darklight(){
    contain.classList.toggle("bg-dark")
    mark.classList.toggle("text-light")
}

dark.addEventListener('click',darklight)





