import os
from bs4 import BeautifulSoup
from html5print import HTMLBeautifier

def get_choice():
    #These are the menu choices and the corresponding functions:
    options = {
        '0': 'newapril',
        '1': 'otherapril',
        '2': 'mayone',
        '3': 'maytwo',
        '4': 'june',
        '5': 'junetwo',
        '6': 'junethree',
        '7': 'junefour',
        '8': 'octone',
        '9': 'alldecember',
        '10': 'build_all',
        '11': 'cleanup_formatting'
    }
    choice = input("What would you like to do? Enter the number:")
    
    if choice in options.keys():
        globals()[options[choice]]()
    else:
        print("Sorry, that's not a valid choice. Try again.\n")
        get_choice()

def menu():
    print("\n")
    print("Choose a month to build, or one of the global options:\n")
    print("0.\tApril (New)")
    print("1.\tApril (Other)")
    print("2.\tMay 1")
    print("3.\tMay 2")
    print("4.\tJune 1")
    print("5.\tJune 2")
    print("6.\tJune 3")
    print("7.\tJune 4")
    print("8.\tOct 1")
    print("9.\tDecember (All)")
    print("\n")
    print("10.\tRebuild All Months")
    print("11.\tJust Beautify the HTML files")
    print("\n")
    get_choice()

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

def octone():
    ##Process Oct1.xml

    #Get the HTML for the top part of the file
    with open("page_heads/oct1", "r") as head:
        top = head.read()
        with open("oct1.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/Oct1.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("oct1.html", "a") as output:
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
    with open("page_tails/oct1", "r") as tail:
        bottom = tail.read()
        with open("oct1.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

def alldecember():
    ##Process AllDecember.xml

    #Get the HTML for the top part of the file
    with open("page_heads/alldecember", "r") as head:
        top = head.read()
        with open("alldecember.html", "w") as output:
            output.write(top)
        output.close()
        head.close()

    #Process the XML and output HTML elements for the body.
    with open("data/AllDecember.xml", "r") as file:
        #Read the file
        contents = file.read()
        
        #Make some soup
        soup = BeautifulSoup(contents, 'lxml')

        #Geat all the TEI rows
        rows = soup.find_all("row")

        with open("alldecember.html", "a") as output:
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
    with open("page_tails/alldecember", "r") as tail:
        bottom = tail.read()
        with open("alldecember.html", "a") as output:
            output.write(bottom)
        output.close()
        tail.close()

def cleanup_formatting():
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

def build_all():
    newapril()
    otherapril()
    mayone()
    maytwo()
    june()
    junetwo()
    junethree()
    junefour()
    octone()
    alldecember()

    cleanup_formatting()

menu()