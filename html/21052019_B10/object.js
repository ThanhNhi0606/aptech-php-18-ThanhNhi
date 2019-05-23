var doituongA = {
    name: 'Nhi',
    age: 21,
    "gioi-tinh": 'Female',
    married: false,
    "name-of-dog": [
        'con chó nè', 'con mèo nè'
    ],
};

//console.log(doituongA.name);
//document.getElementById('doituongA').innerHTML = doituongA["name-of-dog"];

//cách 2: tạo mới
var arrayNameOfDog = doituongA['name-of-dog'];
console.log(arrayNameOfDog);
for (var i = 0; i < arrayNameOfDog.length; i++) {
    console.log(i);
    var heading = document.createElement('h1');
    // createElement : tạo một node ( tạo một thẻ html )
    var contentOfHeading = document.createTextNode(arrayNameOfDog[i]);
    // createTextNode : tạo nội dung và gán cho node
    heading.appendChild(contentOfHeading);
    // .appendChild : gắn node vừa được tạo vào trang
    document.body.appendChild(heading);
    // gắn node vào trang html


    // tạo Attribute
    var styleAttribute = document.createAttribute('style');
    styleAttribute.value = "color:gray";
    heading.setAttributeNode(styleAttribute);
}