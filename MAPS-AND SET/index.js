const string = (str) => [...new Set(str)].join('');

const A = string("mayank")

console.log(A);




const maps = (str2) => {
    let list = new Set(str2.split('')),
        result = new Map(),
        count = 0;
    for (item of list) {
        for (var i = 0; i < str2.length; i++) {
            if (item === str2[i]) {
                count++;
            }
        }
        result.set(item, count);
        count = 0;
    }
    return result;
}
console.log(maps('mayank'));