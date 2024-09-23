const num1 = [1, 8, 3, 4, 5];
const num2 = [6, 7, 8, 0, 0];

// for(const elements in sumOfNum){
//     if (num1.[1] >= num2[0])
// }

nums1 = num1.filter(item => typeof item === 'integer');
nums2 = num2.filter(item => typeof item === 'integer');
// sumOfNum.length(m + n)

const sumOfNum = nums1.concat(nums2);

sumOfNum.sort(function(a, b){ 
    return a - b
});

console.log(nums1);