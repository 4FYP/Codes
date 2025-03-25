def fabnaci(num):
    a=0
    while(a<num):
        yield a
        a,b=b, a+b

f=fabnaci(35)
print(next(f))
print(next(f))
print(next(f))
print(next(f))