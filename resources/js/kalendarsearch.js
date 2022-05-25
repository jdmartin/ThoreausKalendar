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
        findAndReplaceDOMText(document.getElementById('kalendar'), {
            find: term,
            wrap: 'span',
            wrapClass: 'blast'
        });
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