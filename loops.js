function doWhileLoop(arr)
{
  var arr1;
  do
  {
    arr1=arr.pop();
  }while(arr.length >0 && maybeTrue());
  return arr1;
};

function maybeTrue()
{
   return Math.random() >= 0.5;
};

function forLoop(arr)
{
  for(let i=1;i<25;i++)
  {
    if(i===1){
      arr.concat("I am 1 strange loop.");
    }
    else {
      arr.concat("I am ${i} strange loops.");
    }

  }
  return arr;
};

function whileLoop(num)
{
  var str="done";
  while(num>0)
  {
    console.log(num);
    num--;
  }
  if(num==0)
  return str;
}
