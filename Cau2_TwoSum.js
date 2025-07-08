function findnumber() {
    const arr =  [1, 6, 3, 9, 4];
    const target_sum = 10;

    const map = new Map();

    for (let i = 0; i <= arr.length; i++) {
        const temp = target_sum - arr[i];      
        if (map.has(temp)) {
            return [map.get(temp), i];
        }
        map.set(arr[i], i);
    }
    return null;
}

console.log(findnumber());