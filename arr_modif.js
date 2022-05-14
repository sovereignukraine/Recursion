/*IMPORTANT!! When modifying a HiLevel arr need to use regular for-loop
instead of for-of loop*/

//this function macking square of each element in HiLevel Arr

function arrMod(arr){
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'object'){
            arr[i] = arrMod(arr[i]);
        }else{
            arr[i] = arr[i]**2;
        }
    }
    return arr;
}

console.log(arrMod([1, [2, 7, 8], [3, 4], [5, [6, 7]]])); 
//output [ 1, [ 4, 49, 64 ], [ 9, 16 ], [ 25, [ 36, 49 ] ] ]