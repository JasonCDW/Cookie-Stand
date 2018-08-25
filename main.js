let storeArray = [];

let hBody = document.getElementById("body");
let hStoreTitle = document.getElementById("store-title");
let elTable = document.getElementById('store-table');
let elForm = document.getElementById('store-form');

let store = function (nameOfStore, location, employees, openingTime, closingTime, minimumCustomers, maximumCustomers, averageCookiesPerCustomer){
    this.name = nameOfStore
    this.location = location,
    this.employees = employees,
    this.openTime = openingTime,
    this.closeTime = closingTime,
    this.minCustomers = minimumCustomers,
    this.maxCustomers = maximumCustomers,
    this.avgCookies = averageCookiesPerCustomer,
    this.totalCookiesPerDay = 0,
    this.totalCookiesPerHourArray = [],
    this.totalCookiesPerHour = function() {
        return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers) * this.avgCookies;
    };
};

let laCookies = new store("Las Vegas Cookies", "Las Vegas", 23, 6, 17, 12, 24, 5);
let calCookies = new store("Calabasas Cookies", "Calabasas", 76, 6, 17, 20, 84, 4);

//let storeCount = 3;
//for(let i = 0; i < storeCount; i++) {
    //storeArray.push('Store' + i);
//};
storeArray.push(laCookies, calCookies);

// function displayStoreTitles() {
//     for(let i = 0; i < storeArray.length; i++) {
//         let hStoreTitle = document.createElement('h2');
//         hStoreTitle.setAttribute('class', 'store-title');
//         hBody.appendChild(hStoreTitle);
//         hStoreTitle.innerHTML = storeArray[i].name;
//     }
// }

// displayStoreTitles();

// function displayTotalCookies(store) {
//     let elRow = document.createElement('tr');
//     elTable.appendChild(elRow);
//     for(let i = store.openTime; i < store.closeTime; i ++) {
//         let elTableData = document.createElement('td');
//         elRow.appendChild(elTableData);
//         elTableData.innerHTML = store.totalCookiesPerHour();
//     }
// }

// function populateTable() {
//     for(let i = 0; i < storeArray.length; i++) {
//         displayTotalCookies(storeArray[i]);
//     }
// }
// populateTable();


function displayTableHeader() {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elNameHeader= document.createElement('th');
    elRow.appendChild(elNameHeader);
    elNameHeader.innerHTML = 'Name of Store'; 
    for(let i = 6; i < 17; i++) {
        let elTableHeader = document.createElement('th');
        elRow.appendChild(elTableHeader);
        elTableHeader.innerHTML = i + ':00';
    }
    let elTotalHeader = document.createElement('th');
    elRow.appendChild(elTotalHeader);
    elTotalHeader.innerHTML = 'Total';
}

function displayTotalCookies(store) {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elRowHeader = document.createElement('th');
    elRow.appendChild(elRowHeader);
    elRowHeader.innerHTML = store.name;
    // store.prototype.cookiesPerHourArray = [];

    for(let i = store.openTime; i < store.closeTime; i ++) {
        let result = store.totalCookiesPerHour();
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = result;
        store.totalCookiesPerDay += result;
        store.totalCookiesPerHourArray.push(result);
    }
    let elTotalTableData = document.createElement('th');
    elRow.appendChild(elTotalTableData);
    elTotalTableData.innerHTML = store.totalCookiesPerDay;
    console.log(store.name, store.totalCookiesPerDay);
}

function displayFooter() {
    let elFooterRow = document.createElement('tr');
    elTable.appendChild(elFooterRow);
    let elFooterTitle = document.createElement('th');
    elFooterRow.appendChild(elFooterTitle);
    elFooterTitle.innerHTML = "Total";
    let total = 0;
    for (i = 0; i < 11; i++) {
        let totalCookiesPerHour = 0;
        for(let j = 0; j < storeArray.length; j++) {
            totalCookiesPerHour += storeArray[j].totalCookiesPerHourArray[i];
        }
        let elTotalCookiesPerHourFooter = document.createElement('th');
        elTotalCookiesPerHourFooter.setAttribute('class', 'footer');
        elFooterRow.appendChild(elTotalCookiesPerHourFooter);
        elTotalCookiesPerHourFooter.innerHTML = totalCookiesPerHour;
        total += totalCookiesPerHour;
    }
let elTotalCookiesPerDayFooter = document.createElement('th');
elTotalCookiesPerDayFooter.setAttribute('class', 'footer');
elFooterRow.appendChild(elTotalCookiesPerDayFooter);
elTotalCookiesPerDayFooter.innerHTML = total;
};

let storeName = elForm.storeName;
let storeLocation = elForm.storeLocation;
let numEmployees = elForm.numEmployees;
let minimumCust = elForm.minimumCustomers;
let maximumCust = elForm.maximumCustomers;
let averageCookies = elForm.averageCookiesPerCustomer;

function createNewStore(event) {
    event.preventDefault();
    elTable.removeChild(elTable.childNodes[elTable.childNodes.length - 1]);
    let newStore = new store(storeName.value, storeLocation.value, parseInt(numEmployees.value), 6, 17, parseInt(minimumCust.value), parseInt(maximumCust.value), parseInt(averageCookies.value));
    storeArray.push(newStore);
    console.log(newStore);
    displayTotalCookies(newStore);
    displayFooter();
}

elForm.addEventListener('submit', createNewStore);

console.log(elForm.storeName);
console.log(elForm.storeLocation);


function populateTable() {
    displayTableHeader();
    for(let i = 0; i < storeArray.length; i++) {
        displayTotalCookies(storeArray[i]);
    }
    displayFooter();
}

populateTable();

