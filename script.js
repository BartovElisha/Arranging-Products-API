
const shopUrl = 'http://localhost:3002/shop';
const productsUrl = 'http://localhost:3002/products';
const discountUrl = 'http://localhost:3002/discount';

const delayMs = msec => {
    //console.log("Delay started...")
    return new Promise(response => {
        setTimeout(() => response(),msec);
    });
}

async function getShopName() {
    console.log("Fetching started...");

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
}

async function getProducts() {

}


getShopName();
getProducts();