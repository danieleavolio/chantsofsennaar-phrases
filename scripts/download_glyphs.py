# I want to scrape a page and save everything in folders 
# according to the category of the item.

import requests
from bs4 import BeautifulSoup
import os

# URL to scrape
url = 'https://www.neoseeker.com/chants-of-sennaar/guides/Dictionary'

# Get the page
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}
page = requests.get(url, headers=headers)

# Parse the page
soup = BeautifulSoup(page.content, 'html.parser')
# Find all the tables on the page
tables = soup.find_all('table', class_='wikitable table-list')

for i, table in enumerate(tables):
    # Get the title before the table
    # folder name is the index of the table
    folder_name = f"table_{i}"

    folder_path = os.path.join(os.getcwd(), folder_name)
    os.makedirs(folder_path, exist_ok=True)

    # Parse the table rows
    rows = table.find_all('tr')
    for row in rows[1:]:  # Skip the header row
        cells = row.find_all('td')
        if len(cells) == 2:
            img_tag = cells[0].find('img')
            if img_tag:
                img_url = img_tag.get('src')
                meaning = cells[1].text.strip()
                try:
                    response = requests.get(img_url)
                    file_name = f"{meaning}.png"
                    # replace all the / with - 
                    # Replace ? with nothing
                    # replace every character that can break filename with _
                    file_name = file_name.replace('/', '-').replace('?', '').replace(' ', '_')
                    file_path = os.path.join(folder_path, file_name)
                    with open(file_path, 'wb') as file:
                        file.write(response.content)
                    print(f"Image saved: {file_path}")
                except requests.exceptions.RequestException as e:
                    print(f"Error downloading {img_url}: {e}")