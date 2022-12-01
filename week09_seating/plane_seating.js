let maxGroup = 3
let planeRows
let seatsWide
let percentEcoPlus

console.log("test")
let newPlane = createPlane(5,10) //seats wide, rows
console.log(newPlane)

//console.log(newPlane.length) //rows
//console.log(newPlane[0].length) //cols
printPlane(newPlane)

//console.log(planeSize(newPlane))
//console.log("avialable seats" + countAvailable(newPlane,0))
sellEconPlus(newPlane,30)
printPlane(newPlane)

//printPlane(assignSeat(newPlane,"test",8,2))


//console.log("avialable seats" + countAvailable(newPlane,0))
//console.log(newPlane[0]) //first row

//console.log(sellGroupTix(newPlane))
//console.log(availableInRow(newPlane))
let regSold = sellGroupTix(newPlane)
printPlane(seatRegular(newPlane,regSold))

function planeSize(plane){ //finds the total number of seats on a plane
  return plane.length * plane[0].length
}

function createPlane(rows,cols){  //creates a list of rows and seats as a list of lists
  let plane = []
  for (let i = 0; i < cols; i++) {
    let planeRow=[]
    for (let j=0; j<rows;j++){
      planeRow.push("available")
    }
    plane.push(planeRow)
  }
  return plane
}

function printPlane(plane){ //prints out the plane to console
  let output= "";  
  for(let c=0; c<plane.length;c++){
    for(let r=0; r<plane[0].length; r++){
      output = output + " , " + plane[c][r]
    }
    output = output + "\n"
  }
  console.log(output)
}

function sellEconPlus(plane,percentEP){
  let EPname
  let assigned 
  let numberEP = Math.floor(planeSize(plane)*percentEP/100)
  console.log(numberEP)
  console.log(plane[0][0])
  for(let i =0; i<numberEP; i++){
    EPname = "EcoPlu" + (i+1)
    assigned = false 
     for(let r=0; r<plane.length;r++){
       
       if(plane[r][0]=="available" && assigned==false){
        plane[r][0]=EPname
         assigned=true
       }
       if(plane[r][plane[r].length-1]=="available" && assigned==false){
        plane[r][plane[r].length-1]=EPname
         assigned=true
       }
     }
    
  }
}

function countAvailable(plane,regSold){
  let seatsSold = 0
  for(let c=0; c<plane.length;c++){
    for(let r=0; r<plane[0].length; r++){
      if(plane[c][r]!="available"){
        seatsSold ++
      }
    }
  }
  return planeSize(plane) - seatsSold - regSold
}

function sellGroupTix(plane){ // this returns a list of lists the first part is the passenger ID (reg1,reg2,...) and the second part is the number of people in the group up to the maxGroup limit (set at the start).  This will not allow the plane to oversell any tickets. 
  let randomNum = 0
  let regList = []
  let openSeats = countAvailable(plane,0)
  for(let i=0; i<30;i++){ // TODO? probably should do a "while loop" here but this works fine for now
    randomNum = Math.ceil(Math.random()*maxGroup)
    if(openSeats>=randomNum){ //makes sure the plane does not over sell. 
        regList.push(['Reg'+(1+i), randomNum])
        openSeats = openSeats - randomNum
    }
  }
  return regList
}

function availableInRow(plane){ //this creates a list of how many empty seats are in each row of the plane
  let rowAvailable
  let availablePerRow = []
  for(let i =0; i<plane.length;i++){
    rowAvailable = 0
    for(let j= 0; j<plane[0].length;j++){
      if(plane[i][j]=="available"){
        rowAvailable ++
      }
    }
    availablePerRow.push(rowAvailable)
  }
  return availablePerRow
}

function seatRegular(plane,regList){
  let assignedYet
  seatsOpen = []
  seatsOpen =  availableInRow(plane)
  for(let s = maxGroup; s>0; s-- ){// starts with largest possible group size and goes down to 1
   for(let x = 0; x<regList.length;x++){
      
     if(regList[x][1]==s){ //if the group size is the largest so far
       unassigned = true
       for(let r=0; r<seatsOpen.length; r++){
       
         if(regList[x][1]==seatsOpen[r] && unassigned){
           console.log("sell " + regList[x][0] +" with size " + regList[x][1] + " to row"+ r)
           plane = assignSeat(plane,regList[x][0],r,regList[x][1])
           unassigned = false
           
         }
       }
       
     }
   }
    
  }
    
  return plane
}

function assignSeat(plane,name,row,partySize){ // takes a plane, name, row and party size and updates the plane with the first available seats in that row
    let updatedPlane = plane
    for(let i =0; i<plane[0].length; i++){
      if(plane[row][i]=="available" && partySize>0){
        updatedPlane[row][i]=name
        partySize--
      }
    }
    return updatedPlane
}