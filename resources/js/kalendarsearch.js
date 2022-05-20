document.addEventListener("DOMContentLoaded", function (event) {
    var inputs = document.querySelector('#alphasearch');

    inputs.addEventListener('keydown', (e) => {
        if (e.which == 13) {
            clickHandler();
            return false;
        }
    });

    var showButton = document.querySelector("#show");
    showButton.addEventListener("click", clickHandler);

    function clickHandler() {
        if (showButton.getAttribute("value") === 'Reset') {
            showButton.removeAttribute("value")
            showButton.innerHTML = "Search"
            secondClick()
        } else {
            showButton.value = "Reset"
            showButton.innerHTML = "Reset"
            firstClick()
        }
    }

    function firstClick() {
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

    function secondClick() {
        if ($('.blast').length > 0) {
            turnOutTheLights();
        } else if (pieces > 0) {
            $("cell").blast(false);
            setTheRayToJerry();
        }
        inputs.setAttribute('placeholder', 'Search this page...')
        inputs.value = '';
        showButton.value = ""
    }

    function blasterMaster(term) {
        var targets = document.getElementsByTagName("cell");
        for (var i = 0; i < targets.length; i++) {
            targets[i].innerHTML = targets[i].innerHTML.replace(new RegExp(term, 'g'), "<span class='blast'>" + term + "</span>");
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
        }
    }

    function turnOutTheLights() {
        everything = document.querySelectorAll("*")
        for (var i = 0; i < everything.length; i++) {
            everything[i].classList.remove("blast", "alpha")
        }
    }

});