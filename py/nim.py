#Nim
#Yanique Sears
#CSCI 77800 Fall 2022
#collaborators: 
#consulted: Summer Assignment/ThinkJava

#set number of stones
stones = 12

print("Welcome to Nim!")
print("There are ", stones, "stones")


while stones > 0:
  print("How many stones do you want to take first? 1-3")
  stonesTaken = input()
  #covert answer to int
  stonesTakenInt = int(stonesTaken)
  #if player chooses a number greater than 4
  if stonesTakenInt > 3:
      print("Pick 1-3 please!")
  else:
  #calculate and update stones
      stones = stones - stonesTakenInt
  if stones <= 0:
    print("Player wins!")
    break
  else:
    print("There are " ,stones, " left.")
  