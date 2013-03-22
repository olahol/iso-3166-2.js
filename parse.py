import csv
from collections import defaultdict
import json
import re

def unicode_csv_reader(utf8_data, dialect=csv.excel, **kwargs):
    csv_reader = csv.reader(utf8_data, dialect=dialect, **kwargs)
    for row in csv_reader:
        yield [unicode(cell, "utf-8") for cell in row]

with open("data.csv", "r") as csv_file:
    countries = {}
    for row in unicode_csv_reader(csv_file):
        country_name         = row[0]
        subdivision_code     = row[1].strip()
        subdivision_name     = re.sub(r"\[.*\]", "", row[2]) # remove cruft from Sweden
        type                 = row[3]
        subdivision_alt_name = row[4]
        country_code         = row[8].strip()
        country_alt_code     = row[9]
        if country_code not in countries:
            countries[country_code] = { "name": country_name.strip(), "sub": {} }
        countries[country_code]["sub"][subdivision_code] = {
            "name": subdivision_name.strip()
            , "type": type.strip()
        }
    subdivisions = reduce(lambda a, b: a + len(countries[b].keys()), countries, 0)

    print "Countries: %d, Subdivisions: %d" % (len(countries.keys()), subdivisions)

    with open("data.js", "w") as json_file:
        print "Dumping to data.js"
        json_file.write("var data = ")
        json.dump(countries, json_file)
        json_file.write(";")
