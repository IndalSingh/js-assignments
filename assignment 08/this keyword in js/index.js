// case:1
// alone, this refers to the global object
console.log(this);


// case :2
// defination : in a regular fuction, this resfers to the global object
function devide() {
     var dev= 12/2;
     console.log("sum of two number is: "+dev);
    console.log(this);
}
devide();



// case:3
// defination: in a method this refers to the owner obejct
console.log("indal");
let indal = {
    name : 'sept',
    heightestQuali:'bachelors',
    mul:function(){
        var mul= 2*2;
        console.log("sum of two number is: "+mul);
        console.log(this);

    }

}
indal.mul();



// case:4
// defination: in a function, in strict mode, this is undefined
"use strict"
function sum() {
            var add= 2+2;
            console.log("sum of two number is: "+add);
            console.log(this);
}
sum();




// bind()  method

// defination:
//  "Variables has local and global scopes. Let's suppose that we have two variables
//  with the same name. One is globally defined and the other is defined inside a
//  function closure and we want to get the variable value which is inside the
//  function closure. In that case we use this bind() method. 

            //   or
            
// bind() returns a bound function that, when executed later,
//  will have the correct context ("this") for calling the original function.


var myButton = {
    content: 'OK',
    click() {
      console.log(this.content + ' clicked');
    }
  };
  
  myButton.click();
  
  var looseClick = myButton.click;
  looseClick(); // not bound, 'this' is not myButton - it is the globalThis
  
  var boundClick = myButton.click.bind(myButton);
  boundClick(); // bound, 'this' is myButton

























// let awesomePeople={
//     firstPerson: 'shhivam sir',
//     secondPerson: 'vijay',
//     thirdPerson : 'awdhoot',
//     lastPerson:'indal'
// }
// console.log("aws");

// function about(){
//      console.log(`we have such amazing persons in the techcooper like ${this.awesomePeople.firstPerson}`);
// }
// console.log("awsdf");

// let aws= about.bind(awesomePeople);
// aws();
// console.log("ish");