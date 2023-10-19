//  questin 1 even number //
document.write("<h1> 1) Even number </h1>")
for(var i=2; i<=50; i+=2){
    document.write(i)
    document.write("<br>")

}


// question 2 odd number //

document.write("<h1> 2) Odd number </h1>")
for(var i=1; i<=50; i+=2){
    document.write(i)
    document.write("<br>")
}


// question 3 even and odd number ///

document.write("<h1> 3) Even and Odd number </h1>")
for (var i = 1; i <= 50; i++){
    document.write(i,i%2=== 0? " (even) ":" (odd) ");
    document.write("<br>")
}




// question  4  pattern number //
document.write("<h1>4) Pattern of number </h1>")
var numpattrn = 10
for(var i=1; i <= numpattrn; i++){
var row = " "
for(var j=1; j <=i; j++ ){
    row +=j;
}
document.write(row)
document.write("<br>")

}


  

// question 5  students bio data //

document.write("<h1> 5) Array of objects </h1>")

var stddata = [
    { 
        Name : "Ahmed shah",
        Qulification : "Matric",
        Age : 18,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },
    { 
        Name : "nouman",
        Qulification : "Inter",
        Age : 21,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },
    { 
        Name : "Ahmer ali",
        Qulification : "Graduation",
        Age : 20,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },
    { 
        Name : "saqib",
        Qulification : "graduation",
        Age : 25,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },
    { 
        Name : "Bilal",
        Qulification : "Inter",
        Age : 19,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },
    { 
        Name : "Hammad",
        Qulification : "Matric",
        Age : 20,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },
    { 
        Name : "Mubashir",
        Qulification : "Inter",
        Age : 20,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },
    { 
        Name : "Meer hamza",
        Qulification : "Inter",
        Age : 22,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },
    { 
        Name : "Yousuf",
        Qulification : "Matric",
        Age : 22,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },
    { 
        Name : "kawish",
        Qulification : "Inter",
        Age : 22,
        InsituteName : "SK Digi Tech",
        Course : "Web Development",
    },

]


for ( i = 0; i < stddata.length; i++) {

        
    document.write("<br>Name:", stddata[i].Name);
    document.write("<br>Qulification:", stddata[i].Qulification);
    document.write("<br>Age:", stddata[i].Age);
    document.write("<br>InsituteName:", stddata[i].InsituteName);
    document.write("<br>Course:", stddata[i].Course);
    document.write("<br>")
    
}


