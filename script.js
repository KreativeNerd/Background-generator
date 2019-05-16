


class Animal {
    constructor(name, type, color) {
    	console.log(this)
        this.name = name
        this.type = type
        this.color = color
    }
}

class Cow extends Animal {
    constructor(name, type, color) {
        super(name,type,color)
    }
    moo () {
        console.log(`MOOO!!! My name is ${this.name} of ${this.type} type. I am color ${this.color}.`)
    }
}
const cow1 = new Cow('Dennis The Cow', 'Red Bororo', 'black as night')
const cow2 = new Cow('Odira the smart guy', 'black', 'black as light')


// // Advanced Arrays
// const array = [1,2,10,16];

// const double = []
// const newArray = array.forEach(num =>{
// 	double.push(num * 2);
// })
// console.log('forEach', double);

// // map, filter, reduce
// const mapArray = array.map(num => num * 2);
// console.log('map', mapArray);

// // filter
// const filterArray = array.filter(num => num > 5);
// console.log('filter', filterArray);
 
//  // reduce
//  const reduceArray = array.reduce((accumulator,num) =>{
//  	return accumulator + num
//  },5);
//  console.log('reduce', reduceArray);



// const multiply = (a,b) => a* b;
// const curriedMultiply = (a) => (b) => a*b
// const multiplyBy3 = curriedMultiply(0)
// console.log(multiplyBy3);


// function first(){
// 	var greet = "Hi";
// 	function second() {
// 		alert(greet);
// 	}
// 	return second;
// }

// var newFunc = first();
// newFunc();


// const first = ()=>{
// 	const greet = "Hi";
// 	const second =() =>{
// 		alert(greet);
// 	}
// 	return second;
// }


// const newFunc = first();
// newFunc();


// const name = "Sally";
// const age = 34;
// const pet = "horse";

// const greeting ="Hello " + name +" you seem to be " + age + ".What a lovely " + pet +" you have" ;
 

// const greetingBest =`Hello ${name} you seem to be ${age-10}.What a lovely ${pet} you have`;

// console.log(greeting);
// console.log(greetingBest);


// function greet(name="",age="30",pet="cat"){
// 	return `Hello ${name} you seem to be ${age-10}.What a lovely ${pet} you have`;
// }


// const greet = (name="Odira",age="30",pet="cat") => `Hello ${name} you seem to be ${age-10}.What a lovely ${pet} you have`;



//      using Ternary operator
    
// function isUserValid(bool){
// 	return bool;
// }
// // var answer = isUserValid(true) ?"You may enter" :"Access denies";

// // alert(answer);
// .........................................................

//        using if statement

// function isUserValid(bool){
// 	return bool;
// }

// function condition() {
// 	if (isUserValid(false)) {
// 		return "You may enter";
// 	}else{
// 		return "Access denied"
// 	}
// }

// var answer = condition();
// alert(answer)

// ----------------------------------------------------------
//                  SWITCH
// function moveCommand(direction){
// 	var whatHappens;
// 	switch (direction)  {
// 		case "forward":
// 		   whatHappens = "you encounter a monster";
// 		   break;
// 		case "back":
// 		   whatHappens = "you arrived home";
// 		   break;
// 		case "right":
// 		   whatHappens = "you found a river";
// 		   break;
// 		case "left":
// 		   whatHappens = "you ran into a troll";
// 		   break;
// 		default:
//            whatHappens = "please enter a valid direction";
// 	}
//     return whatHappens;
// }


// .................................................................
//                  FROM FULL Javascript TUTORIAL
// var database = [
// {
// 	username: "Odira", 
// 	password: "supersecret"
// },
// {
// 	username: "Chidiogor", 
// 	password: "smartgirl"
// },
// {
// 	username: "Abundance", 
// 	password: "great"
// },
// {
// 	username: "Ngozi", 
// 	password: "Littleangel"
// }
// ];
// var newsFeed = [
// {
// 	username: "odira",
// 	timeline: "I must learn Javascript"
// },
// {
// 	username: "Cornelius",
// 	timeline: "I must learn Html"
// },
// {
// 	username: "Onyejefu",
// 	timeline: "I must learn CSS"
// },
// ];

// var userNamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?");

// function isUserValid(username,password){
// 	for (var i = 0; i < database.length; i++){
// 		if(username === database[i].username &&
// 			password === database[i].password){
// 			return true;
// 		}
		
// 	}
//          return false;
// }

// function signIn(username,password){
// if(isUserValid(username,password)){
// 	console.log(newsFeed);
// }
//     else {
//     	alert("Sorry,wrong username and password")
//     }
// }

// signIn(userNamePrompt,passwordPrompt);



// var arr = [3,4,5,77,33,22,4,1,55,2,"cat","dog"]
// arr.sort();
// var q = prompt("what do you ant to remove?");
// var finder = arr.indexOf(q);
// var remover = arr.splice(finder,1);
// console.log(arr);


// var animals = ["cat","dog","rabbit","bird","fish"];
// var randomIndex = Math.floor(Math.random()*animals.length);
// var randomAnimal = animals[randomIndex];
// var message = prompt("which index value is "+ randomAnimal + "?");
// var response = (message == randomIndex)? 
//                "Correct your a Genus":"wrong it was "+randomIndex;
// alert(response);
// console.log(randomIndex);
// console.log(randomAnimal);
// console.log(response);


 // var newHolder = ["cat","dog","rabbit","bird"];
 // var q = prompt("what are you looking for?");
 // var p = newHolder.indexOf(q);
 // var message = p > -1?"found!":"Not there";
 // console.log(message);
 

        
        