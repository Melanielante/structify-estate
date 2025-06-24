//loading DOM Content

document.addEventListener("DOMContentLoaded", () => {
    const housesContainer = document.getElementById("houses-container");
    const hhouseFilter = document.getElementById("house-filter");
    const favouritesBtn = document.getElementById("favourites-btn");
    const allHousesBtn = document.getElementById("all-houses-button");
    const favouritesSection = document.getElementById("favourites-section");
    const favouritesContainer = document.getElementById("favourites-container");
    const detailsSection = document.getElementById("house-details");

    let allHouses = [];
    let favouriteHouses = [];

    const BASE_URL = "http://localhost:3000/houses";

    //fetching houses from json-server

    fetch(BASE_URL)
    .then(response => response.json())
    .then(data  => {
        allHouses = data;
        renderHouses(allHouses);
    });

    //rendering cards to the DOM
    function renderHouses(houseArray) {
        
        housesContainer.innerHTML = ""; //to clear 
        houseArray.forEach(house => {
            const card = createHouseCard(house);
            housesContainer.appendChild(card);
        });
    }

    

})