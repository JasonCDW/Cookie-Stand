let storeArray = [];

let hBody = document.getElementById("body");
let hStoreTitle = document.getElementById("store-title");

let Store1 = {
    location: "Laurel",
    name: "DMV Cookies",
    employees: 12,
    types: "Cookie of the week",
    inventory: 63,
};

let Store2 = {
    location: "Houston",
    name: "Astroworld Cookies",
    employees: 42,
    types: "Astroberry",
    inventory: 155,
};

let Store3 = {
    location: "Los Angeles",
    name: "Calabasas Cookies",
    employees: 74,
    types: "Cookie of the week",
    inventory: 306,
};


storeArray.push(Store1, Store2, Store3);

function displayStoreTitles() {
    for(let i = 0; i < storeArray.length; i++) {
        let hStoreTitle = document.createElement('h2');
        hStoreTitle.setAttribute('class', 'store-title');
        hBody.appendChild(hStoreTitle);
        hStoreTitle.innerHTML = storeArray[i].name;
    }
}

displayStoreTitles();
