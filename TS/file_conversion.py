"This Code is for "
import json
import pandas as pd
df = pd.read_csv(r"C:\Users\92345\Downloads\output_pcs.csv")
l=[]
print(len(df.columns.values))
for x in df.values:
    if not pd.isna(x[0]):
        print(x)
        d={}
        for i in range (0,len(df.columns.values)):
            d[df.columns.values[i]]=x[i]
        l.append(d)
print(l)
with open(r"C:\Users\92345\Downloads\output_json.json", "w", encoding="utf-8") as my_file:
    json.dump(l, my_file)
