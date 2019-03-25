const nums = [11213, 15111, 10110, 11011];

function countTens(arr) {
  // NORMAL WAY
  // const tensArr = arr.filter(function(num) {
  //     const numString = num.toString()

  //     if (numString.includes('10')) {
  //         return true
  //     } else {
  //         return false
  //     }
  // })

  // return tensArr.length

  // SHORT WAY
  // return arr.filter(num => num.toString().includes('10')).length

  // REDUCE WAY
  const sum = arr.reduce(function(acc, value) {
    if (value.toString().includes("10")) return acc + 1;
    else return acc;
  }, 0);

  return sum;
}

console.log(countTens(nums));

const objs = [{ a: 5, b: 10 }, { c: 1, d: 5 }];

function getValueSum(arr) {
  // let sum = 0

  // arr.forEach(function(obj) {
  //     const valueArr = Object.values(obj)

  //     valueArr.forEach(value => {
  //         sum += value
  //     })
  // })

  // return sum

  return arr.reduce(function(acc, val) {
    return (
      acc +
      Object.values(val).reduce((acc, objVal) => {
        return acc + objVal;
      }, 0)
    );
  }, 0);
}

console.log(getValueSum(objs));

function getNestedAmountOfKeys(arr) {
  let amountKeys = 0;

  arr.forEach(function(obj) {
    amountKeys += Object.keys(obj).length;
  });

  return amountKeys;
}

// console.log(getNestedAmountOfKeys(objs))

const nestedNums = [[1, 3, 5], [2, 4, 6], [7, 1, 9]];

const findTwelve = arr => {
  const matchingEl = arr.find(function(el) {
    const sum = el.reduce((acc, val) => acc + val, 0);

    return sum === 12;
  });

  return matchingEl;
};

console.log(findTwelve(nestedNums));
