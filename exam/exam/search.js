document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.sect_two');
    function filterIcons(natija) {

        const nothingfound = document.getElementById("nothing-alert");
        const nothingcategory = document.querySelector(".main_div_one");
        const nothingcategoryH = document.querySelector(".main_div_two");
        const nothingcategoryT = document.querySelector(".main_div_three");
        let number = 0;
        cards.forEach(function (card) {

            const name = card.querySelector("p").textContent.toLowerCase();

            if (name.includes(natija.toLowerCase())) {
                nothingfound.style.display = "none";
                nothingcategory.style.display = "block";
                nothingcategoryH.style.display = "block";
                nothingcategoryT.style.display = "block";
                nothingcategoryP.style.display = "block";
                card.style.display = "flex";
                number++;
            } else {
                card.style.display = "none";
            }
        });
        if (number == 0) {
            nothingfound.style.display = "block";
            nothingcategory.style.display = "none";
            nothingcategoryH.style.display = "none";
            nothingcategoryT.style.display = "none";
            nothingcategoryP.style.display = "none";
        }
    }
    searchInput.addEventListener("input", function () {
        const searchQuery = searchInput.value.trim();
        filterIcons(searchQuery);
    });
});
