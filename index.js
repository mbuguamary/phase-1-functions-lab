// Code your solution in this file!
const scuberHq=42;
function distanceFromHqInBlocks(blocks) {
  if (blocks>=42){
    return  blocks-scuberHq
    
  }else if (blocks<42){
    return scuberHq-blocks
  }
 
} 
const feet=264;
function distanceFromHqInFeet(blocks) {
   return distanceFromHqInBlocks(blocks)* feet; 
}
function distanceTravelledInFeet(start, destination){
  if(destination>start){
  return (destination-start)*feet;
  }else if (destination<start){
    return (start-destination)*feet;
  }
}
function calculatesFarePrice(start, destination) {
  let distance=0;
  if(distance<=400){
   return 0;
  } else if (distance>400 && distance<=2000){
  return 2.56;
  }
  
}