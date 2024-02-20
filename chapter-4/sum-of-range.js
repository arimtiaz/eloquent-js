function range(start, end) {
   let result = [];
   for (let i = start; i <= end; i++) {
     result.push(i);
   }
   return result;
 }
 
 console.log(range(1, 10)); 
 let z = 0 
 function sum(arr){
   for(let i = 0; i <= arr.length; i++){
      z = z + i 
   }  return z
 }
console.log(sum(range(1,10)))