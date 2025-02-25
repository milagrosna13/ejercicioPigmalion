//compara con dos array hasta llegar al total esperado

function solucionUno(nums, total) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == total) {
                return true;
            }
        }
    }
    return false;
}

console.log(solucionUno([1,2,4,4], 8));

console.log(solucionUno([1,4,3,9], 8));


// mejor en tiempo y recursos
// uso de un set para comparar diferencia en una sola pasada
// num + diferencia = total ---> diferencia = num -total 
function solucionDos(nums, total) {
    const visto = new Set();
    for (let num of nums) {
        let diferencia = total - num;
        if (visto.has(diferencia)) {
            return true;
        }
        visto.add(num);
    }
    return false;
}

console.log(solucionDos([1,2,4,4], 8));
console.log(solucionDos([1,4,3,9], 8));