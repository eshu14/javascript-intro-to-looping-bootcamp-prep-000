function doWhileLoop(arr)
{
  var arr1;
  do
  {
    arr1=arr.pop();
  }while(arr.length >0 && maybeTrue());
  return arr;
};

function maybeTrue()
{
   return Math.random() >= 0.5;
};

function forLoop(arr)
{
  for(let i=0;i<25;i++)
  {
    arr.concat("I am ${i} strange loops.");
  }
  return arr;
};

function whileLoop(num)
{
  while(num>=0)
  {
    console.log(num);
    num--;
  }
  if(num==0)
  return 'done';
}
