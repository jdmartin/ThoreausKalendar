# Kalendar-2021
Mirror of the Python version of [Thoreau's Kalendar](https://www.thoreauskalendar.org)

N.B. This is beta software. Some cruft remains, and some code needs refactoring...

## 1. Running a local copy

This site is designed to work as well offline as it does online.  This is both to aid with adding and testing new pages as well as to provide speed and security by operating as static, read-only pages on the server side.

To run your own copy, follow these steps.

    git clone https://github.com/jdmartin/Kalendar-2021.git
    cd Kalendar-2021
    python -m http.server --bind 127.0.0.1 1337

    (Note: the above assumes python3, and the port can be changed to suit your needs)

With the setup out of the way, visit [http://localhost:1337](http://localhost:1337) in your browser.


## 2. Building the site

This site is built with Python 3, using [this script](https://github.com/jdmartin/Kalendar-2021/blob/main/scripts/generate_pages.py).  Dependencies are managed with [Poetry](https://python-poetry.org/), and can be reviewed by visiting either [pyproject.toml](https://github.com/jdmartin/Kalendar-2021/blob/main/pyproject.toml) or its exported [requirements.txt](https://github.com/jdmartin/Kalendar-2021/blob/main/requirements.txt).

The script takes an html fragment from the folder ```page_heads```, uses beautifulsoup to convert TEI to HTML (the calendrical format of the manuscript lends itself nicely to a simple table), and then adds the corresponding HTML fragment from ```page_tails```.

From here, the script also offers the option of 'beautifying' the HTML for readability.  Before deploying the site, the HTML files are minified with [this script](https://github.com/jdmartin/Kalendar-2021/blob/main/scripts/minify.sh).

Some of the site's pages are awaiting TEI, and these are built separately.  Each contains a high-quality image of the page in question that can be interacted with using [OpenSeadragon](https://openseadragon.github.io/).

## 3. Credits

**Editor**: Kristen Case, University of Maine at Farmington

**Assistant Editor**: Holland Corson, University of Maine at Farmington

**Technical Director**: Jonathan Martin, King's College London

**Consultant**: Joseph Fisher, UMass Lowell

**Consultant**: Beth Witherell, UC Santa Barbara

**Student Assistants**: Diana Allen, Carinne Haigis, and Richard Johnson

