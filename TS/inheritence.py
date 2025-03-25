"""
class animal:
    def __init__(self, Name, t):
        self.name=Name
        self.t=t


class dog(animal):
    def __init__(self, Name, t):
        animal.__init__(self,Name, t)

    def __str__(self):
        return(f"{self.name} type is {self.t}")


d=dog("ana", "dog")
print(str(d))
"""

class animal:
    def __init__(self, Name, t):
        self.Name=Name
        self.t=t
    def __str__(self):
        return(f"{self.Name} type is {self.t}")

class dog(animal):
   pass


d=dog("ana", "dog")
print(str(d))