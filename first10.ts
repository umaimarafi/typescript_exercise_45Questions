//==========================QUESTION 2 ==========================//
 
let varname = "umaima";
console.log("Hello "+ varname +" would you like to learn some python today?");

//=========================QUESTION 3 ==========================//
console.log(varname.toUpperCase());
console.log(varname.toLowerCase());
//console.log(varname.toTitleCase());

//========================QUESTION 4 ==========================//
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
 //=======================QUESTION 5 ==========================//
 let person = " Albert Einstein ";
 let message = `once said ,"A person who never made a mistake never tried anything new"`;
 console.log(person , message);
 
 //======================QUESTION 6 ===========================//
 let favperson ="\t\tAlbert\t Einstein\n";
 console.log(favperson);
let fav="Albert Einstein";
console.log(fav);

//=======================QUESTION 7 /8 ===========================//
console.log ("5+3   ",5+3);
console.log("12-4   ",12-4);
console.log("2*4    ",2*4);
console.log("32/4   ",32/4);
//=======================QUESTION 9 ============================//
let favno=7;
let mssg= "My favourite no is\t";
console.log(mssg,favno);

//======================= QUESTION 10 =========================//
//adding comments 
//comments are added above each question by mentioning question no above each.
 
//======================= QUESTION 11 =========================//
let Names=['Biya','Rida','Anna','Hamna','Isma'];
console.log(Names[0]);
console.log(Names[1]);
console.log(Names[2]);
console.log(Names[3]);
console.log(Names[4]);

//====================== QUESTION 12 =========================//
let msg= `Wellcome homie`;
console.log(Names[0] , msg);
console.log(Names[1] , msg);
console.log(Names[2] , msg);
console.log(Names[3] , msg);
console.log(Names[4] , msg);

//==================== QUESTION 13 ==========================//
let transport=['TESLA','BMW','Ferrari','FORTUNER']
let stat=` I would like to own a `;
console.log( stat , transport[0]);
console.log( stat , transport[1]);
console.log( stat , transport[2]);
console.log( stat , transport[3]);

//==================== QUESTION 14 =========================//
let people=['Mummy','Afia','Akasha'];
let invitation= `PLEASE JOIN US THIS SUNDAY FOR DINNER`;
let i=0;
for( i=0;i<=2;i++)
{
console.log(people[i] ,invitation);
};

//=================== QUESTION 15 =========================//
console.log(people[0], "I can't make it to Dinner");
people.splice(0,1,"Umaima");
console.log(`modified list is ` , people);
//printing invitation messages to the people on list
let j=0;
for( j=0;j<=2;j++)
{
console.log(people[j] ,invitation);
};

//======================== QUESTION 16 ====================//
console.log(`We just foound a bigger dinner tablle`);
people.splice(0,0,"RAFAY"); //adding element in begining
people.splice(2,0,"Rida"); //adding element in middle
people.push("Biya");       //adding element at the end 
console.log(people);       //modified list
let k=0;
for( k=0;k<=5;k++)                      //invitations to the new modified list
{
console.log(people[k] ,invitation);
};

//====================== QUESTION 17 ======================//
console.log("SORRY WE COULD INVITE ONLY  TWO GUESTS ON DINNER");
let refusal=` SORRY! WE CAN'T INVITE YOU ON DINNER`;
console.log(people.pop() , refusal);
console.log(people.pop() , refusal);
console.log(people.pop() , refusal);
console.log(people.pop() , refusal);
console.log(`Remaining people on list are `,people);                  // to see remaing two peoples on list
//printing messages to remaing people that they are still invited
let b=0;
for(b=0;b<=1;b++)
{
console.log(people[b], "you are still invited");
};
//removing remainng people from list
people.pop();
people.pop();
//checking that the list is now empty
console.log(people , `list is empty`);


//======================================== QUESTION 18 ==================================//
let places=['GERMANY','SYDNEY','ARABIA','TURKEY','AUSTRALIA'];
console.log(places);                        //original order
let sortedlist=places.slice().sort();       //aphabetical order
console.log(sortedlist);
console.log(places);                        //original order
console.log(places.reverse());              //reverse
console.log(places.reverse());              //back to original
console.log(places.sort());                 //sort to alphabetical order
console.log(places.reverse());              //sort to reverse order

//=============================QUESTION 19 ===============================================//
console.log(`No of people inviting on dinner till program 14 to 18 ` , people.length);

//=========================== QUESTION 20 ================================================//
let languages=['URDU','PASHTO','ARABIC','SINDHI','BRAHWI'];
console.log(languages);

//========================== QUESTION 21 =================================================//
var object_name={
    mountains:['HIMALIYA','K2','KARAKORAM','MOUNT EVEREST']
}
console.log(object_name);
//========================QUESTION 22 ======================//
//INDEX ERROR 
let array=['a1','b1','c1'];
console.log(array[4]);

//======================== QUESTION 23 ====================//
//=========== true conditions =================//
 let langspoken ='urdu';                                          //first true condition 
 console.log(`langspoken = urdu , I predict true`);
 console.log(langspoken == 'urdu');
                                                                  //second true consition 
 let num1 =5,num2=2;
 console.log(`let sum of num1 and num2 (5+2=7) , I predict true`);
 console.log(num1+num2 ==7);
   //third true condition
 let a1=18,b1=12;
 console.log(`let difference is less than 10 , I predict true` );
 console.log(a1-b1<10);
 //4th true condition
 let anum='ANTARCATICA';                                               //case sensitive 
 console.log(" anum has the string antarcatica,I predict true");
 console.log(anum=='ANTARCATICA');                                     //case sensitive comparison
//5th true condition
 let fruit=['apple','mango','banana'];
 console.log("the legth of array is 3,I predict true");
 console.log((fruit.length)==3);                                       //array lenth comparison
 //================== false consotion logics =================================//
 let lang="urdu";
 console.log(`langspoken = urdu , I predict false`);
 console.log(lang == 'urd');
                                                                  //second true consition 
 let n01 =5,n02=2;
 console.log(`let sum of num1 and num2 (5+2=7) , I predict false`);
 console.log(n01+n02 == 12);
   //third true condition
 let ab1=18,cd=12;
 console.log(`let difference is greater than 10 , I predict false` );
 console.log(ab1-cd>10);
 //4th true condition
 let numbr='ANTARCATICA';                                               //case sensitive 
 console.log(" anumbr has the string antarcatica,I predict false");
 console.log(numbr =='cantt');                                     //case sensitive comparison
//5th true condition
 let Vfruit=['apple','mango','banana'];
 console.log("the legth of array is 3,I predict false ");
 console.log((Vfruit.length)!=3); 

 //=============================== QUESTION 24 ===================================//
 // Tests for equality and inequality with strings
 let str1="Choppers",str2="helipads";
 console.log("THE STRINGS PROVIDED BY USER ARE SAME , I PREFER FALSE");
 console.log(str1==str2);
 console.log("THE STRINGS PROVIDED BY USER ARE NOT SAME,I PREFER TRUE");
 console.log(str1!=str2);
//Test using the lower case function//
let lcase='UMAIMA';
 console.log("the string is in lower case , i predict true");
console.log(lcase.toLowerCase());
//TEST FOR ITEM IN ARRAY 
let ary=['apple','mango','banana','orange'];
console.log( " ITEMM is present in ARRAY");
console.log(ary.indexOf('mango'));
//=============================== QUESTION 25 ====================================//
// alien color 1//
let alien_colour = "green";
if(alien_colour=='green'){
  console.log("player just earned 5 point");
}
if(alien_colour != 'green'){}

//============================= QUESTION 26 ======================================//
if(alien_colour=='green'){
  console.log("player just earned 5 point");
}
else{console.log(" player earned 10 points")};

//============================= QUESTION 27 =====================================//
if(alien_colour=='green'){
  console.log("player just earned 5 point");
}
else if(alien_colour = 'yellow'){console.log("player earned 10 points")}
else if(alien_colour='red')
{console.log("player just earned 15 points")}

//============================ QUESTION 28 ====================================//
//stage of life//
let age = 18;
if(age <2 )
{
  console.log(" PERSON IS BABY");
}
else if(age >=2 && age <4 ){
console.log(" PERSON IS TODDLER ")
}
else if(age >=4 && age < 13 ){
  console.log(" PERSON IS A KID ")
}
else if(age >=13 && age< 20){
  console.log("PERSON IS A TEENAGER");
}
else if(age >=21 && age< 65){
  console.log("PERSON IS ADULT ");
}
else if(age>65){
  console.log("person is adult");
}

//============================= QUESTION 29 ==============================//
//ARRAY OF FAV FRUITS//
 let favfruit=['apple','mango']
 if(favfruit.includes('apple')){
console.log("you liked apple");
 }
 else if(favfruit.includes('mango')){
  console.log("you liked mango");
 }
  //================================QUESTION 30  ===========================//
  
let  usernames = ['admin', 'afia', 'rida', 'biya'];

 usernames.forEach(username => {
  if (username.toLowerCase() === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}); 
//===============================QUESTION 31 ==============================//
 usernames.length=0;
if(usernames.length === 0){console.log(`we need to find some users`)};

//=============================QUESTION 32 ================================//
let current_users =['umaima','afifa','rafy','zaryab','sheery'];
let new_users =['umaima','sheery','meer','hassen','priya'];
for (let  newUsername of new_users) {
  const usernameExists = current_users.some(
    (currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase()
  );

  if (usernameExists) {
    console.log(`Username '${newUsername}' is not available. Please choose a different one.`);
  } else {
    console.log(`Username '${newUsername}' is available.`);
    current_users.push(newUsername); // Add the new username to current_users if it's available.
  }
}

//========================== Question 33 ========================================//
let ordinalno = [1,2,3,4,5,6,7,8,9];
for(let ordinals of ordinalno){
 let sufixx:string;
 if (ordinals == 1 ){
  sufixx='st';
 }
 else if (ordinals == 2){
  sufixx ='nd';
 }
 else if (ordinals == 3){
  sufixx ='rd';
 }
 else{
  sufixx='th';
 }
 console.log(`${ordinals}${sufixx}\n`)
}

//=========================QUESTION 34 ============================================//
let pizza = ['peperoni','Quattro Formaggi','pineapple','mushroom and cheese','pesto']
for(let food of pizza){
  console.log(`I really like ${food} pizza`);
}
console.log(`I love pizza for its unparalleled versatility, offering a canvas for endless flavor combinations,
from savory to sweet, satisfying any craving. Its convenience and ability to bring people together make it the 
ultimate comfort food for gatherings and solo indulgence alike. The perfect fusion of melted cheese, savory sauce,
and a variety of toppings creates a mouthwatering experience that never gets old.`);

//==========================QUESTION 35 =========================================//
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// PrintIng just  the names of the animals
console.log("List of animals:");
for (let animal of animals) {
  console.log(animal);
}

// Printing  a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
  switch (animal) {
    case "Dog":
      console.log(`A ${animal} would make a great pet.`);
      break;
    case "Cat":
      console.log(`A ${animal} can be an independent companion.`);
      break;
    case "Rabbit":
      console.log(`A ${animal} is a cute and gentle friend.`);
      break;
  }
}
// Printing what these animals have in common
console.log("\nAny of these animals would make a great pet!");



//====================== QUESTION 36 =========================//
function make_shirt(size: string, message: string){
  console.log(`You've ordered a ${size}-sized shirt with the message: "${message}"`);
}

// Calling the function
make_shirt("Large", "I ❤ TypeScript");



//=====================QUESTION 37============================//
function makeshirt(size:String='LARGE', message:String="I ❤ TypeScript"){
  console.log(`You've ordered a ${size}-sized shirt with the message: "${message}"`);
}

// Calling the function
makeshirt();    // makeng large shirt with default msg
makeshirt('medium');           //medium shirt with default msg 
makeshirt('small',"This is umaima");


//=================================QUESTION 38 ==================//
function describe_city (city:string ,country:string="unkown"){
  console.log(`${city} is in ${country}`);
}
describe_city('KArachi','pakistan');
describe_city('sukhar','PAkistan');
describe_city('newyork');

//=====================QUESTION 39 ===============================//
function city_country(city:string , country:string){
  console.log(`${city},${country}`);
}

city_country('Karachi','Pakistan');
city_country('Islamabd',"Pakistan");
city_country('Lahore','Pakistan');


//=================== QUESTION 40 ================================//
interface Album {
  artist: string;
  title: string;
  tracks?: number; // Optional number of tracks
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist,
    title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

// Example calls to the function
const album1 = makeAlbum("Artist1", "Album1");
const album2 = makeAlbum("Artist2", "Album2", 12); // Example with the number of tracks
const album3 = makeAlbum("Artist3", "Album3");

// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);

//======================== QUESTION 41 ===============================//
let  magicianNames: string[] = ["john", "james", "briyan", "andrew"]
function showMagicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}
showMagicians(magicianNames);

//======================== QUESTION 42 ================================//
function make_greet(greeting:string[]){
  for(let greet of greeting){
    console.log(`hi! this is ${greet} the great megician`)
  }
}
let newnames = make_greet;
make_greet(magicianNames)

//==================== QUESTION 43 =================================//
make_greet(magicianNames);
showMagicians(magicianNames);

//===================== QUESTION 44 =================================//
function orderSandwich(...items: string[]) {
  // Process the items to generate a summary
  const summary = `You ordered a sandwich with ${items}`;
   console.log(summary);
}

orderSandwich("tomatoes");
orderSandwich("iceberg");
orderSandwich();

//==================== QUESTION 45 =================================//
function storeCarInfo(manufacturer: string, modelName: string, options: { [key: string]: any }) {
  // Create an object to store car information
  const carInfo: { [key: string]: any } = {
    manufacturer,
    modelName,
    ...options, 
  };

  // Print the object to verify the stored information
  console.log(carInfo);
}
 // Call the function with required information and additional data
storeCarInfo("Toyota", "Camry", { color: "Blue", feature: "Sunroof" });
