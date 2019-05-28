            // tạo bảng 
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

            var styleAttribute2 = document.createAttribute("style");
            styleAttribute2.value = "margin:auto";
            table.setAttributeNode(styleAttribute2);

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
            }
            }