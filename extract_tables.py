import sys
from bs4 import BeautifulSoup
import json

def extract_tables(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    tables = soup.find_all('table')
    
    data = []
    for idx, table in enumerate(tables):
        table_data = []
        rows = table.find_all('tr')
        for row in rows:
            cols = row.find_all(['td', 'th'])
            cols = [ele.text.strip() for ele in cols]
            table_data.append([ele for ele in cols if ele]) 
        data.append({ "table_id": idx, "data": table_data })
    
    print(json.dumps(data, indent=2, ensure_ascii=False))

if __name__ == '__main__':
    extract_tables(sys.argv[1])
