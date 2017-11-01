function doWhileLoop(arr){
  while(arr.length >0 && maybeTrue())
  {
    arr.pop();
  }
  return arr;
};
function maybeTrue() {
   return Math.random() >= 0.5;
};
