import os

from bs4 import BeautifulSoup


def menu():
    os.system("clear")
    choice = ""
    options = {
        "0": ["newapril", "April (New)"],
        "1": ["otherapril", "April (Other)"],
        "2": ["may1", "May 1"],
        "3": ["may2", "May 2"],
        "4": ["june", "June 1"],
        "5": ["june2", "June 2"],
        "6": ["june3", "June 3"],
        "7": ["june4", "June 4"],
        "8": ["oct1", "October 1"],
        "9": ["oct2", "October 2"],
        "10": ["nov1", "November 1"],
        "11": ["nov2", "November 2"],
        "12": ["nov3", "November 3"],
        "13": ["nov4", "November 4"],
        "14": ["alldecember", "December 1"],
        "15": ["dec2", "December 2"],
        "16": ["dec3", "December 3"],
        "17": ["dec4", "December 4"],
        "A": ["all_pages", "Rebuild All Months"],
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
        "dec4",
    ]

    if page == "all_pages":
        for page in pages:
            build_page(page)
    elif page in pages:
        ##Process Related XML

        # Get the HTML for the top part of the file
        with open("page_heads/" + page, "r") as head:
            top = head.read()
            with open(page + ".html", "w") as output:
                output.write(top)
            output.close()
            head.close()

        # Process the XML and output HTML elements for the body.
        with open("data/" + page + ".xml", "r") as file:
            # Read the file
            contents = file.read()

            # Make some soup
            soup = BeautifulSoup(contents, features="xml")

            # Geat all the TEI rows
            rows = soup.find_all("row")

            # Find all <lb> tags in the XML
            lb_tags = soup.find_all("lb")

            # Insert a <br> tag before each <lb> tag
            for lb_tag in lb_tags:
                br_tag = soup.new_tag("br")
                lb_tag.insert_before(br_tag)

            # Remove empty (self-closing) <note>, else leave:
            note_tags = soup.find_all("note")

            # Loop through the found <note> tags and extract the self-closing ones
            for note_tag in note_tags:
                if not note_tag.contents:  # Check if the tag has no contents (empty)
                    note_tag.extract()

            # Find all the <gap> elements and replace them with [gap]
            for gap in soup.find_all("gap"):
                extent = gap.get("extent")
                reason = gap.get("reason")

                result = ""
                if extent:
                    result += "Extent: " + extent + " | "
                if reason:
                    result += "Reason: " + reason + " "

                # Create a new <span> element with the tooltip content
                gap_span = soup.new_tag(
                    "gap", style="border-bottom:1px dotted;", title=result
                )
                gap_span.string = "[gap]"

                # Replace the <gap> element with the new <span>
                gap.replace_with(gap_span)

            with open(page + ".html", "a") as output:
                # Create a container for the processed and prepared XML
                output.write(
                    '<table id="kalendar" border="1" cellpadding="1" cellspacing="0">'
                )
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

        # Get the HTML for the bottom of the file.
        with open("page_tails/" + page, "r") as tail:
            bottom = tail.read()
            with open(page + ".html", "a") as output:
                output.write(bottom)
            output.close()
            tail.close()


menu()
