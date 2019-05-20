var imageElement = document.getElementById('image');
console.log(imageElement.src);

function ChuyenTrangThai() {
    if (imageElement.src.includes("bulboff.gif")) {
        console.log("Bat Ne");
        imageElement.src = "pic_bulbon.gif";
    } else {
        console.log("Tat Ne");
        imageElement.src = "pic_bulboff.gif";
    }
}