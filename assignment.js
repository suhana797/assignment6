// assignment 21-25 task 1

// var firstname=prompt("enter your first name");
// var lastname=prompt("enter your last name");
// var fullname=firstname+" "+lastname;
// document.write("welcome "+" "+ fullname);

// assignment 21-25 task 2

// var phone=prompt("write the name of your favourite mobile phone model");
// document.write("FAVOURITE MOBILE PHONE IS"+" "+phone+"<br>");
// document.write("LENGTH OF MOBILE NAME IS"+" "+phone.length+" ");
  

// assignment 21-25 task 3
// var str="Pakistani";
// var n=str.indexOf("n");
// document.write("String:"+" "+str+"<br>");
// document.write("index of n is"+" "+n);

// assignment 21-25 task 4

// var str="Hello World";
// var n=str.lastIndexOf("l");
// document.write("String:"+" "+str+"<br>");
//  document.write("Last index of l is"+" "+n);

// assignment 21-25 task 5
//  var str="Pakistani";
// var n=str.charAt(3);
// document.write("String:"+" "+str+"<br>");
//  document.write("Character at index 3 is"+" "+n);

// assignment 21-25 task 6

//  var firstname=prompt("enter your first name");
//  var lastname=prompt("enter your last name");
//  var fullname=firstname.concat(lastname);
//  document.write("welcome"+" "+fullname);

// assignment 21-25 task 7

// var city="Hyderabad";
// var replace=city.replace("Hydera","Islama");
// document.write("city:",city+"<br>");

// document.write("After replacement:",replace);

// assignment 21-25 task 8
// var message="Ali and sami are best friends.They play cricket and football together";
// var replace=message.replace("and","&");
// document.write("message:",message+"<br>");
// document.write("after replacement:",replace);

// assignment 21-25 task 9
// var number="472";
// document.write("value"+number+"<br>");
// document.write("type: string<br>");
// var convert=parseInt(number);
// document.write("value"+number+"<br>");
// document.write("type:number<br>");


// assignment 21-25 task 10
// var input=prompt("enter any word that convert into uppercase");
// var convert=input.toUpperCase();
// document.write("user input:",input+"<br>");
// document.write("upper case:",convert);

// assignment 21-25 task 11
// var input=prompt("enter any word that convert into uppercase");
// var firstchar=input.slice(0,1);
// var secondchar=input.slice(1);
// var first=firstchar.toUpperCase();
// var second=secondchar.toLowerCase();
// document.write("user input:",input+"<br>");
// document.write("titlecase:",first+second);


// assignment 21-25 task 12
// var hum=35.36;
//  var result=parseInt(hum.toString().replace('.',''));
//  document.write("number:"+hum+"<br>");
//  document.write("result:",result);


// assignment 21-25 task 13
// var username=prompt("Enter your name ");
// if(/^[a-zA-Z0-9- _]*$/.test(username) == false){
//     alert("Please enter a valid username");
   
// }else{
// 	alert("HELLO "+username);
// }

// assignment 21-25 task 14
// var items =["cake", "apple pie", "cookie", "chips", "patties"];
// var user_value=prompt("Welcome to Nagdev Bakery.Enter the item that you want");
// var change=user_value.toLowerCase();
// var found;
// var indexOfOrder;
// for(var i=0;i<items.length;i++){

//     if (items[i]==change) {
//         found=items[i];
//         indexOfOrder=i;
//     }
// }if (!found) {
//     document.write("We are sorry. "+user_value+" is <b>not available</b> in our bakery");

// }else{
// document.write(found+" is <b>available</b> at index "+indexOfOrder+" in our bakery");    
// }


// assignment 21-25 task 16
// var  KU = "University of Karachi";

// 	var result= KU.split('');
// 	for(var i=0;i<result.length;i++){
// 		document.write(result[i]+"<br>");

//     }
    
// assignment 21-25 task 17
    // var anyvalue=prompt("Write a text");
	// var lastchar=anyvalue.substr(-1);
    // document.write("User input : "+anyvalue+" <br>");
    // document.write("Last character :"+lastchar+"<br>");
// assignment 21-25 task 18
    // var sentence="The quick brown fox jumps over the lazy dog";
	// var result=(sentence.match(/the/gi) || []).length;
	// document.write("Text : "+sentence+" <br>There are "+result+" occurrences of word 'the'");
// assignment 26-30 task 1
// var positive=prompt("Enter a positive number  e.g: 2.123");
// var round=Math.round(positive);
// var floor=Math.floor(positive);
// var ceil=Math.ceil(positive);
// document.write("number : "+positive+"<br>round off value : "+round+"<br>floor value : "+floor+"<br>ceil value : "+ceil);
// assignment 26-30 task 2
// var negative=prompt("enter any negative value e.g:-1.34");
// var round=Math.round(negative);
// var floor=Math.floor(negative);
// var ceil=Math.ceil(negative);
// document.write("number : "+negative+"<br>round off value : "+round+"<br>floor value : "+floor+"<br>ceil value : "+ceil);
// assignment 26-30 task 3

// var value=-4;
// 	var absvalue=Math.abs(value);
//     document.write("The absolute value of "+value+" is "+absvalue);
    // assignment 26-30 task 5
    // var dice1=Math.floor( Math.random() * 6 );
	// document.write("Random dice value : "+dice1);
	// var dice2=Math.floor( Math.random() * 6 );
    // document.write("<br>Random dice value : "+dice2);
    
// assignment 26-30 task 6

    // var result=Math.floor( Math.random() * 2 );
	// document.write("Random coin value heads: "+result);
	// var result=Math.floor( Math.random() * 2 );
    // document.write("<br>Random coin value tails : "+result);
    


// assignment 26-30 task 7


    // var weight=prompt("Enter your weight in kilograms :  ");
	// var result=weight.replace(/\D/g,'');
    // document.write("your weight is : "+result+" kilograms");
    
// assignment 26-30 task 8
    // var random=Math.floor(Math.random() * 5); 
	// var enter=parseInt(prompt("Enter a number between 1 to 10"));
	// if (enter==random) {
	// 	alert("Congratulation your guess is correct");
	// }else{
	// 	alert("Try again ");
		
    // }
    
// assignment 30-34 task 1
    // var d= new Date();
    // document.write(d);
    
// assignment 30-34 task 2

// var months = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// var date = new Date();
// alert("The current month is " + months[d.getMonth()]);

// assignment 30-34 task 3
// var d = new Date();
// var daysofweek = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri",
//    "Sat"
//  ];


// var day = daysofweek[d.getDay()];

// alert(day);
// assignment 30-34 task 4

// var d = new Date();
// var daysofweek = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri",
//    "Sat"
//  ];


// var day = daysofweek[d.getDay()];

// if (day=="Sat" || day=="Sun") {
//     alert("Its Fun day");	
//     }else{
//         alert("Work day");
//     }


// assignment 30-34 task 5
// var currentdate= new Date();
// var nowDate=currentdate.getDate();
// if (nowDate>15) {
//     document.write("Last days of the month");
// }else{
//     document.write("First fifteen days of the month");
// }
    

// assignment 30-34 task 7
// var date = new Date();
// var hour= date.getHours();
// 	if (hour>12) {
// 		alert("Its PM");
// 	}else{
// 		alert("Its AM");
//     }
    
// assignment 30-34 task 13
// var age=parseInt(prompt("Enter your age : "));
// var date = new Date();
// var birth=date.getFullYear()-age;
// document.write("Your age is "+age+"<br>Your birth year is "+birth);

// assignment 30-34 task 14
// var cust_name="suhana";
// var curr_month="december";
// var noofunit=300;
// var perunit=17;
// var netamountpayable=noofunit*perunit;
// var latepayment=5;
// var gap=netamountpayable+latepayment;
// document.write("customer name:"+cust_name+"<br>"+"current month:"+curr_month+"<br>"+"number of unit:"+noofunit+"<br>"+"per unit:"+perunit+"<br>"+"net amount payable:"+netamountpayable+"<br>"+"late payment surcharge:"+latepayment+"<br>"+"gross amount payable:"+gap+"<br>");
// assignment 35-38 task 1
// function date(){

//     var d = new Date();
//     document.write(d);
    
//     }
    // assignment 35-38 task 2

    // function fullname(firstname,lastname){

    //     return firstname + lastname;
    // }
    // function fullname1(){

    //     var fname = prompt("enter first name");
    //     var lname = prompt("enter last name");
    
    //     alert("Hello " + fullname(fname,lname));
    
    // }