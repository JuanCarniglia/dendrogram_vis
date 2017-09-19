curl -XDELETE http://localhost:9200/dendrogram_data

curl -XPUT http://localhost:9200/dendrogram_data -d@"mapping.json"
