function strSum(arr){
    let newStr = '';
    
    for(let elem of arr){
        if(typeof elem == 'object'){
            newStr += strSum(elem);
        }else{
            newStr += elem;
        }
    }
    return newStr;
}

console.log(strSum(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));