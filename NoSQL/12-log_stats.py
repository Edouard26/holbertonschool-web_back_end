#!/usr/bin/env python3

from pymongo import MongoClient

'''
Provide stats about Nginx logs stored in MongoDB
'''

client = MongoClient('mongodb://localhost:27017/')
db = client.logs
collection = db.nginx

# Total number of logs
total_logs = collection.count_documents({})
print(f"{total_logs} logs")

# Methods stats
methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
print("Methods:")
for method in methods:
    count = collection.count_documents({"method": method})
    print(f"\tmethod {method}: {count}")

# Number of documents with method=GET and path=/status
status_check = collection.count_documents({"method": "GET", "path": "/status"})
print(f"{status_check} status check")
