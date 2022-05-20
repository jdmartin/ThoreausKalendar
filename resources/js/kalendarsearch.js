document.addEventListener("DOMContentLoaded", function (event) {
    var inputs = document.querySelector('#alphasearch');

    inputs.addEventListener('keydown', (e) => {
        if (e.which == 13) {
            firstClick();
        }
    });

    var showButton = document.querySelector("#show");
    var resetButton = document.querySelector("#reset");
    showButton.addEventListener("click", firstClick);
    resetButton.addEventListener("click", resetHandler);

    function resetHandler() {
        inputs.setAttribute('placeholder', 'Search this page...')
        turnOutTheLights()
    }

    function firstClick() {
        var blasted_items = document.getElementsByClassName("blast");
        if (blasted_items.length > 0) {
            turnOutTheLights();
        }

        var givenValue = inputs.value.replace(/[!"#$%&()*+.\/:;<=>?@\[\\\]^`{|}~]/g, '').replace(/ /g, '');
        var givenValues = givenValue.split(",");

        for (var i = 0; i < givenValues.length; i++) {
            var alpha = (givenValues[i]);
            if (alpha != "") {
                blasterMaster(alpha);
            } else {
                inputs.setAttribute('placeholder', 'Need Input...')
            }
        }
    }

    function blasterMaster(term) {
        var targets = document.getElementsByTagName("cell");
        for (var i = 0; i < targets.length; i++) {
            targets[i].innerHTML = targets[i].innerHTML.replace(new RegExp(term, 'gi'), "<span class='blast'>" + "$&" + "</span>");
        }
        blasted();
    }

    function blasted() {
        var pieces = document.getElementsByClassName("blast").length;
        if (pieces === 0) {
            inputs.value = ""
            inputs.setAttribute('placeholder', 'No matches.');
        } else if (pieces > 0) {
            var reeses = pieces + " matches.";
            inputs.value = ""
            inputs.setAttribute('placeholder', reeses);

            setTheRayToJerry();
        }

    }

    function setTheRayToJerry() {
        blasted_items = document.getElementsByClassName("blast")
        for (var i = 0; i < blasted_items.length; i++) {
            blasted_items[i].parentElement.closest("td").setAttribute("class", "alpha")
            showButton.setAttribute("value", "loaded")
        }
    }

    function turnOutTheLights() {
        everything = document.querySelectorAll("*")
        for (var i = 0; i < everything.length; i++) {
            everything[i].classList.remove("blast", "alpha")
        }
    }
});