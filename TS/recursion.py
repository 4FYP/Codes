
def tri_recursion(k):
  if (k+2>0):
    tri_recursion(k-2)
    print(k+2)

print("\n\nRecursion Example Results")
tri_recursion(6)