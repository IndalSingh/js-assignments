
console.log('this is fetch api assignment');

let btn = document.getElementById('btn');
let content = document.getElementById('content');

// making function 
function getdata(){
  url = "topic.txt"
  fetch(url).then((response)=> {
    return response.text();
  }) .then((data)=>{
      console.log(data);
  })
  
}
 getdata();
