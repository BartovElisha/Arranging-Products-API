
const shopUrl = 'http://localhost:3002/shop';
const productsUrl = 'http://localhost:3002/products';
const discountUrl = 'http://localhost:3002/discount';

const delayMs = msec => {
    //console.log("Delay started...")
    return new Promise(response => {
        setTimeout(() => response(),msec);
    });
}

async function getDataFromServer() {
    console.log("Shop Name Fetching started...");

    try {
        await delayMs(2000);
        let response = await fetch(shopUrl);
        let data = await response.json();
        
        showShopName(data);
    }
    catch(error) {
        console.log("Error: ",error);
    }
    finally {
        console.log("Done");
    }    

    /////////////////////////////////////////////////
    console.log("Products Fetching started...");
    
    try {
        await delayMs(2000);
        let response = await fetch(productsUrl);  
        let data = await response.json();
        
        showShopProducts(data);
    }
    catch (error) {
        console.log("Error: ",error);
    }
    finally {
        console.log("Done");    
    }
}

async function checkProductDiscount(productName) {
    console.log("Product Name is: ",productName);

    let productData = {
        "productName": productName
    };

    try {
        await delayMs(1000);
        let response = await fetch(discountUrl,{
            method: "POST",
            body: JSON.stringify(productData),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        
        let data = await response.json();
        
        showProductDiscount(data);
        console.log(`Discount of Product ${productName} is: ${data.discountInfo}%`); 
        alert(`Discount of Product ${productName} is: ${data.discountInfo}%`);        
    }
    catch (error) {
        console.log("Error: ",error);
    }
    finally {
        console.log("Done");
    }
}

getDataFromServer();