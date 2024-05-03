// chapter 21-25

// Q1
// var firstName = prompt('Enter ur firrst name')
// var lastName = prompt('Enter ur last name')
// var fullName = firstName + ' ' + lastName
// document.write(`greetings ${fullName}` )


// Q2
// var userImp = prompt('enter ur fav mobile modal') 
// document.write(`My fav phone is: ${userImp} <br>`)
// document.write(`String length: ${userImp.length} `)

// Q3
// var arr = "pakistan"
// var n = 'n'
// document.write(`string: ${arr} <br>  Index of ${n}: ${arr.indexOf(n)}`)

// q4
// var arr = "hello world"
// var n = 'l'
// document.write(`string: ${arr} <br> Last Index of ${n}: ${arr.lastIndexOf(n)}`)

// Q5
// var arr = "pakistan"
// var n = 3
// document.write(`string: ${arr} <br>  Character at index ${n}: ${arr[n]}`)

// Q6
// var firstName = prompt("enter ur first name ")
// var lastName = prompt("enter ur last name ")
// var fullName = firstName.concat(lastName)
// document.write(fullName)

// Q7
// var hyder = "hyder"
// var abad = "abad"
// var inp = prompt("enter the replacment")
// document.write("City :"+hyder+abad)
// document.write("<br> After replacment :"+inp+abad)

// Q8
// var and = "and"
// var message = "Ali and Sami are best friends. They play cricket "+ and +" football together.";
// document.write(message + "<br>")
// and = "&"
// message = "Ali and Sami are best friends. They play cricket "+ and +" football together."
// document.write(message)

// Q9
// var num = "254"
// document.write(`value : ${num} <br>`)
// document.write(`Type : ${typeof num}<br>`)
// var num = +"254"
// document.write(`value : ${num}<br>`)
// document.write(`Type : ${typeof num}<br>`)

// Q10
// var userInp = "peanuts"
// document.write(`User Input : ${userInp} <br>`)
// document.write(`Upper Case : ${userInp.toLocaleUpperCase()} <br>`)

// Q11
// var userInp = "javascript"
// document.write("User input : "+userInp)
// var first = userInp.slice(0,1)
// var rest = userInp.slice(1)
// document.write("<br> Title case : "+first.toUpperCase()+rest)

// Q13
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// Q14
// var arr = ['cake','apple pie','cookie','chips','patties'];
// var userInp = prompt("Enter dessert")
// var match = true
// for(i=0;i<arr.length; i++){
//     if(userInp.toLowerCase() == arr[i]){
//         document.write(`${arr[i]} is avalible at index ${arr.indexOf(arr[i])}`)
//         match=false
//         break
//     }
// }
// if(match){
//     document.write(`${userInp} is not avalible `)
    
// }


// Q15
// var userImp = prompt('Create a password')
// let match = true

// if(userImp.length<24 && userImp.length>7 && userImp[0]!== NaN ){
//     document.write("ur password is valid")
    
    
// }
// else{
//   document.write('If the password does not meet the requirements')
// }

// Q16
// var university = "University of Karachi";
// for(i=0;i<university.length;i++){
//     document.write(university[i] + "<br>")
// }
 

// Q17
// var coun = 'pakistan'
// document.write(`User input: ${coun} <br>`)
// document.write(`Last index of ${coun} is: ${coun[coun.length - 1]}`)






//chapter 26 - 30



// Q1
// var num = 34.45667
// document.write(`Number : ${num} <br>`)
// document.write(`Round off value : ${Math.round(num)} <br>`)
// document.write(`Floor value : ${Math.floor(num)} <br>`)
// document.write(`Ceil value : ${Math.ceil(num)} <br>`)

// Q2
// var num = -34.45667
// document.write(`Number : ${num} <br>`)
// document.write(`Round off value : ${Math.round(num)} <br>`)
// document.write(`Floor value : ${Math.floor(num)} <br>`)
// document.write(`Ceil value : ${Math.ceil(num)} <br>`)