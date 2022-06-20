from bs4 import BeautifulSoup


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
        '9': 'nov1',
        '10': 'nov2',
        '11': 'nov3',
        '12': 'alldecember',
        'A': 'all_pages',
    }
    choice = input("What would you like to do? Enter the number:")
    
    if choice in options.keys():
        build_page(options[choice])
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
    print("9.\tNovember 1")
    print("10.\tNovember 2")
    print("11.\tNovember 3")
    print("12.\tDecember (All)")
    print("\n")
    print("A.\tRebuild All Months")
    print("\n")
    get_choice()

def build_page(page):
    pages = [
        "newapril",
        "otherapril",
        "may1",
        "may2",
        "june",
        "june2",
        "june3",
        "june4",
        "oct1",
        "nov1",
        "nov2",
        "nov3",
        "alldecember"
    ]

    if page == "all_pages":
        for page in pages:
            build_page(page)
    elif page in pages:
        ##Process Related XML

        #Get the HTML for the top part of the file
        with open("page_heads/" + page, "r") as head:
            top = head.read()
            with open(page + ".html", "w") as output:
                output.write(top)
            output.close()
            head.close()

        #Process the XML and output HTML elements for the body.
        with open("data/" + page + ".xml", "r") as file:
            #Read the file
            contents = file.read()
            
            #Make some soup
            soup = BeautifulSoup(contents, 'lxml')

            #Geat all the TEI rows
            rows = soup.find_all("row")

            with open(page + ".html", "a") as output:
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
        with open("page_tails/" + page, "r") as tail:
            bottom = tail.read()
            with open(page + ".html", "a") as output:
                output.write(bottom)
            output.close()
            tail.close()

menu()
