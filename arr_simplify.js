//Simplify HiLevel arr into OneLevel arr using Recursion
function func(arr){
    let newArr = [];
    for(let elem of arr){
        if(typeof elem == 'object'){
            newArr = newArr.concat(func(elem));
        }else{
            newArr.push(elem);
        }
    }
return newArr;
}



console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));
/*function will return 
[1, 2, 7, 8, 3, 4, 5, 6, 7]*/
  
  

