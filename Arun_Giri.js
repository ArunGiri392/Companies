function getNbyNMatrix(arrayIn){
  // sample input:[1,2,3,4,5,6,7,8,9]
  // return array[][] 
  if (arrayIn.length === 1){
    return arrayIn
  }

  var i = 1;
  let twoDArray = []
  for (i = 1; i<arrayIn.length;i++){
      if (i * i === arrayIn.length){ //if the length of matrix is the square number, then we know it is n * n matrix
       
        number = i;
        for(j = 0; j < arrayIn.length;j+=i){
         twoDArray.push(arrayIn.slice(j,number)) //then slicing the array(which gives an array itself) and appending it in the two2d array variable.
         number += i;
        }
       return twoDArray;
      }
      
      else if (i* i > arrayIn.length){ //if at certain point, i*i(square is greater than the length of matrix),we know we it is not the n * n matrix.
     
        trueArray = arrayIn.slice(0,(i-1)*(i-1)) //so to make it square matrix, slice from 0 to (i-1)which will give th e square matrix.-1 because we do want to omit so extra numbers.
        
        number = i-1;
        for(j = 0; j < trueArray.length;j+=i-1){
         twoDArray.push(trueArray.slice(j,number)) //now slicing this n*n array and appending it in the two2D array variable and returning it.
         number += i-1; // i -1 because in this case, we want to delete some numbers ie do not want to slice all the numbers .
       }
       return twoDArray;
        
     }
  

  }

}
console.log(getNbyNMatrix([1,2,3,4,5,6,7,8,9]))
function printTheMatrix(matrixIn){
  // this function should only accept nxn matrix

  
  var number = Math.sqrt(matrixIn.length); //finding the square root of the length of  2D matrxi. 
  var realLength = Math.round(number * number); // if we multiply the obtained length of 2d matrix with 2d matrix itself,we get the length of all elements in the square matrix because it is n*N matrix.
  //math .round because math.sqrt is not accurate it might give 2.99 so rounding it to make the integer value.

 for (i = 0; i < realLength ; i++){
   var result = "";
   for(j=0; j<realLength; j++){ //using two loops to print the 2D array.
     result += matrixIn[i][j] + " "; //converting it into string to make it look proper in console.
     
   }
   console.log(result);
   
 }
 return ""
  
  // print the matrix in console
  
  // sample 1d input:[1,2,3,4,5,6,7,8,9]
  // Expected output in cosole
  // 1 2 3
  // 4 5 6
  // 7 8 9
  
  // sample 1d input:[1,2,3,4,5,6,7,8]
  // Expected output in cosole
  // 1 2
  // 3 4
}

var oneDArray = [1,2,3,4,5,6,7,8,9];
var twoDArray = getNbyNMatrix(oneDArray);
printTheMatrix(twoDArray);


function testMatrix(myMatrix) {
  var isValidMatrix = true;
  if(myMatrix.length)
    {      
      myMatrix.forEach(function(rowIn){
        if(!rowIn.length){
          isValidMatrix = false;
          return;
        }
      })
    }else{
      isValidMatrix = false;
      return;
    }
  if(!isValidMatrix){
    console.error("Invalid matrix");
  }             
}
