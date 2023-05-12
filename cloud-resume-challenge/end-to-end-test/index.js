const fetch = require("node-fetch");

async function foo() {
    let obj;

    const res = await fetch('https://hr1w97khtd.execute-api.us-east-1.amazonaws.com/Prod/count')

    obj = await res.json();

    console.log(obj);

}

return foo();



async function twoHundred() { 
    let status;

    const response = await fetch('https://hr1w97khtd.execute-api.us-east-1.amazonaws.com/Prod/count').then((response) => {expect(response).to.have.property('status', 200)

    answer = await response.json();

    console.log(answer);
}

return twoHundred();
