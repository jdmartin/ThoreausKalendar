from bs4 import BeautifulSoup


def menu():
    choice = ""
    options = {
    '0': ['newapril', 'April (New)'],
    '1': ['otherapril', 'April (Other)'],
    '2': ['may1', 'May 1'],
    '3': ['may2', 'May 2'],
    '4': ['june', 'June 1'],
    '5': ['june2', 'June 2'],
    '6': ['june3', 'June 3'],
    '7': ['june4', 'June 4'],
    '8': ['oct1', 'October 1'],
    '9': ['oct2', 'October 2'],
    '10': ['nov1', 'November 1'],
    '11': ['nov2', 'November 2'],
    '12': ['nov3', 'November 3'],
    '13': ['nov4', 'November 4'],
    '14': ['alldecember', 'December 1'],
    '15': ['dec2', 'December 2'],
    '16': ['dec3', 'December 3'],
    '17': ['dec4', 'December 4'],
    'A': ['all_pages', 'Rebuild All Months'],
}

    print("\n")
    print("Choose a month to build, or one of the global options:\n")
    for option, item in options.items():
        print(f"{option}.\t{item[1]}")

    print("\n")
    while choice not in options.keys():
        choice = input("What would you like to do? Enter the number: ")
        if choice in options.keys():
            build_page(options[choice][0])
        else:
            print("Sorry, that's not a valid choice. Try again.\n")


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
        "oct2",
        "nov1",
        "nov2",
        "nov3",
        "nov4",
        "alldecember",
        "dec2",
        "dec3",
        "dec4"
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

                    i = 0
                    for elem in list(children):
                        output.write(f'<td num="{i}">')
                        output.write(str(elem))
                        output.write("</td>")
                        i += 1

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
