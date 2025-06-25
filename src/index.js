//loading DOM Content

document.addEventListener("DOMContentLoaded", () => {
    const housesContainer = document.getElementById("houses-container");
    const houseFilter = document.getElementById("house-filter");
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

    //creating house cards

    function createHouseCard(house) {
        const card = document.createElement("div");
        card.classList.add("house-card");

        //cards content
        card.innerHTML = `
           <img src = "${house.image}" alt = "${house.name}" />
           <div class = "info">
              <h3>${house.name}</h3>
              <p>Type: ${house.type}</p>
              <p>${house.description.substring(0, 80)}...</p>
              <button class = "details-btn">View Deetails</button>
              <button class = "favourite-btn">Save</button>
            </div>

        `;
        // details viewing
        card.querySelector(".details-btn").addEventListener("click", () => {
            showHouseDetails(house);
        });


        // saving to favourites
        createHouseCard.querySelector(".favourite-btn").addEventListener("click", () => {
            if (!favouriteHouses.includes(house)) {
                favouriteHouses.push(house);
                alert("Added to ffavourites!");
            }
            else {
                alert("Already in favourites.");
            }
        });

        return card;
    }

    //filtering hhouses by types
    houseFilter.addEventListener("change", (event) => {
        const selectedType = event.target.value;

        if (selectedType === "all") {
            renderHouses(allHouses);
        }
        else {
            const filtered = allHouses.filter(
                (house) => house.type.toLowerCase() === selectedType.toLowerCase()
            );

            renderHouses(filtered);
        }
    });

    //show all houses
    allHousesBtn.addEventListener("click", () => {
        favouritesSection.classList.add("hidden");
        housesContainer.classList.remove("hidden");
        renderHouses(allHouses);
    });

})