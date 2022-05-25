document.addEventListener("DOMContentLoaded", function() {
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

    function prepareListOfElements() {
        var elements = document.getElementsByTagName('*');
        var seenElements = []
        for (var i =0; i < elements.length; i++) {
            seenElements.push(elements[i].nodeName);
        }
        //TODO: Find a better way to handle these three:
        seenElements.push('gap');
        seenElements.push('span');
        seenElements.push('note');
        reducedSetElements = new Set(seenElements);
        return reducedSetElements
    }

    var listOfElementsInPage = prepareListOfElements();
    
    function resetHandler() {
        inputs.setAttribute('placeholder', 'Search this page...')
        turnOutTheLights()
        return false
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
            if (listOfElementsInPage.has(alpha.toUpperCase())) {
                inputs.setAttribute('placeholder', 'Search this page...')
                document.querySelector('#alphasearch').value = ''
                continue
            }
            if (alpha.length > 2) {
                if (alpha != "") {
                    blasterMaster(alpha);
                }
            }
            if (alpha.length <= 2) {
                inputs.setAttribute('placeholder', 'Search this page...')
                document.querySelector('#alphasearch').value = ''
                continue
            }
        }
    }

    function blasterMaster(term) {
        var targets = document.querySelectorAll("cell");
        let bracketTest = new RegExp(`<.*${term}.*>`);
        //Make sure our term is a word and not part of a word
        for (var i = 0; i < targets.length; i++) {
            //If the element is hidden, then searching it only leads to sadness with that newly created <span>
            var style = window.getComputedStyle(targets[i]);
            if ((style.display === 'none') || (style.visibility === 'hidden')) {
                continue
            }
            else if (bracketTest.test(targets[i].innerHTML)) {
                continue
            }
            else {
                //Find our search term, make sure it has a space before it, or it's the start of a new line.
                //Make sure it isn't followed by an '=' or a '"', both signs we're in an attribute and not text.
                //Allow any number of characters to follow to get word forms, but stop at a space.
                targets[i].innerHTML = targets[i].innerHTML.replace(new RegExp(`\\s{0,1}${term}(?!(\=|\"))\\s*?`, 'gi'), "<span class='blast'>" + "$&" + "</span>");
            }
        }
        blasted();
    }

    function blasted() {
        var pieces = document.getElementsByClassName("blast").length;
        if (pieces === 0) {
            inputs.value = ""
            inputs.setAttribute('placeholder', 'No matches.');

            shakingThrough();
        } else if (pieces > 0) {
            var reeses = pieces + " matches.";
            inputs.value = ""
            inputs.setAttribute('placeholder', reeses);

            setTheRayToJerry();
        }
    }

    function shakingThrough() {
        document.querySelector('#alphasearch').classList.add('horizontal-shake');
        setTimeout(function (){
            document.querySelector('#alphasearch').classList.remove('horizontal-shake');
        }, 1000);
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