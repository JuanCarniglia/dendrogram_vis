#!/usr/bin/python

def printProgressBar (iteration, total, prefix = '', suffix = '', decimals = 1, length = 100, fill = '#'):
    percent = ("{0:." + str(decimals) + "f}").format(100 * (iteration / float(total)))
    filledLength = int(length * iteration // total)
    bar = fill * filledLength + '-' * (length - filledLength)
    print('\r%s |%s| %s%% %s' % (prefix, bar, percent, suffix), end = ' (' + str(iteration) + ' of ' + str(total) + ')\r')
    # Print New Line on Complete
    if iteration == total:
        print()

def importData(file):
    from elasticsearch import Elasticsearch
    import csv

    print('\n\nImporting from file: ' + str(file))

    print('\nOpen Connection to ES')
    es = Elasticsearch([{'host': 'localhost', 'port': 9200}])

    print('\nLoading file')
    json = []
    with open(file, 'r') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            json.append('{ \"id\" : \"' + row[0] + '\" , \"value\" : \"' + row[1] + '\" }')

    l = len(json)
    printProgressBar(0, l, prefix = 'Progress:', suffix = 'Complete', length = 50)
    i = 0
    for hit in json:
        es.index(index='dendrogram_data', doc_type='data', body=hit)
        printProgressBar(i + 1, l, prefix = 'Progress:', suffix = 'Complete', length = 50)
        i = i + 1

importData('dendrogram_data.csv')
