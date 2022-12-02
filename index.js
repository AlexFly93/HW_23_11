// Є массив [1,2,3,1,5,6,1,2,5], треба використовуючи цей масив створити новий, в якому будуть присутні тільки тільки ті значення які повторюються.
// Результат буде [1,2,5]
// Якщо в джерельному масиві усі значення унікальні, то створюєте новий пустий масив.

// const nums = [1, 2, 3, 1, 5, 6, 1, 2, 5]

// function getSameNums(value, index, self) {
//   return self.indexOf(value) !== index;
// }
// const sameNums = nums.filter(getSameNums).splice(1);
// function getSameNums(array) {
//  let sameNums = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===array[i+1] ) {
            
//         }
//     }return sameNums;
// }


//Вариант с инета

    const nums = [1, 2, 3, 1, 5, 6, 1, 2, 5];

    const uniqSet = new Set();
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < i; j++)
        if (nums[j] === nums[i]) {
          uniqSet.add(nums[i]);
        }
    }

    const uniq = Array.from(uniqSet);

    console.log(uniq);