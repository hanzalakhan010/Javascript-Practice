let arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20) + 1);
console.log(arr);

function sort() {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => console.log(arr[i]), arr[i]);
    }
}

sort(arr)