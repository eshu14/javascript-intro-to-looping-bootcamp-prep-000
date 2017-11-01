function doWhileLoop(arr){
  //var len=arr.length;
do {
    arr.pop();
    }
  return arr;
}while(arr.length >0 && maybeTrue());
function maybeTrue() {
   return Math.random() >= 0.5;
}
