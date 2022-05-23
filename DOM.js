
function showShopName(data) {
    console.log("The Shop Name is: ", data.shopName);

    let mainDiv = document.createElement("div");

    mainDiv.setAttribute("id","main-div");
    mainDiv.setAttribute("class","container");
    document.body.appendChild(mainDiv);

    let shopName = document.createElement("h1");
    
    shopName.setAttribute("class","shop-name");
    shopName.innerText = `${data.shopName}`;
    mainDiv.appendChild(shopName);
}

function showShopProducts(data) {
    data.products.forEach(function(item) {
        console.log("Product Name: ",item.productName);
        console.log("Product Price: ",item.productPrice);
    });

    let tableElement = document.createElement("table");
    tableElement.setAttribute("id","products-table");
    document.body.appendChild(tableElement);

    let tableHeaderRow1Element = document.createElement("tr");
    tableElement.appendChild(tableHeaderRow1Element);

    let tableHeaderCol1Element = document.createElement("th");
    tableHeaderCol1Element.innerText = "Item";
    tableHeaderRow1Element.appendChild(tableHeaderCol1Element);

    let tableHeaderCol2Element = document.createElement("th");
    tableHeaderCol2Element.innerText = "Product Name";
    tableHeaderRow1Element.appendChild(tableHeaderCol2Element);

    let tableHeaderCol3Element = document.createElement("th");
    tableHeaderCol3Element.innerText = "Product Price [$]";
    tableHeaderRow1Element.appendChild(tableHeaderCol3Element);

    let tableHeaderCol4Element = document.createElement("th");
    tableHeaderCol4Element.innerText = "Product Discount [%]";
    tableHeaderRow1Element.appendChild(tableHeaderCol4Element);

    data.products.forEach(function(item,index) {
        let tableDataRowElement = document.createElement("tr");
        tableElement.appendChild(tableDataRowElement);

        let tableDataCol1Element = document.createElement("td");
        tableDataCol1Element.innerText = `${index+1}`;
        tableDataRowElement.appendChild(tableDataCol1Element);

        let tableDataCol2Element = document.createElement("td");
        tableDataCol2Element.innerText = `${item.productName}`;
        tableDataRowElement.appendChild(tableDataCol2Element);

        let tableDataCol3Element = document.createElement("td");
        tableDataCol3Element.innerText = `${item.productPrice}$`;
        tableDataRowElement.appendChild(tableDataCol3Element);

        let tableDataCol4Element = document.createElement("td");
        tableDataCol4Element.innerText = "Press to check Discount";
        tableDataRowElement.appendChild(tableDataCol4Element);
    });
}