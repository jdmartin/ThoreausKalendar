from bs4 import BeautifulSoup

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

    #Test
    rows = soup.find_all("row")

    with open("../pages/newapril.html", "a") as output:
        output.write("<table>")
        for row in rows:
            line = print("<td>", row, "</td>")
            output.write(str(line))
        output.write("</table")
    output.close()
    file.close()

with open("../page_tails/newapril", "r") as tail:
    bottom = tail.read()
    with open("../pages/newapril.html", "a") as output:
        output.write(bottom)
    output.close()
    tail.close()
