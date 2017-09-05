curl -XDELETE http://localhost:9200/dendogram_data

curl -XPOST http://localhost:9200/dendogram_data -d@"mapping.json"