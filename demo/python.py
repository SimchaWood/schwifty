from collections import deque

import re

rx = re.compile(r"^(?:(start))(?<!foo)(?<=bar)MUSKET_(?<cfgName>[A-Z0-9_]+)(._fibble\d*){0,1}(?=foo)(?!bar)$")

# TODO: Do some stuff.
def topo(G, ind=None, Q=[1]):
    if ind == None:
        ind = [0] * (len(G) + 1)  # this is a comment
        for u in G:
            for v in G[u]:
                ind[v] += 1
        Q = deque()
        for i in G:
            if ind[i] == 0:
                Q.append(i)
    if len(Q) == 0:
        return
    v = Q.popleft()
    print(v)
    for w in G[v]:
        ind[w] -= 1
        if ind[w] == 0:
            Q.append(w)
    topo(G, ind, Q)


class SomeClass:
    def create_arr(self): # An instance method
        self.arr = []
    
    def insert_to_arr(self, value):  #An instance method
        self.arr.append(value)
        
    @classmethod
    def class_method(cls):
        """This is TODO a docstring \n"""
        print("the class method was called")
