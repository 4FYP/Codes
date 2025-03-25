"""
#Email Regex
import re

def contains_numbers_and_letters(text):
    # Define a regex pattern to match both numbers and letters
    pattern = r'(\d*[a-zA-Z]\d*)+@[a-zZ-a]+(.com)$'

    # Use the re.search function to check if the pattern matches the text
    if re.search(pattern, text):
        return True
    else:
        return False

# Example usage:
text1 = "e@gmail.com"  # Contains both letters and numbers
text2 = "123"     # Contains only numbers
text3 = "abc"     # Contains only letters

print(contains_numbers_and_letters(text1))  # Output: True
print(contains_numbers_and_letters(text2))  # Output: False
print(contains_numbers_and_letters(text3))  # Output: False
"""

"""
#for/list Comprehension
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newlist = [x if x != "banana" else "orange" for x in fruits]

print(newlist)
"""

"""
#These expressions return the indices of the start and end of the substring matched by the group.
InputString= input("Enter String:")
ElementToFind= input("Enter Element to find in String:")
tuple_1=()
list_1=[]
Found=False
if (0<len(ElementToFind)<len(InputString)):
    for i in range(len(InputString)):
        if (i+len(ElementToFind)<len(InputString)+1):
            if (InputString[i:i+len(ElementToFind)]== ElementToFind):
                list_1.append(int(i))
                list_1.append(int(i+len(ElementToFind)-1))
                tuple_1=tuple(list_1)
                Found=True
                list_1=[]
        if Found:
            print(tuple_1)
            Found=False
"""

"""
#Split  into  equal parts of length . Convert each  to  by removing any subsequent occurrences of non-distinct characters

def merge_the_tools(string, k):
    # your code goes here
    leng=int(len(string)/k)
    n=0
    i=0
    newstring=""
    for i in range (i,leng):
        for n in range (n,n+leng):
            if (string[n] not in newstring):
                newstring=newstring+string[n]
        print(newstring)
        n+=1
        newstring=""
string="AABCAAADA"
leng=3
merge_the_tools(string, leng)
"""


"""
#Printing Diagonals

arr=[
    [8,2,4,6,7],
    [4,6,3,0,4],
    [1,3,6,8,4],
    [1,3,4,64,3] ,
    [6,53,6,36,8]
    ]
    
for i in range (0,5):
    print(arr[i][i])
    
for i in range (0,5):
    print(arr[i][4-i])
"""


"""
#Checking the braces combination that if we have three pair of braces then how many combinations we can make from it
def BracketCombinations(num):
    num=(2**num)-num;
    return num;   
  # keep this function call here
print(BracketCombinations(3))
  
"""
  
  
"""
#Bracket Matching 
inputstring=input("Enter the string:")
arr=[]
for i in range (0,len(inputstring)):
    if inputstring[i]=="(":
        arr.append(-1)
    if inputstring[i]=="[":
        arr.append(-2)
    if inputstring[i]=="{":
        arr.append(-3)
    if inputstring[i]==")":
        arr.append(1)
    if inputstring[i]=="]":
        arr.append(2)
    if inputstring[i]=="}":
        arr.append(3)
sum=0
if (len(arr)%2)==0:
    for i in range (0, len(arr)):
        sum=sum+arr[i]
    
    if sum==0:
        print ("All Brackets are Correct")
    else:
        print ("All Brackets are not Correct")
        
"""


"""
#Find Intersection
inputstring=["1","3","4","7","13"]
inputstring2=["1","2","4","13","15"]
for i in range (0, 5):
    for j in range(0,5):
        if inputstring[i]==inputstring2[j]:
            print(inputstring[i])

"""

"""
#Reverse using args & coargs
def reverse(*args):
    for i in range (0, len(args[0])):
        print(args[0][len(args[0])-i-1]) 
reverse("FBC")
"""

"""
dic=[
    {
        "Code": "A00",
        "is_covered": True #0
    },
    {
        "Code": "A001",
        "is_covered": False #1
    },
    {
        "Code": "A01",
        "is_covered": True #0
    },
    {
        "Code": "A010",
        "is_covered": True #0
    },
    {
        "Code": "A011",
        "is_covered": False #1
    },
    {
        "Code": "A0101",
        "is_covered": False #1
    }
    ]
new_dic=[]
most_long_code=""
for i in range(0, len(dic)):
    if (dic[i]["is_covered"]==True):
        dic[i]["Code_Category"]=dic[i]["Code"]
        new_dic.append(dic[i]["Code"])
    else:
        for j in range (0, len(new_dic)):
            print(new_dic[j])
            print(dic[i]["Code"])
            if (new_dic[j] in dic[i]["Code"]) and len(new_dic[j])>len(most_long_code):
                most_long_dic=new_dic[j]
        dic[i]["Code_Category"]=most_long_dic
        most_long_dic="Not Matched with any one"
for i in range(0, len(dic)):
    print(dic[i])
    print("\n")
"""