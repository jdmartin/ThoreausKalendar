from bs4 import BeautifulSoup
from html5print import HTMLBeautifier
import os

contents = ""
soup = ""
pretty = ""

for filename in os.scandir(path="."):
    if (filename.path.endswith(".html")):
        with open(filename, "r") as f:
            contents = f.read()
            soup = BeautifulSoup(contents, 'html.parser')
            pretty = HTMLBeautifier.beautify(contents, 4)
            f.close()

        with open(filename, "w") as f:
            f.write(pretty)
            f.close()
