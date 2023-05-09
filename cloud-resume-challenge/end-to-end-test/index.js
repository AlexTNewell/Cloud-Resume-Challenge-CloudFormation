async function foo() {
  let obj;

  const res = await fetch('https://hr1w97khtd.execute-api.us-east-1.amazonaws.com/Prod/count')

  obj = await res.json();

  console.log(obj)
}

foo();

if(foo()>=0) {
    console.log('PASS')     
}

else {
     console.log('FAIL')     
}
