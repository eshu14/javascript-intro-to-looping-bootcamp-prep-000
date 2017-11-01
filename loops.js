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
  for(var i=0;i<25;i++)
  {

  }
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
