import beautifulsoup4 as bs4
import lxml

with open("../data/april/NewApril.xml", "r") as file:
    #Read the file
    content = file.readlines()
    #Combine into a string
    content = "".join(content)
    bs_content = bs4(content, "lxml")

    #Test
    rows = bs4.find_all("row")
    for row in rows:
        print("<row>", row, "</row>")
        