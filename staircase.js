'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    for (let i = 0; i < n; i++) {
        let string = "";
        for (let j = 0; j < n-i-1; j++){
            string += " ";
        }
        for (let k = 0; k < i+1; k++){
            string += "#";
        }
        console.log(string);
    }

}

// N = 5
// ssss# s= 4, i=0, #=1
// sss## s= 3, i=1, #=2
// ss### s= 2, i=2, #=3
// s#### s= 1, i=3, #=4
// ##### s= 0, i=4, #=5

// s= n-i-1
// #= i + 1


function main() {
    const n = parseInt(readLine(), 10);

    staircase(6);
}