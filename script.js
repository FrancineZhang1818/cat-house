const house = document.querySelector(".cat-house");

house.addEventListener("click", function () {

    if (house.style.color == "pink") {
        house.style.color = "rgba(150, 228, 242, 1)";
    } else {
        house.style.color = "pink";
    }

});