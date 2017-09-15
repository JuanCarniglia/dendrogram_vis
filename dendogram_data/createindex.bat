curl -XDELETE http://localhost:9200/dendogram_data

curl -XPUT http://localhost:9200/dendogram_data -d@"mapping.json"