// // 1) დაწერეთ ფუნცქია რომელსაც გადაეცემა 2 პარამეტრი პირველი
// // ეს არის ვალუტის კურსი და მეორე ეს არის თანხის რაოდენობა
// // თქვენი მიზანია გამოიანგარიშოთ ვალუტის ოდენობა მაგალითად
// //  function getGelToUsd("2.68", "300") // "$111"

function getGelToUsd(a, b) {
    return a / b;
}
console.log(getGelToUsd (300, 2.68));
 


// //2) დაწერეთ ფუნცია რომელიც არგუმენტად მიიღებს
//  // სტრინგების მასივს და დააბრუნებს ყველაზე პატარა სტრინგს
// //const strArr = ["gio", "gamocda", "rtuli", "chabareba", "ca", "masivi", "batoni"]
// // function getShortest(strArr) // ["ca"]

const strArr = ["gio", "gamocda", "rtuli", "chabareba", "ca", "masivi", "batoni"]

function getShortest(strArr) {
      const result = strArr.filter(Element => {
      return Element.length <3
      })
    return result
}
console.log(getShortest(strArr));

// 3) დაწერეთ ფუნცქია რომელიც ყოველ 2 წამში დომში
//დაარენდერებს(გამოაჩენს) წრეებს რომლის ფერსაც არგუმენდად მიიღებს
// function generateCircle("red") // ყოველ 2 წამში უნდა გამოჩნდეს წითელი წრეები დომში.


// const circle=document.getElementById("#circle")

// function generateCircle("red") {
    
// }



// // 4) შექმენით ფუნცქია რომელიც მიიღებს რიცხვების მასივს არგუმენტად
// // და დააბრუნებს მხოლოდ დადებითი რიცხვების ჯამს
// // const arr = [2, -10, 8, 5, -3, 6, 9, -20, -50]
// // funciton sumPositiveOnes(arr) // 30

const arr_number = [2, -10, 8, 5, -3, 6, 9, -20, -50];

function sumPositiveOnes(arr_number) {
    return arr_number.filter((item) => item > 0).reduce((sum, arr_number) => {
        return sum + arr_number
    })
}
console.log(sumPositiveOnes(arr_number))
 






