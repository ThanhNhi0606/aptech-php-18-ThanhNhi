// var a = document;
// function create(nameofElement) {
// return document.createElement (nameOfElement);
//}
// var table = create('table');
// var thead = create('thead');

var data = {
    "users": [{
            "id": 10,
            "name": "Ethyl Medhurst",
            "email": "noah.hand@example.org",
            "password": "$2y$10$GLfHbVK./jG2WD8QQ0.ZDOqqeJe7rz.hl827sKoHOhd9LLoXfyHHG",
            "created_at": "2019-03-26 04:55:04",
            "updated_at": "2019-03-26 04:55:04"
        },
        {
            "id": 9,
            "name": "Eula Lebsack PhD",
            "email": "schroeder.sylvan@example.org",
            "password": "$2y$10$.vzCIUVX34GibJ3.ObFqYu5Bd.Ig8PqF3adoLHza78eq510mfhy9G",
            "created_at": "2019-03-26 04:55:03",
            "updated_at": "2019-03-26 04:55:03"
        },
        {
            "id": 8,
            "name": "Mrs. Kathlyn Parisian DDS",
            "email": "ggrimes@example.net",
            "password": "$2y$10$N.DpYW9Sd0c8p3rSVjO0MeZ5e7idfPeKPZyOO77m8vNSEOnMws5O2",
            "created_at": "2019-03-26 04:55:03",
            "updated_at": "2019-03-26 04:55:03"
        }
    ]
};
// console.log(data);

// var arrayUser = data["users"];
// console.log(arrayUser);
// for (var a = 0; a < arrayUser; a++) {
//     console.log(a);
//     var heading = document.createElement('h1');
//     var contentOfHeading = document.createTextNode(arrayUser[a]);
//     heading.appendChild(contentOfHeading);
//     document.tbody.appendChild(heading);
// }


function Create(nameOfElement) {
    return document.createElement(nameOfElement);
}
var table = Create("table");
var thead = Create("thead");
var tbody = Create("tbody");
//them thead và tbody và thẻ table
table.appendChild(thead);
table.appendChild(tbody);

var styleAttribute1 = document.createAttribute("style");
styleAttribute1.value = "color: gray";
thead.setAttributeNode(styleAttribute1);

// xây dựng thead : 
var trow = Create("tr");
thead.appendChild(trow);
var thead = ["Id", "Name", "Email"];
for (var i = 0; i < thead.length; i++) {
    var th = Create("th");
    var text = document.createTextNode(thead[i]);
    th.appendChild(text);
    trow.appendChild(th);
};

// xây dựng tbody :
var trowBody1 = Create("tr");
tbody.appendChild(trowBody1);

var array2 = [data.users[0].id, data.users[0].name, data.users[0].email];
for (var i = 0; i < array2.length; i++) {
    var td = Create("td");
    var text = document.createTextNode(array2[i]);
    td.appendChild(text);
    trowBody1.appendChild(td);
};
for (var i = 0; i < data.users.length; i++) {
    var trowBody = Create("tr");
    tbody.appendChild(trowBody);
    var array = [data.users[i].id, data.users[i].name, data.users[i].email];
    for (var j = 0; j < array.length; j++) {
        var td = Create("td");
        var text = document.createTextNode(array[j]);
        td.appendChild(text);
        trowBody.appendChild(td);
    }
}

document.body.appendChild(table);