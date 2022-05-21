document.addEventListener("DOMContentLoaded", function(event) {
        //Helper vars
        var url = window.location.pathname;

        document.querySelector('#navmainpage').style.display = "none";
        var navMenu = document.querySelector('#navmainpage');
        var menuButton = document.querySelector('.hiddenmenu')
        menuButton.addEventListener('click', menuToggle);
        

        //Helper Functions
        function menuToggle() {
            let currentState = document.querySelector('#navmainpage').style.display;
            if (currentState === "none") {
            navMenu.style.display = "block";
            let currentPosition = document.querySelector('#navmainpage').querySelector('a[href=".'+url+'"]');
            currentPosition.innerHTML = "<span class='navarrow'>→ How</span>";
            }
            else {
                navMenu.style.display = "none";
            }
        }
});