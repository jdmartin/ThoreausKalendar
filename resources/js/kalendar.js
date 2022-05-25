document.addEventListener("DOMContentLoaded", function(event) {
        //Useful variables for UI elements
        document.querySelector('#navmainpage').style.display = "none";
        var navMenu = document.querySelector('#navmainpage');

        document.querySelector('#search-help').style.display = "none";
        var searchToggle = document.querySelector('#search-toggle');
        searchToggle.addEventListener('click', searchHelpToggler);

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

        //Store some values for later
        const theGaps = document.querySelectorAll('gap');
        var currentPageName = ""
        var currentPageNameCount = 0
        
        //Helper Functions
        function menuToggle() {
            let currentState = document.querySelector('#navmainpage').style.display;
            if (currentState === "none") {
               navMenu.style.display = "block"; 
            }
            else {
                navMenu.style.display = "none";
            }
            if (currentPageNameCount === 0) {
                let url = window.location.pathname;
                let currentPosition = document.querySelector('#navmainpage').querySelector('a[href=".'+url+'"]');
                currentPageName = currentPosition.innerHTML;
                currentPosition.innerHTML = "<span class='navarrow'>→ </span>" + currentPosition.innerHTML;
                currentPageNameCount = 1;
            }
        }

        //Editor Button Helpers
        function helpMenuToggler() {
            let theHelpBox = document.querySelector('div#helpbox');
            let theHelpBoxStyle = document.querySelector('div#helpbox').style.display;
            if (theHelpBoxStyle != "block") {
                theHelpBox.style.display = "block";
             }
             else {
                theHelpBox.style.display = "none";
             }
             theHelpBox.classList.toggle('helpactive');
             helpButton.classList.toggle('red');
        }

        function persButtonToggler() {
            var persons = document.getElementsByTagName('persname');
            if (persons.length === 0) {
                persButton.classList.toggle('no-matches');
            } else {
                persButton.classList.toggle('red');
                for (var i = 0; i < persons.length; i++) {
                    persons[i].classList.toggle('active');
                    persons[i].parentElement.closest('td').classList.toggle('personHighlight');
                }
            }
        }

        function addButtonToggler() {
            var adds = document.querySelectorAll('add:not([rend="pencil"])')
            if (adds.length === 0) {
                addButton.classList.toggle('no-matches');
            } else {
                addButton.classList.toggle('red');
                for (var i = 0; i < adds.length; i++) {
                    adds[i].classList.toggle('active');
                    adds[i].parentElement.closest('td').classList.toggle('addHighlight');
                }
            }
        }

        function placeButtonToggler() {
            var places = document.getElementsByTagName("placename");
            if (places.length === 0) {
                placeButton.classList.toggle('no-matches');
            } else {
                placeButton.classList.toggle('red');
                for (var i = 0; i < places.length; i++) {
                    places[i].classList.toggle('active');
                    places[i].parentElement.closest('td').classList.toggle('redHighlight');
                }
            }
        }

        function pencilButtonToggler() {
            var pencils = document.querySelectorAll("add[rend='pencil']");
            if (pencils.length === 0) {
                pencilButton.classList.toggle('no-matches');
            }
            else {
                pencilButton.classList.toggle('red');
                for (var i = 0; i < pencils.length; i++) {
                    pencils[i].classList.toggle('active');
                    pencils[i].parentElement.closest('td').classList.toggle('pencilHighlight');
                }
            }
        }

        function gapsButtonToggler() {
            gapsButton.classList.toggle('red');
            var gaps = document.querySelectorAll("gap");
            for (var i = 0; i < gaps.length; i++) {            
                gaps[i].classList.toggle('hidden');
            }    
        }

        function notesButtonToggler() {
            allNotes = document.querySelectorAll('note');
            if (allNotes.length === 0) {
                notesButton.classList.toggle('no-matches');
            } else {
                notesButton.classList.toggle('red');
                for (var i = 0; i < allNotes.length; i++) {
                    allNotes[i].classList.toggle('hidden');
                    allNotes[i].classList.toggle('active');
                }
            }
        }

        function searchHelpToggler() {
            let searchHelpStyle = document.querySelector('#search-help').style.display;
            let searchHelp = document.querySelector('#search-help');
            if (searchHelpStyle != "block") {
                searchHelp.style.display = "block";
                searchToggle.textContent = "hide help";
             }
             else {
                searchHelp.style.display = "none";
                searchToggle.textContent = "show help";
             }
        }

        //Layout and Formatting

        //Make the menu sticky on scroll
        window.addEventListener('scroll', function() {
            var header = document.querySelector('#search-menu');
            header.classList.toggle("sticky", window.scrollY > 0);
            //Close main menu if scrolling past 100
            if (this.window.scrollY > 100) {
                navMenu.style.display = "none";
            }
        });

        //Prepare the NavMenu
        fetch("./resources/html_snippets/navigation-menu.html").then(data => {
            return data.text()
        })
        .then( data => {
            document.querySelector("#navmainpage").innerHTML = data;
        })

        //Prepare the Helpbox
        fetch("./resources/html_snippets/helpmenu.html").then(data => {
            return data.text()
        })
        .then( data => {
            document.querySelector("#helpbox").innerHTML = data;
        })

        //Prepare the Colophon
        fetch("./resources/html_snippets/colophon.html").then(data => {
            return data.text()
        })
        .then( data => {
            document.querySelector("#righty").innerHTML = data;
        })

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
            theUnclear[i].textContent = " " + theUnclear[i].textContent + " ";
        }

        //Prepare and show [gap] by default
        function mindTheGaps() {
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

                var str1 = '<span type="gap" style="border-bottom:1px dotted; "title="';
                var str2 = '" ><span>[gap]</span>';
                var link = str1.concat(result,str2);
                
                theGaps[i].classList.remove('hidden');
                theGaps[i].innerHTML = link;
            }
        }

        //Prepare some persname info
        var people = document.querySelectorAll('persname');
        for (var i = 0; i < people.length; i++) {
            let title = people[i].getAttribute('ref');
            if (title != 'undefined') {
                if (typeof people[i] != 'undefined') {
                    if (title != null) {
                        people[i].setAttribute('title', title);
                        people[i].classList.add('person-title');
                    }
                }
            }
        }

        //Prepare some place info
        var places = document.querySelectorAll('placename');
        for (var i = 0; i < places.length; i++) {
            let title = places[i].getAttribute('ref');
            if (title != 'undefined') {
                if (typeof places[i] != 'undefined') {
                    if (title != null) {
                        places[i].setAttribute('title', title);
                        places[i].classList.add('place-title');
                    }
                }
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

            let str1 = '<span type="note" style="border-bottom:1px dotted; "title="';
            let str2 = '" ><span>[note]</span>';
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

            let str1 = '<span type="note" style="border-bottom:1px dotted; "title="';
            let str2 = '" ><span>[note]</span>';
            let theEdNote = str1.concat(result,str2);

            theEdNotes[i].innerHTML = theEdNote;
            theEdNotes[i].classList.add("hidden");
        }
    
    //Execute on Page Load
    mindTheGaps();
});
