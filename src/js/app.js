/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Vaibhavkumar Patel>
 *      Student ID: <139768204>
 *      Date:       <21/04/2021>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
var li = "";
Object.values(categories).forEach((value) => {
  li = li + '<li class="navLi"><button id="' + value.id + '">' + value.name + "</button></li>";
});
var nav = '<ul class="navUl">' + li + "</ul>";
document.getElementById("menu").innerHTML = nav;

//var //row = "";
console.log(categories[0].id);
document.getElementById("selected-category").innerHTML = categories[0].name;
//row = "";
Object.values(products).forEach((val) => {
  var length = val.categories.length;
  for (var i = 0; i < length; i++) {
    if (categories[0].id === val.categories[i]) {
      if (!val.discontinued) {
        const column = document.createElement("div");
        column.classList.add("column");
        const card = document.createElement("div");
        card.classList.add("card");
        const productImage = document.createElement("img");
        productImage.src = val.imageUrl;
        productImage.classList.add("card-image");
        const head = document.createElement("h3");
        var h3 = document.createTextNode(val.title);
        head.appendChild(h3);
        const per = document.createElement("p");
        var p = document.createTextNode(val.description);
        per.appendChild(p);
        const price = document.createElement("span");
        var pric = document.createTextNode(
          new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(val.price) +
            " CAD"
        );
        price.appendChild(pric);
        card.appendChild(productImage);
        card.appendChild(head);
        card.appendChild(per);
        card.appendChild(price);
        column.appendChild(card);
        document.getElementById("category-products").appendChild(column);

        // row =
        //     row +
        //     '<tr id="tr' +
        //     val.id +
        //     '"><td>' +
        //     val.title +
        //     "</td><td>" +
        //     val.description +
        //     "</td><td>" +
        //     new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(val.price) +
        //     "</td></tr>";
      }
    }
  }
});
// document.getElementById("category-products").innerHTML = row;
Object.values(categories).forEach((value) => {
  document.getElementById(value.id).onclick = function createProductCard() {
    //row = "";
    document.getElementById("category-products").innerHTML = "";
    document.getElementById("selected-category").innerHTML = value.name;
    Object.values(products).forEach((val) => {
      var length = val.categories.length;
      for (var i = 0; i < length; i++) {
        if (value.id === val.categories[i]) {
          console.log(value.id);
          console.log(val.categories[i]);
          if (!val.discontinued) {
            // row =
            //     row +
            //     '<tr id="tr' +
            //     val.id +
            //     '"><td>' +
            //     val.title +
            //     "</td><td>" +
            //     val.description +
            //     "</td><td>" +
            //     new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
            //         val.price
            //     ) +
            //     "</td></tr>";
            const column = document.createElement("div");
            column.classList.add("column");
            const card = document.createElement("div");
            card.classList.add("card");
            const productImage = document.createElement("img");
            productImage.src = val.imageUrl;
            productImage.classList.add("card-image");
            const head = document.createElement("h3");
            var h3 = document.createTextNode(val.title);
            head.appendChild(h3);
            const per = document.createElement("p");
            var p = document.createTextNode(val.description);
            per.appendChild(p);
            const price = document.createElement("span");
            var pric = document.createTextNode(
              new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
                val.price
              ) + " CAD"
            );
            price.appendChild(pric);
            card.appendChild(productImage);
            card.appendChild(head);
            card.appendChild(per);
            card.appendChild(price);
            column.appendChild(card);
            document.getElementById("category-products").appendChild(column);
          }
        }
      }
    });
    // document.getElementById("category-products").innerHTML = row;
    // if (document.getElementById("category-products").innerHTML !== null) {
    //     Object.values(products).forEach(() => {
    //         var table = document.getElementById("category-products");
    //         var rows = table.getElementsByTagName("tr");
    //         for (var i = 0; i < rows.length; i++) {
    //             var currentRow = table.rows[i];
    //             var createClickHandler = function(row) {
    //                 return function() {
    //                     var cell = row.getElementsByTagName("td")[0];
    //                     var id = cell.innerHTML;
    //                     const data = Object.values(products).find((element) => element.title === id);
    //                     console.log(data);
    //                 };
    //             };
    //             currentRow.onclick = createClickHandler(currentRow);
    //         }
    //     });
    // }
  };
});

// if (document.getElementById("category-products").innerHTML !== null) {
//     var table = document.getElementById("category-products");
//     var rows = table.getElementsByTagName("tr");
//     for (var i = 0; i < rows.length; i++) {
//         var currentRow = table.rows[i];
//         var createClickHandler = function(row) {
//             return function() {
//                 var cell = row.getElementsByTagName("td")[0];
//                 var id = cell.innerHTML;
//                 const data = Object.values(products).find((element) => element.title === id);
//                 console.log(data);
//             };
//         };
//         currentRow.onclick = createClickHandler(currentRow);
//     }
// }

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
