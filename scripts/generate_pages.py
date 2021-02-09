from bs4 import BeautifulSoup
from pprint import pprint

with open("../page_heads/newapril", "r") as head:
    top = head.read()
    with open("../pages/newapril.html", "w") as output:
        output.write(top)
    output.close()
    head.close()

with open("../data/april/NewApril.xml", "r") as file:
    #Read the file
    contents = file.read()
    
    #Make some soup
    soup = BeautifulSoup(contents, 'lxml')

    #Geat all the TEI rows
    rows = soup.find_all("row")

    with open("../pages/newapril.html", "a") as output:
        #Create a container for the processed and prepared XML
        output.write('<table id="kalendar" border="1" cellpadding="1" cellspacing="0">')
        for row in rows:
            output.write("<tr>")

            children = row.find_all("cell")

            for elem in list(children):
                output.write("<td>")
                output.write(str(elem))
                output.write("</td>")

            output.write("</tr>")

        output.write("</table>")
    output.close()
    file.close()

with open("../page_tails/newapril", "r") as tail:
    bottom = tail.read()
    with open("../pages/newapril.html", "a") as output:
        output.write(bottom)
    output.close()
    tail.close()
