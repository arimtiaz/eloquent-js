function reverse(arr){
    let bArr = []
    for(let i = 0; i < arr.length; i++){
        bArr.push(arr[i])
    }
    return bArr
}
function reverseInPlace(arr){
    for(let i = 0; i < Math.floor(arr.length/2); i++){
        let bArr = arr[i];
        arr[i] = arr[arr.length -1-i];
        arr[arr.length - 1 - i] = bArr;
    }
    return arr;
    
}

console.log(reverseInPlace([1,2,4,5,6,8]))