var danang = document.getElementById("hinh-1");
var hanoi = document.getElementById("hinh-2");
var saigon = document.getElementById("hinh-3");
console.log("hihi");
// setInterval(DoiAnh, 3000);

function DoiAnh() {
    if (danang.style.display == "block") {
        danang.style.display = "none";
        hanoi.style.display = "block";
        saigon.style.display = "none";
        console.log("hà nội nè");
    } else if (hanoi.style.display == "block") {
        danang.style.display = "none";
        saigon.style.display = "block";
        hanoi.style.display = "none";
        console.log("sài gòn nè");
    } else {
        hanoi.style.display = "none";
        danang.style.display = "block";
        saigon.style.display = "none";
        console.log("đà nẵng nè");
    }
    setTimeout(DoiAnh, 2000);
}


setTimeout(DoiAnh, 2000);