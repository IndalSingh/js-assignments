let data = {
    first_name: 'John',
    last_name: 'Adams',
    job_title: 'Software Engineer'
 };
 const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
 }
 }
//  fetch('https://reqres.in/api/users', options)
//     .then(res => res.json())
//     .then(res => console.log(res));