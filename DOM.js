
function showShopName(data) {
    console.log("The Shop Name is: ", data.shopName);

    let mainDiv = document.createElement("div");

    mainDiv.setAttribute("id","main-div");
    mainDiv.setAttribute("class","container");
    document.body.appendChild(mainDiv);

    let shopName = document.createElement("p");
    
    shopName.setAttribute("class","shop-name");
    shopName.innerText = `${data.shopName}`;
    mainDiv.appendChild(shopName);
}

function showShopProducts(data) {

}