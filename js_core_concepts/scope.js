if(true){
    const data=58;
}

console.log(data);


for (const num of [1,2,3,4,5]){

}


const name='log';
function doMath(a,b){
    console.log(a,b);
    const sum=a+b;

    //sum is local scope
    const total=sum+10;
    console.log(name); // global scope

}

console.log(a,b);




