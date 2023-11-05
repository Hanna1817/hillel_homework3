let age = prompt("Введіть будь-ласка ваш вік", 1);
if (age%1 === 0 && age >=0) {
if (age%10 > 4 || (age >= 11 && age <= 14)){
console.log(age + " років");
}
else if(age%10 === 1){
    console.log(age + " рік");
}
else{
    console.log(age + " роки");
}
}
else { console.log("Ви ввели некоректне значення")};