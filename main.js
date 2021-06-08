
let n = 2;
function exampleLinear(n) {
    for(var i =0; i < n; i++){
        console.log(i)
    }
}
exampleLinear(n);

//example of quardatic time 
let quard = 2;
function quardaticTime(quard){
    for(var l = 0; l < quard; l++){
        console.log(`value of quardatic equation is ${l}`)
        for(var j = 0;j<=n; j++){
            console.log(j)
        }
    }
}
quardaticTime(quard)

//example of cubic
let cub = 3;
function cubeExample(cub){
    for(var i = 0; i < cub; i++){
        console.log(`Value of cube is ${cub}`)
    }
    for(var j = 0; j < cub; j++){
        console.log(`Value of cube is ${cub}`)
    }
    for(var j = 0; j < cub; j++){
        console.log(`Value of cube is ${cub}`)
    }
};
cubeExample(cub)