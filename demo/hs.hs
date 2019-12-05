{-# LANGUAGE ForeignFunctionInterface, CPP #-}

1 : [2, 3] -- [1, 2, 3]
'C' : "at" -- "Cat" (Remember strings are lists of characters)
True : [] -- [True]
1 : 2 : 3 : [] == [1, 2, 3] -- True

elem 3 [1, 4, 73, 12] -- False
'H' `elem` "Highgarden" -- True 
[1, 2] ++ [3, 4] -- [1, 2, 3, 4]
"Hello " ++ "World" -- "Hello World" 
head [1, 2, 3] -- 1
tail [1, 2, 3] -- [2, 3]
last [1, 2, 3] -- 3
init [1, 2, 3] -- [1, 2]
"Casterly Rock" !! 3 -- 't'

null [] -- True
null [1, 2, 3] -- False
length "Dorne" -- 5

(1, 2)
("Hello", True, 2)
fst (6, "Six") -- 6
snd (6, "Six") -- "Six" 