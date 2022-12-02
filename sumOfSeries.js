let X= 3;
let N = 5;

let sum=0;

if(N>0 && X>0){
    for(let i=0;i<N;i++){
        sum=sum+X**i
    }
    console.log(sum)
}else {
    console.log(-1)
}