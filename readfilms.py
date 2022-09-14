import json
from json2html import *

with open("filmService.js") as fs:
    data = fs.read()
    # crop out the brackets
    obj = data[data.find("[")+1:data.rfind("]")]
    # reconvert to python list of strings
    gen =  obj.split("},")
    # I'm dropping spaces and the last } because it will be convenient to add all at once
    gen = list(map(lambda x: x.replace("\n", "").replace(" ", ""), gen))[:-1]

    # I need to add double quotes to the properties so that it works as a json file

    for j in range(len(gen)):
        js = gen[j]
        entries = js[1:].split(",") #drop brace and split each entry
        for i in range(len(entries)):
            entry = entries[i]
            entry = entry.split(":")
            entry[0] = '"'+entry[0]+'"' 
            entry = ":".join(entry)
            entries[i] = entry
        entries = ",".join(entries)
        gen[j] = "{"+entries+"}"

    gen = [json.loads(film) for film in gen] 
    
    #some films don't have publish date
    for film in gen:
        film.setdefault("publishDate") 

    # write html table in a diffferent file so that it can be accesed with other node.js
    with open("filmtable.html", "w+") as fl:
        fl.write(json2html.convert(gen))

    
    #Next time I will try to learn how to do it with javascript, which is more manual but allows for more formatting (I could also do it more manually with python but the point of using python was using the modules)




