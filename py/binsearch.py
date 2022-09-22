#binsearch
#Yanique Sears
#CSCI 77800 Fall 2022
#collaborators: 
#consulted: Summer Assignment/ThinkJava

def binSearch(list, value):
  firstInd = 0 #setting first index to 0
  lastInd = len(list) - 1 #finding the last index in the list
  middleInd = int((firstInd +lastInd) / 2) # tells where to divide the search
  
  if list[firstInd] == value:
#if the value we are looking for is the first, then return the first value
    return firstInd
  elif list[lastInd] == value:
    #else if value is the last index, return last
    return lastInd

  while list[middleInd] != value:
    if(list[middleInd] < value):
      #if mid is less than value, the first index is reassigned to the middle index value. Now the program will focus on the latter half of the data.
      firstInd = middleInd
      
    else:
      lastInd = middleInd
      #If mid is more than value, then the middle index is reassigned to be the last index.
      
    middleInd = int((firstInd +lastInd) / 2)
    if firstInd == middleInd or lastInd == middleInd:
      return 0

  return middleInd

list = [0, 7, 11, 15, 20, 32, 47]

print(binSearch(list, 47))