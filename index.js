function sumItems(array) {
  // Sum all the numbers in the array
  let res = 0;
  for (let i of array){
    if (Array.isArray(i)){
      res += sumItems(i);
    }else{
      res += i;
    }
  }
  return res;
}

module.exports = sumItems;