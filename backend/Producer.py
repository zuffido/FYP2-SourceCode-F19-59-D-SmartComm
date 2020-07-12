from time import sleep
from json import dumps
from kafka import KafkaProducer


producer = KafkaProducer(bootstrap_servers=['localhost:9092'],
                         value_serializer=lambda x:
                         dumps(x).encode('utf-8'))
import csv,json

jsonFilePath = "output1.json"

data = None
with open(jsonFilePath) as f:
  data = json.load(f)

print(type(data))


print(len(data))
count = 0
for record in data:
    print(str(data[record]))
    print(data[record])
    producer.send('testTopic', value=data[record])
    count = count + 1
