function fetchData(){
    fetch("https://reqres.in/api/users")
    .then(response =>{
        // if(!response.ok){
        //     throw Error("Error");
        // }
        return response.json();
    })
    .then(data =>{
        console.log(data.data);
        const html= data.data.map(user =>{
            return `<p>Name: ${user.first_name}</p>`
        })
        console.log(html)
        document.querySelector('#indal')
        .insertAdjacentHTML("afterbegin",html);
    })
     .catch( error =>{
        console.log(error)
    });
} 
fetchData();