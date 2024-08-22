#!/usr/bin/env python3

from pymongo import MongoClient

'''
Provide stats about Nginx logs stored in MongoDB
'''


client = MongoClient('mongodb://localhost:27017/')
db = client.logs
collection = db.nginx

total_logs = collection.count_documents({})

print(f"{total_logs} logs")

methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

print("Methods:")

for method in methods:
    method_count = collection.count_documents({"method": method})
    print(f"\tmethod {method}: {method_count}")
status_count = collection.count_documents({"method": "GET", "path": "/status"})
print(f"{status_count} status check")

client.close()
