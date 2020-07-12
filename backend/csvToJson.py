#!/usr/bin/python
import csv,json

csvFilePath = "dataS.csv"
jsonFilePath = "output1.json"


# read the csv and add it to dictionary
data = {}
with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for csvRow in csvReader:
        ID = csvRow["ID"]
        data[ID] = csvRow

# write data to json file
with open(jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(data, indent = 4))