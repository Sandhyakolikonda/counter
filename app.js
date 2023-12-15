let count = 0;
let num = document.getElementById("num");
let store = document.getElementById("store");
let sum = document.getElementById("sum");

increment = () => {
    count += 1;
    num.innerText = count;
};

decrement = () => {
    if (count > 0) {
        count -= 1;
        num.innerText = count;
    }
};

let arr = [];
submit = () => { 
    arr.push(count);
    store.innerText = arr;
    count = 0;
    num.innerText = count;
};

let tot = 0;
add = () => {
    let n = arr.length;
    for(let i = 0 ;i<n;i++){
        tot+=arr[i];
    }
    sum.innerText = `The total sum is: ${tot}`;
    arr = [];
    store.innerText = "-";
    num.innerText = 0;
};

function reset(){
    num.innerText = 0;
    store.innerText = "-";
    sum.innerText = `The total sum is: ${0}`;
    arr = [];
    tot = 0;
    count = 0;
}
