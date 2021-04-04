const myArray = [2,1,1,2,3,5,1,2,4];
const myArray2 = [2,5,1,2,3,5,1,2,4];
const myArray3 = [2,3,4,5];

function returnRecNum(myArray){
    for(let i =0;i<myArray.length-1;i++){
        for(let j=i+1;j<myArray.length;j++){
            if(myArray[i] === myArray[j]){
                return myArray[i];
            }
        }
    }
    return undefined;
}

function returnRecNum2(myArray){
    let map = {};
    for (let i=0;i<myArray.length;i++){
        if(map[myArray[i]] !== undefined){
            return myArray[i];
        } else {
            map[myArray[i]] = i;
        }
        console.log(map)
    }
}

console.log(returnRecNum2(myArray3));
