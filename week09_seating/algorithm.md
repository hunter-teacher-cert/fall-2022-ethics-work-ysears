sync Week 10 - DUE 11/16 (2 weeks) 9:00pm
Repo directory: week09_seating (yes, the same directory as last week)
Note: This assignment should be done in teams of 2 or 3.
Write up a description of the algorithm you will implement as a text, pdf or md file and store it in the folder under the name algorithm.txt, algorithm.pdf or algorithm.md
Make a copy of the provided plane_seating.py in the folder and implement as much of your algorithm as you can. If you can't implement it fully, describe in the comments what you couldn't do due to either time or complexity.
If you want to start with a new plane base rather than work from the provided code (even in another language), that's fine but make sure the filename for your implementation is still plane_seating.py or plane_seathing.whatever where whatever is the appropriate language extension


Java Script Code
Here is a link to the code in a replit that runs easier (with the index, scipt files set up, not sure how to do with in the file tree). [https://replit.com/@ajprado/planeSeatingTest#script.js](https://replit.com/@ysears/ClientsideDarkgreenSystemadministrator#plane_seating.js)
The code is also in plane_seating.py in this folder
The code does the first part of the algorithm but I ran into problem with filling different size groups of passengers.
Algorithm

Create a plane with a given number of rows and columns accross.
Determine a % of economy plus passengers that will purchase seats.
Assign Econ Plus seats on either the first or last seat (0, length-1) of each row, which would be the window. Starting at the front of the plane and going back.
Create a list of regular (non Econ Plus) passenger groups, it is a list of list the first value is the name regular plus an index number, the 2nd value is a number representing the group size. The size of the group is assigned a random integer from 1 to the maximum party size. This continues until the maximum number of seats on the plane are accounted for ex) [[reg1,2],[reg2,3]...]
There is a function that determines how many seats are available in each row.
The list of regular passengers is then assigned seats starting with the largest group value. It loops through assigning the largest groups first and then working down to smaller and smaller groups until it is individual passengers
If there is a row with exactly the number of avialable seats as the largest unassigned group, then that group will be assigned that row. The plane will be updated to show their names taking the consecutive seats. This will look from the front of the plane to the back.

If there is not a row with the exact number, then the code will look for a row with more available seats than needed. If it find them it will take the first set of seats in a row with more seats available, updating the plane.

Only if it can't find either a row with exact or more seats, will it spit the group into two smaller parts. It will then look for two consective rows to put them in.

This continues for all groups of passengers until the plane is full.

At some point groups might be split into individuals to take the empty seats on the plane.