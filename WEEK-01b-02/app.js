//04b.Practice
// var a = "3";
// var b = "8";

// let tmp = a
// a = b
// b = tmp

// console.log("a is " + a);
// console.log("b is " + b);




//06b.Practice ex1
// const message = "    TASTE THE RAINBOW!  ";

// console.log(message.trim());


//06b.Practice ex2
// let word = "Dumbledore";

// console.log(word.charAt(word.length -1));


//06b.Practice ex3
// const word = "skateboard"; 

// console.log(word.slice(5));
// console.log(word.replace("o","e"));

// const wordboard = word.slice((5));
// const facialHair = wordboard.replace("o","e");
// console.log(facialHair);




// 08.Pratique.md ex1
// const nom = prompt("Quel est ton nom ?");
// const age = prompt("Quel est ton âge ?");
// const adress = prompt("Ou habite tu ?");

// alert(`Voici ${nom} elle à ${age} et elle habite à ${adress}`);


//08.Pratique.md ex2
// let prixHorsTVA = Number(prompt("Quel est le prix hors TVA ?"));
// let prixTVA = (prixHorsTVA/100)*21;

// alert(`Voici le prix avec TVA ${prixTVA}`);


//08.Pratique.md ex3
// let rayon = Number(prompt("Quel est le rayon de ton cercle ?"));
// let surface = (rayon**2)*3.14;

// alert(`voici la surface de ton cercle ${surface}`);


//08.Pratique.md ex4
// let num1 = Number(prompt("Entre le premier nombre."));
// let num2 = Number(prompt("Entre le deuxième nombre."));
// let somme = (num1 + num2);

// alert(`Voici la somme ${somme}`);




// 11b.Exercice.md ex1
// let nom = prompt("Quel est ton nom ?");
// let préférence = prompt("Tu préfère chat ou chien ?");

// if(préférence === 'chat'){
//     alert(`Bonjour, ${nom} Les chats sont null`);
// } else if (préférence === 'chien'){
//     alert(`Bonjour, ${nom} Les chiens pas mieux que les chats`);
// } else {
//     console.log('Recommence choisi entre chat ou chien :)');
// }


// 11b.Exercice.md ex2
// const mystery = ""; 

// if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
//     console.log("YOU GOT IT!!!");
// } else {
//     console.log("TRY AGAIN");
// }


// 11b.Exercice.md ex3
// let age = Number(prompt("Quel age avez vous ?"));

// if (age == 18){
//     alert(` Félicitations pour votre première année de conduite. Profitez du voyage !`);
// } else if (age < 18){
//     alert(`Désolé, vous êtes trop jeune pour conduire cette voiture. Coupure du moteur `);
// } else {
//     alert(`Sous tension. Profitez du voyage !`);
// }


// 11b.Exercice.md ex4
// let fruits = prompt("Quel est ton fruit préféré ?");

// if (fruits == 'bananas'){
//     alert(`J'aime aussi les bananes`);
// } else if (fruits == 'strawberry'){
//     alert(`J'aime beaucoup les fraises`);
// } 

// if (fruits == 'grape'){
// let colorgrape = prompt("tu préfère les les raisin violets ou verts ?");

// if (colorgrape == 'purple'){
//     alert(`J'aime trop les raisins violet !`);
// } else if (colorgrape == 'green'){
//     alert(`Je n'aime pas les raisins vert.`);
// } else {
//     alert(`Je ne comprend pas le mot ${colorgrape}`);
// }
// }




//12b.Exercises.md ex1
// const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];

// leaderboard.splice(1,1,'Luna');
// console.log(leaderboard);

// leaderboard.splice(3,1,'Draco')
// console.log(leaderboard);


//12b.Exercises.md ex2
// const initialArray = [
//     null,
//     true,
//     ["Apple", "two", undefined],
//     false,
//     ["three", "BeCode"],
//     4,
//     "I am a big bad wolf",
//     ["one"],
// ];

// console.log(initialArray.pop());
// console.log(initialArray);

// console.log(initialArray.shift());
// console.log(initialArray);

// initialArray.splice(1,1, 'two');
// console.log(initialArray);

// initialArray.splice(0,1,'one');
// console.log(initialArray);

// initialArray.splice(3,1, 'four');
// console.log(initialArray);

// initialArray.push('one');
// console.log(initialArray);

// console.log(initialArray.pop());
// console.log(initialArray);

// initialArray.push('one');
// console.log(initialArray);

// console.log(initialArray.pop());
// console.log(initialArray);

// console.log(initialArray.pop());
// console.log(initialArray);

// console.log(initialArray.pop());
// console.log(initialArray);

// initialArray.splice(2,1, 'three');
// console.log(initialArray);


// 12b.Exercises.md ex3
// const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];

// const result = [planets.splice(0,1,'Mercury'),planets.push('Saturne')];
// console.log(planets);




//13.Objects.md ex1
// const product ={
//     nom: "iPhone 15",
//     inStock: "true",
//     prix: 1249.90,
//     IncludedInPackage: ["étui", "écouteurs", "chargeur"],
// };


//13.Objects.md ex2
// const restaurant = {
//     name: "Ichiran Ramen",
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: "Brooklyn",
//     state: "NY",
//     zipcode: "11206",
// };

// const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
// console.log(fullAddress);




//16.ForLoops.md ex1
// for (let i= 2; i <= 20; i+=2){
//     console.log(i);
// }

// for (let i= 1; i <= 19; i+=2 ){
//     console.log(i);
// }

// for (let i= 100; i>= 1; i-=10){
//     console.log(i);
// }

// for (let i=25; i>=0; i-=5){
//     console.log(i);
// }

// for (let i=10; i<=1000; i*=10){
//     console.log(i);
// }


//16.ForLoops.md ex2
// const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];

// for (let i=5; i>= animals.length - 1; i--){
//     console.log(animals[i]);
// }


//16.ForLoops.md ex3

// const users = [
//         { firstName: "Vito", lastName: "Corleone" },
//         { firstName: "William", lastName: "Wallace" },
//         { firstName: "Harry", lastName: "Potter" },
//         { firstName: "Amadeus", lastName: "Mozart" },
//         { firstName: "Barack", lastName: "Obama" },
//     ];

// for (let i=0; i<users.length; i++){
//     console.log(`${i + 1}. My full name is ${users[i].firstName} ${users[i].lastName}.`);
// }


//16.ForLoops.md ex4
// const seatingChart = [
//     ["Colas", "Benoit", "Elodie"],
//     ["Sola", "Irina", "Antonino", "Eli"],
//     ["John", "Maryna", "Naike", "Fabrice"],
// ];


// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`Row ${i+1}`);
//     for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//     }
// }