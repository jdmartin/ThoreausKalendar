document.addEventListener("DOMContentLoaded", function(event) {
        //Useful variables for UI elements
        document.querySelector('#navmainpage').style.display = "none";
        var navMenu = document.querySelector('#navmainpage');

        document.querySelector('#search-help').style.display = "none";
        var searchToggle = document.querySelector('#search-toggle');
        searchToggle.addEventListener('click', searchHelpToggler);
        var searchHelper = 0;

        var menuButton = document.querySelector('.hiddenmenu')
        menuButton.addEventListener('click', menuToggle);

        var helpButton = document.querySelector('button#help');
        helpButton.addEventListener('click', helpMenuToggler);

        var persButton = document.querySelector('button#pers');
        persButton.addEventListener('click', persButtonToggler);

        var addButton = document.querySelector('button#add');
        addButton.addEventListener('click', addButtonToggler);

        var placeButton = document.querySelector('button#places');
        placeButton.addEventListener('click', placeButtonToggler);

        var pencilButton = document.querySelector('button#pencils');
        pencilButton.addEventListener('click', pencilButtonToggler);

        var gapsButton = document.querySelector('button#gaps');
        gapsButton.addEventListener('click', gapsButtonToggler);

        var notesButton = document.querySelector('button#notes');
        notesButton.addEventListener('click', notesButtonToggler);
        
        //Helper Functions
        function menuToggle() {
            let url = window.location.pathname;
            let currentState = document.querySelector('#navmainpage').style.display;
            if (currentState === "none") {
               navMenu.style.display = "block";
               let currentPosition = document.querySelector('#navmainpage').querySelector('a[href=".'+url+'"]');
               currentPosition.innerHTML = "<span class='navarrow'>→</span>" + currentPosition.innerHTML;
            }
            else {
                navMenu.style.display = "none";
            }
        }

        //Editor Button Helpers
        function helpMenuToggler() {
            let theHelpBox = document.querySelector('div#helpbox');
            let theHelpBoxStyle = document.querySelector('div#helpbox').style.display;
            if (theHelpBoxStyle != "block") {
                theHelpBox.style.display = "block";
                theHelpBox.classList.add('helpactive');
                helpButton.classList.add('red');
             }
             else {
                theHelpBox.style.display = "none";
                theHelpBox.classList.remove('helpactive');
                helpButton.classList.remove('red');
             }
        }

        function persButtonToggler() {
            var persCount = document.getElementsByClassName("personHighlight").length;
            var persons = document.getElementsByTagName('persname');

            if (persCount === 0) {
                for (var i = 0; i < persons.length; i++) {
                    persButton.classList.add('red');
                    persons[i].classList.add('active');
                    persons[i].parentElement.closest('td').setAttribute('class', 'personHighlight');
                }
            }
            else {
                for (var i = 0; i < persons.length; i++) {
                    persButton.classList.remove('red');
                    persons[i].classList.remove('active');
                    persons[i].parentElement.closest('td').classList.remove('personHighlight');
                }
            }
        }

        function addButtonToggler() {
            var addCount = document.getElementsByClassName("addHighlight").length;
            var adds = document.querySelectorAll('add:not([rend="pencil"])')

            if (addCount === 0) {
                for (var i = 0; i < adds.length; i++) {
                    addButton.classList.add('red');
                    adds[i].classList.add('active');
                    adds[i].parentElement.closest('td').setAttribute('class', 'addHighlight');
                }
            }
            else {
                for (var i = 0; i < adds.length; i++) {
                    addButton.classList.remove('red');
                    adds[i].classList.remove('active');
                    adds[i].parentElement.closest('td').classList.remove('addHighlight');
                }
            }
        }

        function placeButtonToggler() {
            var placeCount = document.getElementsByClassName("redHighlight").length;
            var places = document.getElementsByTagName("add");

            if (placeCount === 0) {
                for (var i = 0; i < places.length; i++) {
                    placeButton.classList.add('red');
                    places[i].classList.add('active');
                    places[i].parentElement.closest('td').setAttribute('class', 'redHighlight');
                }
            }
            else {
                for (var i = 0; i < places.length; i++) {
                    placeButton.classList.remove('red');
                    places[i].classList.remove('active');
                    places[i].parentElement.closest('td').classList.remove('redHighlight');
                }
            }
        }

        function pencilButtonToggler() {
            var pencilCount = document.getElementsByClassName("pencilHighlight").length;
            var pencils = document.querySelectorAll("add[rend='pencil']");

            if (pencilCount === 0) {
                for (var i = 0; i < pencils.length; i++) {
                    pencilButton.classList.add('red');
                    pencils[i].classList.add('active');
                    pencils[i].parentElement.closest('td').setAttribute('class', 'pencilHighlight');
                }
            }
            else {
                for (var i = 0; i < pencils.length; i++) {
                    pencilButton.classList.remove('red');
                    pencils[i].classList.remove('active');
                    pencils[i].parentElement.closest('td').classList.remove('pencilHighlight');
                }
            }
        }

        function gapsButtonToggler() {
            var gapsCount = document.querySelectorAll("gap[class='hidden']").length;
            var gaps = document.querySelectorAll("gap");

            if (gapsCount === 0) {
                for (var i = 0; i < gaps.length; i++) {
                    gapsButton.classList.remove('red');
                    gaps[i].classList.add('hidden');
                }
            }
            else {
                for (var i = 0; i < gaps.length; i++) {
                    gapsButton.classList.add('red');
                    gaps[i].classList.remove('hidden');
                }
            }
        }

        function notesButtonToggler() {
            notesButton.classList.toggle('red');
            allNotes = document.querySelectorAll('note');
            for (var i = 0; i < allNotes.length; i++) {
                allNotes[i].classList.toggle('hidden');
                allNotes[i].classList.toggle('active');
            }
        }

        function searchHelpToggler() {
            let searchHelpStyle = document.querySelector('#search-help').style.display;
            let searchHelp = document.querySelector('#search-help');
            if (searchHelpStyle != "block") {
                searchHelper = 1;
                searchHelp.style.display = "block";
                searchToggle.textContent = "hide help";
             }
             else {
                searchHelper = 0;
                searchHelp.style.display = "none";
                searchToggle.textContent = "show help";
             }
        }

        //Layout and Formatting
        //Make the menu sticky on scroll
        window.addEventListener('scroll', function() {
            var header = document.querySelector('#search-menu');
            header.classList.toggle("sticky", window.scrollY > 0);
        });

        //Take <lb> in source and insert a line break in HTML
        theLB = document.querySelectorAll('lb');
        for (var i = 0; i < theLB.length; i++) {
            let new_node = document.createElement('br');
            theLB[i].parentNode.insertBefore(new_node, theLB[i].nextSibling);
        }

        //Insert spans after <unclear>
        theUnclear = document.getElementsByTagName('unclear');
        for (var i = 0; i < theUnclear.length; i++) {
            let new_node = document.createElement('span');
            theUnclear[i].parentNode.insertBefore(new_node, theUnclear[i].nextSibling);
            theUnclear[i].textContent = " " + theUnclear[i].textContent;
        }

        //Prepare and show [gap] by default
        theGaps = document.querySelectorAll('gap');
        for (var i = 0; i < theGaps.length; i++) {
            var extent = theGaps[i].getAttribute('extent');
            var reason = theGaps[i].getAttribute('reason');

            var result = '';

            if (extent != null) {
                result += "Extent: " + extent + " |";
            }
            if (reason != null) {
                result += " Reason: " + reason + "  ";
            }

            var str1 = '<span style="border-bottom:1px dotted; "title="';
            var str2 = '" ><span>[gap]</span> ';
            var link = str1.concat(result,str2);

            theGaps[i].innerHTML = link;
        }

        //Prepare some persname info
        var people = document.querySelectorAll('persname');
        for (var i = 0; i < people.length; i++) {
            let title = people[i].getAttribute('ref');
            if (typeof people[i] != 'undefined') {
                if (title != null) {
                    people[i].setAttribute('title', title);
                }
                people[i].classList.add('person-title');
            }
        }

        //Prepare some place info
        var places = document.querySelectorAll('placename');
        for (var i = 0; i < places.length; i++) {
            let title = places[i].getAttribute('ref');
            if (typeof places[i] != 'undefined') {
                if (title != null) {
                    places[i].setAttribute('title', title);
                }
                places[i].classList.add('place-title');
            }
        }

        //Prepare some notes
        var thePlaceNotes = document.querySelectorAll('note:not([type="editorial"])');
        for (var i = 0; i < thePlaceNotes.length; i++) {
            let place = thePlaceNotes[i].getAttribute('place');
            let content = thePlaceNotes[i].textContent;
            let result = '';

            if (place != null) {
                result += "Location: " + place + " |";
            }
            if (content != null) {
                result += " Content: " + content + "  ";
            }

            let str1 = '<span style="border-bottom:1px dotted; "title="';
            let str2 = '" ><span>[note]</span> ';
            let placeNote = str1.concat(result,str2);

            thePlaceNotes[i].innerHTML = placeNote;
            thePlaceNotes[i].classList.add("hidden");
        }
        var theEdNotes = document.querySelectorAll('note[type="editorial"]');
        for (var i = 0; i < theEdNotes.length; i++) {
            let ednote = theEdNotes[i].textContent;
            let result = '';

            if (ednote != null) {
                result += "Note: " + ednote + " ";
            }

            let str1 = '<span style="border-bottom:1px dotted; "title="';
            let str2 = '" ><span>[note]</span> ';
            let theEdNote = str1.concat(result,str2);

            theEdNotes[i].innerHTML = theEdNote;
            theEdNotes[i].classList.add("hidden");
        }
});
