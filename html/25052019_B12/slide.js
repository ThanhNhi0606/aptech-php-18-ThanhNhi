// $(document).ready(function () {
//     $("#hinh-1").click(function () {
//         $("#hinh-1").fadeOut(3000);
//         $("#hinh-2").fadeIn(2000);
//         console.log("ha noi ne");
//     })
// })

// $(document).ready(function () {
//     $("#hinh-2").click(function () {
//         $("#hinh-2").fadeOut(2000);
//         $("#hinh-3").fadeIn(2000);
//         console.log("sai gon ne");
//     })
// })

// $(document).ready(function () {
//     $("#hinh-3").click(function () {
//         $("#hinh-3").fadeOut(2000);
//         $("#hinh-1").fadeIn(2000);
//         console.log("da nang ne");
//     })
// })

$(document).ready(function () {
    $("#hinh-1").click(function () {
        $("#hinh-1").fadeOut(2000);
        $("#hinh-2").fadeIn(3000);
        console.log("ha noi ne");
        $("#hinh-2").fadeOut(4000);
        console.log("an ha noi di ne");
        $("#hinh-3").fadeIn(8000);
        console.log("sai gon ne");
    })
})