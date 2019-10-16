// Фибоначчи рекурсивным методом
function getFibonachi(n) {
    if (n == 0) {
        return 0;
    } 
    else if (n == 1) {
        return 1;
    }
    else {
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
let result = getFibonachi(8);
console.log(result);