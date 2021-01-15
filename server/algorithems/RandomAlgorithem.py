import re
import random

def getWeights(text,type):
    arr = []
    i=0
    name = text["name"]
    #tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
    #sentences = tokenizer.tokenize(text["content"])
    sentences = re.split('(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', text["content"])
    for stuff in sentences:
        if type=='random':
            weight= "%.2f" % random.random()
            dic= {
                "sentenceNum":i,
                "content": stuff,
                "weight":weight
            }
            arr.append(dic)
            i+=1

    response={
        "sentences": arr,
        "name": name
    }
    return response
