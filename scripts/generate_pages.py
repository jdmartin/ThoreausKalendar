from bs4 import BeautifulSoup

def newapril():
    ##Process NewApril.xml

    #Get the HTML for the top part of the file
    with open("page_heads/newapril", "r") as head:
        top = head.read()
        with open("newapril.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/april/NewApril.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("newapril.html", "a") as output:
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

    #Get the HTML for the bottom of the file.
    with open("page_tails/newapril", "r") as tail:
        bottom = tail.read()
        with open("newapril.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

def otherapril():
    ##Process April2.xml

    #Get the HTML for the top part of the file
    with open("page_heads/otherapril", "r") as head:
        top = head.read()
        with open("otherapril.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/otherapril/April2.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("otherapril.html", "a") as output:
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

    #Get the HTML for the bottom of the file.
    with open("page_tails/otherapril", "r") as tail:
        bottom = tail.read()
        with open("otherapril.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

def mayone():
       ##Process May1.xml

    #Get the HTML for the top part of the file
    with open("page_heads/may1", "r") as head:
        top = head.read()
        with open("may1.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/May1.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("may1.html", "a") as output:
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

    #Get the HTML for the bottom of the file.
    with open("page_tails/may1", "r") as tail:
        bottom = tail.read()
        with open("may1.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

def maytwo():
       ##Process May2.xml

    #Get the HTML for the top part of the file
    with open("page_heads/may2", "r") as head:
        top = head.read()
        with open("may2.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/May2.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("may2.html", "a") as output:
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

    #Get the HTML for the bottom of the file.
    with open("page_tails/may2", "r") as tail:
        bottom = tail.read()
        with open("may2.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

def june():
    ##Process june.xml

    #Get the HTML for the top part of the file
    with open("page_heads/june", "r") as head:
        top = head.read()
        with open("june.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/june.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("june.html", "a") as output:
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

    #Get the HTML for the bottom of the file.
    with open("page_tails/june", "r") as tail:
        bottom = tail.read()
        with open("june.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

def junetwo():
    ##Process june2.xml

    #Get the HTML for the top part of the file
    with open("page_heads/june2", "r") as head:
        top = head.read()
        with open("june2.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/june2.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("june2.html", "a") as output:
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

    #Get the HTML for the bottom of the file.
    with open("page_tails/june2", "r") as tail:
        bottom = tail.read()
        with open("june2.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

def junethree():
    ##Process june3.xml

    #Get the HTML for the top part of the file
    with open("page_heads/june3", "r") as head:
        top = head.read()
        with open("june3.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/june3.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("june3.html", "a") as output:
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

    #Get the HTML for the bottom of the file.
    with open("page_tails/june3", "r") as tail:
        bottom = tail.read()
        with open("june3.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

def junefour():
    ##Process june4.xml

    #Get the HTML for the top part of the file
    with open("page_heads/june4", "r") as head:
        top = head.read()
        with open("june4.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/june4.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("june4.html", "a") as output:
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

    #Get the HTML for the bottom of the file.
    with open("page_tails/june4", "r") as tail:
        bottom = tail.read()
        with open("june4.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

newapril()
otherapril()
mayone()
maytwo()
june()
junetwo()
junethree()
junefour()

