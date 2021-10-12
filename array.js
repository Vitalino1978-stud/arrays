// const items = ['item1', 'item2', 'item3'];
// const copy = [];

// // for (let i = 0; i < items.length; i++) {
// //     copy.push('New' + items[i]);
// // }

// items.forEach(function (elem, index, array) {
//     copy.push(index + 'New' + elem);
// })
// console.log(copy)

// forEach

// let array = [12, 5, 8, 130, 44]
// let newArray = array.filter(function (elem) {
//     return elem > 15
// });
// console.log(newArray)

// let array = [12, 5, 8, 130, 44]

// let isBigEnough = (elem) => elem > 15;
// let newArray = array.filter(isBigEnough)
// console.log(newArray)

// filter

// let nums = [1, 4, 9, 12, 50]
// let result = nums.map(function (elem) {
//     return elem * 2;
// })
// console.log(result)

// let nums = [1, 4, 9, 12, 50]
// let multyplyByTwo = (elem) => elem * 2;
// let result = nums.map(multyplyByTwo)
// console.log(result)

//map

// const array = [1, 2, 3, 4, 5]
// let total = array.reduce(function (acc, elem) {
//     console.log('Acc:', acc, 'Cuurent elem:', elem);
//     return acc + elem
// }, 10)
// console.log(total)
//reduce

// const obj = {
//   current: {
//     errors: {},
//     items: {
//       Foo: {data: 'foo data'}
//     }
//   }
// };

// const [key, val] = Object.entries(obj.current.items)[0];
// console.log(key);
// console.log(val);

const raw = {
  item1: { key: 'sdfd', value:'sdfd' },
  item2: { key: 'sdfd', value:'sdfd' },
  item3: { key: 'sdfd', value:'sdfd' }
};

const allowed = ['item1', 'item3'];

const filtered = Object.keys(raw)
  .filter(key => allowed.includes(key))
  .reduce((obj, key) => {
    return {
      ...obj,
      [key]: raw[key]
    };
  }, {});

console.log(filtered);