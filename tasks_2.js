 // 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
 // ეს რიცხვი!!

//asnwer: 
// const number = 5;
// if (number < 0) {
//     console.log(`numver ${number} is negative`);
// } else {
//     number > 0;
//     console.log(` number ${number} is positive`);
// };


//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 
//asnwer:

// let operatore = '+';

// switch (operatore) {
//     case '+':
//         console.log(5 + 5);
//         break;
//     case '_':
//         console.log(5 - 5);
//         break;
//     case '*':
//         console.log(5 * 5);
//         break;
//     case '/':
//         console.log(5 / 5);
//         break;
//     default:("number is note defined")
//         break;
// }

// //3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!
// //asnwer: 

// let calculate = "+";
// if (calculate === "+") {
//     console.log(10 + 10);
// } else if (calculate === "-") {
//     console.log(10 - 10);
// } else if (calculate === "*") {
//     console.log(10 * 10);
// } else if (calculate === "/") {
//     console.log(10 / 10);
// } 


// //4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// // user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// // firstName,lastName,email,password არის სავალდებულო ველები
// // ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// // არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// // დალოგეთ "input is required" გამოიყენეთ if else
// //asnwer:

// let firstName = "eli";
// let lastName = "kvinikadze";
// let email = "elikvinikadze@gmail.com";
// let password = "555555";
// let phoneNumber = "505018";

// if (firstName !== "" &&
//     lastName !== "" &&
//     email !== "" &&
//     password !== "") {
//     console.log("succesfull registred");
// } else {
//     console.log("input is required");
// }

//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

// function years(age) {
//     if (age >= 60) {
//         console.log("თქვენ შეგიძლიათ აიღოთ პენსია.");
//     } else {
//         const years = 60 - age;
//         console.log(`თქვენ დაგრჩად ${years} წელი პენსიამდე.`);
//     }
// }
// years(55)

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

// function calculate(num1,num2,symbol) {
//     if (symbol === '+') {
//         console.log(num1 + num2);
//     } else if (symbol === '-') {
//         console.log(num1 - num2);
//     } else if (symbol === '*') {
//         console.log(num1 * num2);
//     } else if (symbol === '/') {
//         console.log(num1 / num2);
//     }
// }
// calculate(15, 5, '+')


//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

// function checkPasswordStrength(password) {
//     if (password.length == 0) {
//         console.log("პაროლი არ შეიცავს არცერთ სიმბოლოს");
//     } else if (password.length < 8) {
//         console.log("პასროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს");
//     } else if (password.length > 16) {
//         console.log("პაროლი უნდა შეიცავდეს მაქსიმუმ 16 სიმბოლოს");
//     } else {
//         console.log("პაროლის სიძლიერე საკმარისია");
//     }
// }
// checkPasswordStrength("")


//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!

// function flowers(flower) {
//     switch (flower) {
//         case `vardi`:
//             console.log(`${flower} this flower is found `);
//             break;
//         case `ia`:
//             console.log(`${flower} this flower is found`);
//             break;
//         case `gvirila`:
//             console.log(`${flower} this flower is found`);
//             break;
//         default:
//             console.log(`we don't have flowers `);
//             break;
//     }
// }
// flowers("ia")

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!


// const num1 = prompt("first number");
// const num2 = prompt("second number");
// const num3 = prompt("third number");

// function largeName() {
//     if (num1 > num2 && num1 > num3) {
//         console.log(`largest number is ${num1}`);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(`largest number is ${num2}`);
//     } else {
//         console.log(`largest number is ${num3}`);
//     }
// }
// largeName()