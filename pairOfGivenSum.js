let givenArray = [[8,7,2,5,3,1],[5, 2, 6, 8, 1, 9]];
let targetNumber = 12;

function findPairOfSum(array,target){

    let pairs = new Map();
    let solution = [];
    let foundSolution = false;
    array.forEach((num)=>{
        if(foundSolution){
            return;
        }
        if(pairs.get(num)){
            solution.push(num,pairs.get(num))
            foundSolution = true;
        }else{
            let secondNum = target - num;
            pairs.set(secondNum,num);
        }
    })
    return solution;
}


givenArray.forEach(array=>{
    console.log(findindicesOfSum(array,targetNumber))
})

// space O(n)
//  time O(n)