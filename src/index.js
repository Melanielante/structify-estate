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

    const BASE_URL = "http://localhost:3000/houses"

})