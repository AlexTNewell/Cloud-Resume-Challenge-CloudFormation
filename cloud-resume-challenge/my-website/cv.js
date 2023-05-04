fetch('https://hr1w97khtd.execute-api.us-east-1.amazonaws.com/Prod/get')
    .then(response => response.json())
    .then((data) => {
        document.getElementById('replaceme').innerText = data.count
    })