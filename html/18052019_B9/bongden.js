var imageElement = document.getElementById('image');


function ChuyenTrangThai() {
    if (imageElement.src == "file:///C:/Users/User/Desktop/aptech-php-18-ThanhNhi/html/18052019_B9/pic_bulboff.gif") {
        console.log("Bat Ne");
        imageElement.src = "pic_bulbon.gif";

    } else {
        console.log("Tat Ne");
        imageElement.src = "pic_bulboff.gif";
    }
}