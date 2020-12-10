/* 
1. Understanding merge sort
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
  A. [21,1,26,45]


21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
#1. split 
1, 21,26,45, 28,29 ,2,9             16,49, 27,39, 34,43,40,46
#2. split 
1,21,26,45,       2,9,28,29          16,27,39,49   34,40,43,46
#3. merge 
1,2,9,21,26,28,29,45                  16,27,34,39,40,43,46,49

splitting phase
half
21, 1, 26, 45, 29, 28, 2, 9,                 16, 49, 39, 27, 43, 34, 46, 40
then half again
21, 1, 26, 45,       29, 28, 2, 9,                 16, 49, 39, 27,      43, 34, 46, 40
third half
21,1  26, 45  29,28   2,9         16,49  39,27,  43,34   46, 40



What is the resulting list that will be sorted after 16 recursive calls to mergesort?
  A.??????????????????
  [ 9 ], although it will simply return at that point. The next version of the 
  list that will be passed into MergeSort is [ 16, 49, 39, 27, 43, 34, 46, 40 ]


What are the first 2 lists to be merged?
  A. [21],[1]  - first lists with more than one element are [1,21] [26,45]


Which two lists would be merged on the 7th merge?
  A. [1,21, 26, 45]  [2, 9, 28, 29, ]  






///////////// sorting breakdown//////////////////////////////  

  21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
#1. split 
1, 21,26,45, 28,29 ,2,9             16,49, 27,39, 34,43,40,46
#2. split 
1,21,26,45,       2,9,28,29          16,27,39,49   34,40,43,46
#3. merge 
1,2,9,21,26,28,29,45                  16,27,34,39,40,43,46,49

splitting phase
half
21, 1, 26, 45, 29, 28, 2, 9,                 16, 49, 39, 27, 43, 34, 46, 40
then half again
21, 1, 26, 45,       29, 28, 2, 9,                 16, 49, 39, 27,      43, 34, 46, 40
third half
21,1  26, 45  29,28   2,9         16,49  39,27,  43,34   46, 40
*/